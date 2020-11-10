import {Component} from "react";
import React from "react";
import {BlockShort} from "./block-short";
import Table from "react-bootstrap/Table";

export class BlocksTable extends Component {
    render() {
        let last20;
        if (this.props.last20 && this.props.last20.length > 0) {
            last20 = this.props.last20.map(
                item => {
                    if (item) {
                        return <BlockShort key={item.hash} block={item}/>
                    }
                }
            );
        } else {
            last20 = <tr><td colSpan="7">Empty</td></tr>
        }
        return (
            <Table>
                <thead>
                <tr>
                    <th>Hash</th>
                    <th>Height</th>
                    <th>Parent</th>
                    <th>QC Block</th>
                    <th>QC Height</th>
                    <th>TxCount</th>
                    <th>Timestamp</th>
                </tr>
                </thead>
                <tbody>
                {last20}
                </tbody>
            </Table>
        )
    }
}