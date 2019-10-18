import React, { Component } from 'react';
import ReactDom from "react-dom";
import {ConnectedRouter} from "connected-react-router/immutable";
import { Provider } from "react-redux";
import './App.css';
import {makeStore, history} from "./store";
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
            console.log(store.getState());
            return (
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <MainContainer node={this.state.node} />
                    </ConnectedRouter>
                </Provider>
            );
        } else {
            return null
        }

    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return null;
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