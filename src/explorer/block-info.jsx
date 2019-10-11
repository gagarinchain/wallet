import {Component} from "react";
import {Col, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import React from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

// Block {txs: Array(0), header: BlockHeader, cert: QuorumCertificate, data: BlockData}
// cert: QuorumCertificate {header: BlockHeader, signatureAggregate: SignatureAggregate}
// data: BlockData {data: Uint8Array(19)}
// header: BlockHeader
// dataHash: Uint8Array(32) [216, 230, 2, 87, 80, 239, 238, 113, 174, 143, 166, 208, 65, 120, 7, 152, 153, 14, 110, 237, 131, 174, 235, 137, 203, 220, 224, 157, 43, 65, 130, 246]
// hash: Uint8Array(32) [1, 238, 231, 72, 195, 8, 162, 154, 154, 70, 239, 209, 73, 141, 198, 163, 118, 135, 66, 14, 199, 65, 45, 100, 44, 211, 30, 38, 163, 45, 18, 255]
// height: 76
// parentHash: Uint8Array(32) [180, 199, 5, 12, 16, 113, 105, 108, 211, 102, 77, 194, 74, 199, 216, 196, 32, 39, 42, 7, 249, 131, 167, 114, 154, 243, 248, 3, 117, 171, 190, 187]
// qcHash: Uint8Array(32) [66, 32, 122, 82, 55, 112, 6, 169, 56, 47, 156, 34, 111, 240, 195, 156, 104, 84, 232, 146, 238, 166, 0, 107, 85, 29, 151, 36, 174, 155, 229, 192]
// stateHash: Uint8Array(32) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// timestamp: 1570561214000000000
// txHash: Uint8Array(32) [197, 210, 70, 1, 134, 247, 35, 60, 146, 126, 125, 178, 220, 199, 3, 192, 229, 0, 182, 83, 202, 130, 39, 59, 123, 250, 216, 4, 93, 133, 164, 112]
// txs: []
export class BlockInfo extends Component {
    render() {
        return (
            <div>
                <Header header={this.props.block.header} />
            </div>
    )}
}

const Header = (header) => {
    let h = header.header;
    return <Table>
        <thead>
        <tr>
            <th colSpan="2">Header</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Hash</td><td>{h.hash}</td>
        </tr>
        <tr>
            <td>Height</td><td>{h.height}</td>
        </tr>
        <tr>
            <td>Parent</td><td>{h.parentHash}</td>
        </tr>
        <tr>
            <td>QC Hash</td><td>{h.qcHash}</td>
        </tr>
        <tr>
            <td>State Hash</td><td>{h.stateHash}</td>
        </tr>
        <tr>
            <td>Tx Hash</td><td>{h.txHash}</td>
        </tr>
        <tr>
            <td>Data Hash</td><td>{h.dataHash}</td>
        </tr>
        <tr>
            <td>Timestamp</td><td>{h.timestamp}</td>
        </tr>
        </tbody>
    </Table>
}
