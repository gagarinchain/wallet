'use strict'

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

// Find this list at: https://github.com/ipfs/js-ipfs/blob/master/src/core/runtime/config-browser.json
const bootstrapList = [
    '/ip4/127.0.0.1/tcp/9181/ws/p2p/16Uiu2HAmNr4skStG12TSRgFy4X7hRT3Gm8Ums3tUzkWqFo5hqLNq',
];

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
function createNode (callback) {
    PeerInfo.create((err, peerInfo) => {
        if (err) {
            return callback(err)
        }

        const peerIdStr = peerInfo.id.toB58String();
        const ma = `/ip4/127.0.0.1/tcp/9081/p2p/${peerIdStr}`;

        peerInfo.multiaddrs.add(ma);

        const node = new Node({
            peerInfo
        });

        node.idStr = peerIdStr;

        callback(null, node)
    })
}

module.exports = createNode;