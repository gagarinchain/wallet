import {List, Map, fromJS} from "immutable";

export const WS_CONNECTED = "WS_CONNECTED";
export const BLOCK_RECEIVED = "BLOCK_RECEIVED";
export const VIEW_CHANGED = "VIEW_CHANGED";
export const EPOCH_STARTED = "EPOCH_STARTED";
export const COMMITTED = "COMMITTED";

export const INITIAL_STATE = new Map({
    view: 0,
    epoch: 0,
    committed: new Map(),
    blocks: new Map(),
    last20: new List(),
});

export function connected(value) {
    return {
        type: WS_CONNECTED,
        value: value
    }
}
export function blockReceived(block) {
    return {
        type: BLOCK_RECEIVED,
        value: block
    }
}
export function viewChanged(view) {
    return {
        type: VIEW_CHANGED,
        value: view
    }
}
export function epochStarted(epoch) {
    return {
        type: EPOCH_STARTED,
        value: epoch
    }
}
export function committed(hash) {
    return {
        type: COMMITTED,
        value: hash
    }
}