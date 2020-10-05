import {google, gagarin} from "../../protos";
import React from "react";
import {connect} from "react-redux";
import {Transactor} from "./transactor";
import * as bls from "noble-bls12-381";
import hash from "./hasher";

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
        let from = Buffer.from(bls.getPublicKey(key)).slice(28);
        //we omit type since js adds it to message when type==0, but golang don't
        let tx = gagarin.network.core.Transaction.create(
            {
                to: address,
                from: from,
                nonce: nonceNulled,
                value: parseInt(value, 10),
                fee: parseInt(fee, 10),
                signature: null,
                data: Buffer.from(data, 'utf-8')
            });
        let h = hash(tx);

        (async () => {
            return await bls.sign(h, key, 0)
        })().then((sign) => {
            console.log("sign: ", sign);
            console.log("hash: ", h);

            let publicKey = bls.getPublicKey(key);
            tx.signature = gagarin.network.core.Signature.create({
                from: publicKey,
                signature: sign

            });

            tx.from = Uint8Array.from([]);
            console.log(tx);
            let any = google.protobuf.Any.create(
                {
                    type_url: "type.googleapis.com/gagarin.network.core.Transaction",
                    value: gagarin.network.core.Transaction.encode(tx).finish()
                }
            );
            console.log("tx: ", gagarin.network.core.Transaction.encode(tx).finish());
            console.log("any: ", any);
            let m = gagarin.network.core.Message.create(
                {
                    type: gagarin.network.core.Message.MessageType.TRANSACTION,
                    payload: any
                }
            );

            let buf = gagarin.network.core.Message.encodeDelimited(m).finish();
            console.log("sending: ", buf);
            console.log("sending: ", Buffer.from(buf).toString('hex'));

            //todo add sending to 4 peers instead of multicast
            n.sendTx(new Buffer(buf))
        });
    }
}


export const TransactorContainer = connect(mapStateToProps, mapDispatchToProps)(Transactor);
