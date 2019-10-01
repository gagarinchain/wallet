import React, { Component } from 'react';
import ReactDom from "react-dom";
import logo from './logo.svg';
import './App.css';
import createNode from './Node.js'
import {Message, Transaction, Signature, google} from '../protos.js'
import * as bls from "noble-bls12-381";
import {keccak256} from 'js-sha3'
import "@babel/polyfill"

const GossipSub = require('libp2p-gossipsub');

let n;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key:'',
            to: '',
            nonce:'',
            value:'',
            fee:'',
            data:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        createNode((err, node) => {
            if (err) {
                return console.log('Could not create the Node, check if your browser has WebRTC Support', err)
            }
            node.pubsub = new GossipSub(node, props);

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
                    return console.log(err)
                }

                const idStr = node.peerInfo.id.toB58String();

                const topic = '/tx';
                const receiveMsg = (msg) => console.log(msg.toString());

                node.pubsub.start((err) => {
                    if (err) {
                        console.log('Upsy', err)
                    }
                });

            })

            n = node
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Gagarin.Network</h2>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <label>
                                key:
                                <input type="text" name="key" value={this.state.key} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div>
                            <label>
                                to:
                                <input type="text" name="to" value={this.state.to} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="row">
                            <label>
                                nonce:
                                <input type="text" name="nonce" value={this.state.nonce} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="row">
                            <label>
                                value:
                                <input type="text" name="value" value={this.state.value} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="row">
                            <label>
                                fee:
                                <input type="text" name="fee" value={this.state.fee} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="row">
                            <label>
                                data:
                                <input type="text" name="data" value={this.state.data} onChange={this.handleChange} />
                            </label>
                        </div>
                            <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        //node.pubsub.unsubscribe()})
        node.stop((err) => {});
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const address = Buffer.from(this.state.to.substring(2), 'hex');
        const key = Buffer.from(this.state.key, 'hex');

        //we omit type since js adds it to message when type==0, but golang don't lol
        let tx = Transaction.create(
            {
                to: address,
                nonce: parseInt(this.state.nonce, 10),
                value: parseInt(this.state.value, 10),
                fee:parseInt(this.state.fee, 10),
                data:Buffer.from(this.state.data, 'utf-8')
            });
        let txbytes = Transaction.encode(tx).finish();

        (async () => {
            return await bls.sign(Buffer.from(keccak256.arrayBuffer(txbytes)), key, 0)
        })().then( (sign) =>{
            console.log("sign: ", sign);

            let publicKey = bls.getPublicKey(key);
            tx.signature = Signature.create({
                from: publicKey,
                signature: sign

            });

            let any = google.protobuf.Any.create(
                {
                    type_url:"type.googleapis.com/Transaction",
                    value:Transaction.encode(tx).finish()
                }
            );
            let m = Message.create(
                {
                    type:Message.MessageType.TRANSACTION,
                    payload: any
                }
            );

            let buf = Message.encode(m).finish();
            console.log("sending: " + buf.toString());

            //todo add sending to 4 peers instead of multicast
            n.pubsub.publish('/tx', [new Buffer(buf)], (err) => {
                if (err) {
                    return console.log(err)
                }
            });


        });


        event.preventDefault();
    }
}


ReactDom.render((
            <App/>
), document.getElementById("root"));