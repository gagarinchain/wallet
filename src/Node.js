'use strict'

const GossipSub = require('libp2p-gossipsub');

const CID = require('cids');
const multihashing = require('multihashing-async');
const WebSockets = require('libp2p-websockets');
const Mplex = require('libp2p-mplex');
const SPDY = require('libp2p-spdy');
const SECIO = require('libp2p-secio');
const Bootstrap = require('libp2p-bootstrap');
const DHT = require('libp2p-kad-dht');
const defaultsDeep = require('@nodeutils/defaults-deep');
const libp2p = require('libp2p');
const PeerInfo = require('peer-info');
const pull = require('pull-stream');
const Pushable = require('pull-pushable');


// Find this list at: https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/config-browser.json
const bootstrapList = [
    '/ip4/127.0.0.1/tcp/9181/ws/p2p/16Uiu2HAmRfSdSFGboNKPYwcWEPXWtnoanBLMVeY6Ak6A31uC5BVm',
];
const p = Pushable();
const txs = new Map();

class Node extends libp2p {
    constructor (_options) {
        const defaults = {
            modules: {
                transport: [
                    WebSockets,
                ],
                streamMuxer: [
                    Mplex,
                    SPDY
                ],
                peerDiscovery: [
                    Bootstrap
                ],
                connEncryption: [
                    SECIO
                ],
                dht: DHT
            },
            config: {
                peerDiscovery: {
                    autoDial: true,
                    bootstrap: {
                        interval: 20e3,
                        enabled: true,
                        list: bootstrapList
                    }
                },
                dht: {
                    enabled: true
                }
            },
            connectionManager: {
                minPeers: 1,
                maxPeers: 50
            }
        };

        super(defaultsDeep(_options, defaults))
    }
}

function createNode () {
    return new Promise((resolve, reject) => {
        PeerInfo.create((err, peerInfo) => {
            if (err) {
                reject(err);
                return
            }

            console.log(peerInfo);

            const ma = `/ip4/0.0.0.0/tcp/0`;

            peerInfo.multiaddrs.add(ma);

            const node = new Node({
                peerInfo
            });

            // node.idStr = peerIdStr;

            resolve(node)
        })
    })
}

function startNode(node) {
    return new Promise((resolve, reject) => {

        // node.pubsub = new GossipSub(node, {fallbackToFloodsub: false});

        node.on('peer:discovery', (peerInfo) => {
            console.log('Discovered a peer:', peerInfo.id.toB58String());

            if (txs.size < 3) {
                let push = Pushable();
                txs.set(peerInfo.id.toB58String(), push);

                node.dialProtocol(peerInfo, "/gagarin/tx/1.0.0", (err, con) => {
                    if(err) {
                        console.log(err)
                    } else {
                        pull(
                            push,
                            con
                        );
                    }

                });

            }

        });

        node.on('peer:connect', (peerInfo) => {
            const idStr = peerInfo.id.toB58String();
            console.log('Got connection to: ' + idStr);
        });

        node.on('peer:disconnect', (peerInfo) => {
            const idStr = peerInfo.id.toB58String();
            txs.delete(idStr)
        });

        node.start((err) => {
            if (err) {
                reject(err);
                return console.log(err)
            }
            resolve(node)
            // node.pubsub.start((err) => {
            //     if (err) {
            //         reject(err);
            //         console.log('Upsy', err)
            //     }
            //     resolve(node)
            // });
        });
    })
}

Node.prototype.send = function(data) {
    console.log("pushing");
    // data.forEach( (uint)
    //
    // )
    p.push(data);
};

Node.prototype.sendTx = function(data) {
    console.log("pushing tx to [" + txs.size + "] peers");
    txs.forEach((v, k) => {
        console.log(v, k);
        v.push(data)
    });

};

Node.prototype.receive = function(transform, consume) {
        let peerId = {
            id: "16Uiu2HAmRfSdSFGboNKPYwcWEPXWtnoanBLMVeY6Ak6A31uC5BVm",
        };

        findPeers(this, "/tx").then((val) => {
            val.forEach(element => console.log("peers found: " + element))
        });


        PeerInfo.create(peerId, (err, peerInfo) => {
            if (err) {
                console.log(err);
                return
            }

            console.log(peerInfo);

            this.dialProtocol(peerInfo, "/gagarin/ext/1.0.0", (err, con) => {
                if(err) {
                    console.log(err)
                } else {
                    pull(
                        p,
                        con
                    );
                    pull(
                        con,
                        pull.map(transform),
                        pull.drain(consume)
                    )
                }

            });
    })
}

function findPeers(node, name) {
    return new Promise((resolve, reject) => {
        multihashing(Buffer.from(name), 'sha2-256', (Error, Buffer) => {
            if (Error) {
                reject(Error);
                return
            }
            const cid = new CID(1, 'raw', Buffer);
            console.log(cid.toString());

            node.contentRouting.findProviders(cid, {maxTimeout:1000, maxNumProviders:1}, (error, result) => {
                if (error) {
                    reject(error);
                    return console.log(error)
                }
                console.log(result);
                resolve(result)
            })
        });
    });
}

module.exports.createNode = createNode;
module.exports.startNode = startNode;
module.exports.findPeers = findPeers;
