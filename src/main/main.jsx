import React from "react";
import {Route, Switch} from "react-router-dom";
import {TransactorContainer} from "../transactor/transactor-container";
import {ExplorerContainer} from "../explorer/explorer-container";
import * as protobuf from "protobufjs";
import {gagarin} from "../../protos";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Icon from "./icon.jpg"
import {BlockInfoContainer} from "../explorer/block-info-container";
import {SearchContainer} from "../search/search-container";
import {ResultsContainer} from "../search/results-container";

export class Main extends React.Component {
    componentDidMount() {
        this.props.node.receive(
            (data) => {
                console.log(data);
                try {
                    return gagarin.network.event.Event.decode(data);
                } catch (e) {
                    if (e instanceof protobuf.util.ProtocolError) {
                        // e.instance holds the so far decoded message with missing required fields
                    } else {
                        // wire format is invalid
                    }
                }
            },
            (data) => {
                if (data) {
                    if (data.type === gagarin.network.event.Event.EventType.BLOCK_ADDED) {
                        let any = data.payload;
                        let block = gagarin.network.core.Block.decode(any.value);
                        console.log(block);
                        this.props.blockReceived(block)
                    }
                    if (data.type === gagarin.network.event.Event.EventType.EPOCH_STARTED) {
                        let any = data.payload;
                        let epoch = gagarin.network.event.EpochStartedPayload.decode(any.value);
                        console.log(epoch);
                        this.props.epochStarted(epoch)
                    }
                    if (data.type === gagarin.network.event.Event.EventType.VIEW_CHANGED) {
                        let any = data.payload;
                        let view = gagarin.network.event.ViewChangedPayload.decode(any.value);
                        console.log(view);
                        this.props.viewChanged(view)
                    }
                    if (data.type === gagarin.network.event.Event.EventType.COMMITTED) {
                        let any = data.payload;
                        let hash = gagarin.network.event.CommittedPayload.decode(any.value);
                        console.log(hash);
                        this.props.committed(hash)
                    }
                    if (data.type === gagarin.network.event.Event.EventType.BLOCK) {
                        let any = data.payload;
                        if (any == null) {
                            this.props.blockResponseReceived({
                                id: data.id
                            });
                        } else {
                            let block = gagarin.network.core.Block.decode(any.value);
                            console.log(block);
                            this.props.blockResponseReceived({
                                block: block,
                                id: data.id
                            })
                        }
                    }
                    if (data.type === gagarin.network.event.Event.EventType.ACCOUNT) {
                        let any = data.payload;
                        if (any == null) {
                            this.props.accountResponseReceived({
                                id: data.id,
                            })
                        } else {
                            let account = gagarin.network.event.AccountResponsePayload.decode(any.value);
                            console.log(account);
                            this.props.accountResponseReceived({
                                id: data.id,
                                account:account.account
                            })
                        }
                    }
                }
            }
        )
    }

    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#"><Image src={Icon} roundedCircle /></Navbar.Brand>
                    <Navbar.Brand href="#">Gagarin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#blocks">Blocks</Nav.Link>
                        </Nav>
                        <SearchContainer node={this.props.node} />
                    </Navbar.Collapse>
                    <Navbar.Text>
                        Epoch: {this.props.epoch}
                    </Navbar.Text>
                    <Navbar.Text>
                        View: {this.props.view}
                    </Navbar.Text>
                </Navbar>
                <Container>
                    <Row className="content">
                        <Col sm={9} md={9} lg={9} className="text-left">
                            <Switch>
                                <Route exact path="/" render={(props) => <TransactorContainer {...props} node={this.props.node} />} />
                                <Route exact path="/blocks" render={(props) => <ExplorerContainer {...props} />} />
                                <Route exact path="/block/:id" render={(props) => <BlockInfoContainer {...props} />} />
                                <Route exact path="/search/:id" render={(props) => <ResultsContainer {...props} />} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}