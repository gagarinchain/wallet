import {Component} from "react";
import React from "react";
import {Form, FormControl, Button} from "react-bootstrap";

export class Search extends Component {
    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mx-auto" style={{width: 410 + "px"}}
                             name="request" onChange={(event) => {this.props.handleChange(event);}} />
                <Button variant="outline-success" onClick={() => {this.props.handleSubmit()}}>Search</Button>
            </Form>
        )
    }
}