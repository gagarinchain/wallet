'use strict'

const GossipSub = require('libp2p-gossipsub');

const WebRTCStar = require('libp2p-webrtc-star');
const WebSockets = require('libp2p-websockets');
const WebSocketStar = require('libp2p-websocket-star');
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

            const peerIdStr = peerInfo.id.toB58String();
            const ma = `/ip4/127.0.0.1/tcp/9081/p2p/${peerIdStr}`;

            peerInfo.multiaddrs.add(ma);

            const node = new Node({
                peerInfo
            });

            node.idStr = peerIdStr;

            resolve(node)
        })
    })
}

function startNode(node) {
    return new Promise((resolve, reject) => {

        node.pubsub = new GossipSub(node, {fallbackToFloodsub: false});

        node.on('peer:discovery', (peerInfo) => {
            console.log('Discovered a peer:', peerInfo.id.toB58String());
        });

        node.on('peer:connect', (peerInfo) => {
            const idStr = peerInfo.id.toB58String();
            console.log('Got connection to: ' + idStr);
        });

        node.on('peer:disconnect', (peerInfo) => {
            const idStr = peerInfo.id.toB58String();
        });

        node.start((err) => {
            if (err) {
                reject(err);
                return console.log(err)
            }
            node.pubsub.start((err) => {
                if (err) {
                    reject(err);
                    console.log('Upsy', err)
                }
                resolve(node)
            });
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

Node.prototype.receive = function(transform, consume) {
        let peerId = {
            id: "16Uiu2HAmRfSdSFGboNKPYwcWEPXWtnoanBLMVeY6Ak6A31uC5BVm",
        };
        PeerInfo.create(peerId, (err, peerInfo) => {
            if (err) {
                console.log(err);
                return
            }

            console.log(peerInfo);

            const peerIdStr = peerInfo.id.toB58String();
                const ma = `/ip4/127.0.0.1/tcp/9181/p2p/${peerIdStr}`;

            peerInfo.multiaddrs.add(ma);

            this.dialProtocol(peerInfo, "/gagarin/1.0.0", (err, con) => {
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

module.exports.createNode = createNode;
module.exports.startNode = startNode;