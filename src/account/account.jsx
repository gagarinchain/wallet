import {Component} from "react";
import React from "react";
import Table from "react-bootstrap/Table";

export class Account extends Component {
    render() {
        return (
            <div>
                <AccountBody account={this.props.account} />
            </div>
    )}
}
//    bytes address = 2;
//     bytes block = 3;
//     uint64 nonce = 4;
//     bytes value = 5;
//     repeated bytes proof = 6;
const AccountBody = (acc) => {
    let account = acc.account
    return <Table>
        <thead>
        <tr>
            <th colSpan="2">Account</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>Address</td><td>{account.address}</td>
        </tr>
        <tr>
            <td>Block hash</td><td>{account.block}</td>
        </tr>
        <tr>
            <td>Nonce</td><td>{account.nonce}</td>
        </tr>
        <tr>
            <td>Value</td><td>{account.value}</td>
        </tr>

        </tbody>
    </Table>
}
