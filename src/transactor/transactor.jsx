import logo from "../logo.svg";
import React, {Component} from "react";
import {Row, Col, FormGroup, FormControl, FormLabel, Button} from "react-bootstrap";
import Form from "react-bootstrap/Form";


export class Transactor extends Component {
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Label className="small" htmlFor="priv">Private key</Form.Label>
                    <FormControl type="text" name="priv" onChange={(event) => {this.props.handleChange(event);}}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="small" htmlFor="to">Send to</Form.Label>
                    <Form.Control type="text" name="to" onChange={(event) => {this.props.handleChange(event);}}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label className="small" htmlFor="nonce">Nonce</Form.Label>
                    <Form.Control type="text" name="nonce" onChange={(event) => {this.props.handleChange(event);}}/>
                </Form.Group>
                <Form.Group>
                        <Form.Label className="small" htmlFor="value">Amount</Form.Label>
                        <Form.Control type="text" name="value" onChange={(event) => {this.props.handleChange(event);}}/>
                </Form.Group>
                <Form.Group>
                        <Form.Label className="small" htmlFor="fee">Fee</Form.Label>
                        <Form.Control type="text" name="fee" onChange={(event) => {this.props.handleChange(event);}}/>
                </Form.Group>
                <Form.Group>
                        <Form.Label className="small" htmlFor="data">Additional data</Form.Label>
                        <Form.Control type="text" name="data" onChange={(event) => {this.props.handleChange(event);}}/>
                </Form.Group>
                <Button onClick={() => {this.props.handleSubmit(this.props.node)}}>Submit</Button>
            </Form>
        );
    }
}
