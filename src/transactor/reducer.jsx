import {INITIAL_STATE, TX_FIELD_ENTERED} from "./ations";
import {fieldEntered} from "../reducers-common";

export function txReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case TX_FIELD_ENTERED:
            return fieldEntered(state, action);
        default:return state
    }
}

function wsConnect(state, action) {
    return state.setIn(["connected"], true);
}