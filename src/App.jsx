import React, { Component } from 'react';
import ReactDom from "react-dom";
import logo from './logo.svg';
import './App.css';
import Tx from './Tx.jsx'

const GossipSub = require('libp2p-gossipsub');

class App extends Component {
    constructor(props) {
        super(props);


    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to Gagarin.Network</h2>
                </div>
                <div>
                    <Tx>
                    </Tx>
                </div>
            </div>
        );
    }
}


ReactDom.render((
            <App/>
), document.getElementById("root"));