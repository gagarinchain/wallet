import React from 'react';
import { connect } from 'react-redux';
import {Account} from "./account";
import {createSelector} from "reselect"

function mapStateToProps(state, ownProps) {
    return {
        account: transformAccountSelector(state, ownProps.id),
    };
}

const selectAccount = (state, id) => state.getIn(["blocks", "accounts", id.toLowerCase()]);
//    bytes address = 2;
//     bytes block = 3;
//     uint64 nonce = 4;
//     bytes value = 5;
//     repeated bytes proof = 6;
const transformAccountSelector = createSelector(
    [selectAccount],
    (acc) => {
        console.log(acc)
        if (acc == null) {
            return {
                "address": "",
                "block": "",
                "nonce": "",
                "value": "",
                "proof": [ ]
            }
        }
        return {
            "address": Buffer.from(acc.address).toString('hex'),
            "block": Buffer.from(acc.block).toString('hex'),
            "nonce": acc.nonce,
            "value": acc.value,
            "proof": [

            ]
        }
    }
);


export const AccountContainer = connect(mapStateToProps)(Account);