import {Component} from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import React from "react";
import Table from "./block-info";
import {Link} from "react-router-dom";



export class BlockShort extends Component {
    render() {
        let clazz = this.props.block.isCommitted ? "table-success" : "table-default";
        return (
                <tr className={clazz}>
                    <td><Link to={`/block/${this.props.block.hash}`} activeclassname="active">{this.props.block.hash.substr(0, 12)}</Link></td>
                    <td>{this.props.block.height}</td>
                    <td><Link to={`/block/${this.props.block.parent}`} activeclassname="active">{this.props.block.parent.substr(0, 12)}</Link></td>
                    <td><Link to={`/block/${this.props.block.qcblock}`} activeclassname="active">{this.props.block.qcblock.substr(0, 12)}</Link></td>
                    <td>{this.props.block.qcheight}</td>
                    <td>{this.props.block.txcount}</td>
                    <td>{this.props.block.timestamp}</td>
                </tr>
        )
    }
}