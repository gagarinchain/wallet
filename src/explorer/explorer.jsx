import React, { Component } from "react";
import {BlocksTable} from "./blocks-table";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export class Explorer extends Component {

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <BlocksTable {...this.props}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
