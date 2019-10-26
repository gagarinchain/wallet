import {google, Message, Signature, Transaction} from "../../protos";
import {keccak256} from "js-sha3";
import React from "react";
import {connect} from "react-redux";
import {Transactor} from "./transactor";
import * as bls from "noble-bls12-381";

import {TX_FIELD_ENTERED} from "./actions";
import {formFieldEnteredCommon} from "../action-common";

function mapStateToProps(state) {
    return {
        priv: state.getIn(["form", "tx", "priv"]),
        to: state.getIn(["form", "tx", "to"]),
        nonce: state.getIn(["form", "tx", "nonce"]),
        value: state.getIn(["form", "tx", "value"]),
        fee: state.getIn(["form", "tx", "fee"]),
        data: state.getIn(["form", "tx", "data"]),
    };
}


function mapDispatchToProps(dispatch) {
    return {

        handleChange: (event) => {
            let value = event.target.value !== "" ? event.target.value : null;
            dispatch(formFieldEnteredCommon(TX_FIELD_ENTERED)(event.target.name, value));
        },

        handleSubmit: (n) => {
            dispatch(handleSubmit(n));
        }
    };
}

function handleSubmit(n) {
    return (dispatch, getState) => {
        let to = getState().getIn(["form", "tx", "to"]);
        let priv = getState().getIn(["form", "tx", "priv"]);
        let nonce = getState().getIn(["form", "tx", "nonce"]);
        let value = getState().getIn(["form", "tx", "value"]);
        let fee = getState().getIn(["form", "tx", "fee"]);
        let data = getState().getIn(["form", "tx", "data"]);

        console.log(to.substring(2));
        const address = Buffer.from(to.substring(2), 'hex');
        const key = Buffer.from(priv, 'hex');

        let nonceInt = parseInt(nonce, 10);
        let nonceNulled = (nonceInt == 0) ? null: nonceInt;
        //we omit type since js adds it to message when type==0, but golang don't
        let tx = Transaction.create(
            {
                to: address,
                nonce: nonceNulled,
                value: parseInt(value, 10),
                fee: parseInt(fee, 10),
                signature: null,
                data: Buffer.from(data, 'utf-8')
            });
        let txbytes = Transaction.encode(tx).finish();

        (async () => {
            return await bls.sign(Buffer.from(keccak256.arrayBuffer(txbytes)), key, 0)
        })().then((sign) => {
            console.log("sign: ", sign);
            console.log("hash: ", Buffer.from(keccak256.arrayBuffer(txbytes)));
            console.log("tx bytes: ", txbytes);

            let publicKey = bls.getPublicKey(key);
            tx.signature = Signature.create({
                from: publicKey,
                signature: sign

            });

            console.log(publicKey);
            let any = google.protobuf.Any.create(
                {
                    type_url: "type.googleapis.com/Transaction",
                    value: Transaction.encode(tx).finish()
                }
            );
            console.log("tx: ", Transaction.encode(tx).finish());
            console.log("any: ", any);
            let m = Message.create(
                {
                    type: Message.MessageType.TRANSACTION,
                    payload: any
                }
            );

            let buf = Message.encode(m).finish();
            console.log("sending: ", buf);

            //todo add sending to 4 peers instead of multicast
            n.pubsub.publish('/tx', [new Buffer(buf)], (err) => {
                if (err) {
                    return console.log(err)
                }
            });
        });
    }
}


export const TransactorContainer = connect(mapStateToProps, mapDispatchToProps)(Transactor);
