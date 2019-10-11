import React, { Component } from 'react';
import ReactDom from "react-dom";
import { HashRouter, Route, Switch} from "react-router-dom";
import { Provider } from "react-redux";
import './App.css';
import {makeStore} from "./store";
import {createNode, startNode} from "./Node"
import "@babel/polyfill"
import {MainContainer} from "./main/main-container";

const store = makeStore();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isReady: false};
    }

    componentDidMount() {
        initNode().then( (node) => {
            this.setState( {
                isReady:true,
                node: node
            })
        })
    }

    render() {
        if (this.state.isReady === true) {
            return (
                <Provider store={store}>
                    <HashRouter>
                        <MainContainer node={this.state.node} />
                    </HashRouter>
                </Provider>
            );
        } else {
            return null
        }

    }

}


ReactDom.render((
    <App />
), document.getElementById("root"));

async function initNode() {
    let node;
    try {
        node = await createNode();
        node = await startNode(node)
    }
    catch(err){
        console.log('Could not create the Node, check if your browser has WebRTC Support', err);
        return
    }
    return node
}

function stop() {
    //node.pubsub.unsubscribe()})
    n.stop((err) => {
        log.err(err)
    });
}