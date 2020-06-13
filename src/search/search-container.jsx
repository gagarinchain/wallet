import {connect} from "react-redux";
import {Search} from "./search";
import {formFieldEnteredCommon} from "../action-common";
import {SEARCH_FIELD_ENTERED} from "./actions";
import {google, gagarin} from "../../protos";
import {keccak256} from "js-sha3";
import { push } from 'connected-react-router/immutable'

function mapStateToProps(state) {

}

function createAccountRequest(address, id) {
    let req = gagarin.network.event.AccountRequestPayload.create({
        address: Buffer.from(address.substring(2), 'hex'),
        block: null
    });

    let any = google.protobuf.Any.create(
        {
            type_url: "type.googleapis.com/gagarin.network.event.AccountRequestPayload",
            value: gagarin.network.event.AccountRequestPayload.encode(req).finish()
        }
    );

    let m = gagarin.network.event.Request.create(
        {
            type: null,
            id: id,
            payload: any
        }
    );

    let buf = gagarin.network.event.Request.encodeDelimited(m).finish();
    console.log("sending: ", buf);
    return buf;
}

function createBlockRequest(hash, id) {
    let req = gagarin.network.core.BlockRequestPayload.create({
        hash: Buffer.from(hash, 'hex'),
    });

    let any = google.protobuf.Any.create(
        {
            type_url: "type.googleapis.com/gagarin.network.core.BlockRequestPayload",
            value: gagarin.network.core.BlockRequestPayload.encode(req).finish()
        }
    );

    let m = gagarin.network.event.Request.create(
        {
            type: gagarin.network.event.Request.RequestType.BLOCK,
            id: id,
            payload: any
        }
    );

    let buf = gagarin.network.event.Request.encodeDelimited(m).finish();
    console.log("sending: ", buf);
    return buf;
}

function mapDispatchToProps(dispatch, ownProps) {
    let node = ownProps.node;

    return {
        handleChange: (event) => {
            let value = event.target.value !== "" ? event.target.value : null;
            dispatch(formFieldEnteredCommon(SEARCH_FIELD_ENTERED)(event.target.name, value));
        },

        handleSubmit: () => {
            dispatch((dispatch, getState) => {
                let address = getState().getIn(["form", "search", "request"]);
                if (!address) {
                    return
                }

                let id = Buffer.from(keccak256.arrayBuffer(Date.now().toString() + address));
                dispatch(push('/search/'+ id.toString('hex')));
                let buf;
                if (address.substring(0, 2) === "0x") {
                    buf = createAccountRequest(address, id);
                } else {
                    buf = createBlockRequest(address, id);
                }

                node.send(buf)
            });
        }
    }
}


export const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
