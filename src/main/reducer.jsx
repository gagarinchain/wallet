import {BLOCK_RECEIVED, EPOCH_STARTED, INITIAL_STATE, VIEW_CHANGED, WS_CONNECTED} from "./actions";
import React from "react";
import {Map} from "immutable";

export function mainReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case BLOCK_RECEIVED:
            return blockReceived(state, action);
        case VIEW_CHANGED:
            return viewChanged(state, action);
        case EPOCH_STARTED:
            return epochStarted(state, action);
        default:return state
    }
}

function viewChanged(state, action) {
    return state.setIn(["view"], action.value.view);
}
function epochStarted(state, action) {
    return state.setIn(["epoch"], action.value.epoch);
}

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
function blockReceived(state, action) {
    let hash = Buffer.from(action.value.header.hash).toString('hex');
    let height = action.value.header.height;
    let parent = Buffer.from(action.value.header.parentHash).toString('hex');
    let qcblock = Buffer.from(action.value.cert.header.hash).toString('hex');
    let qcheight = action.value.cert.header.height;
    let txcount = action.value.txs.length;
    let timestamp = convert(action.value.header.timestamp);

    // let data = Map(["hash", hash], ["height", height], ["parent", parent], ["qcblock", qcblock],
    //     ["qcheight", qcheight], ["txcount", txcount], ["timestamp", timestamp]);
    let data = {
        "hash": hash,
        "height": height,
        "parent": parent,
        "qcblock": qcblock,
        "qcheight": qcheight,
        "txcount": txcount,
        "timestamp": timestamp
    };

    let last21 = state.getIn(["last20"]).unshift(data);
    let last = last21.last(); // can use this item to clean block storage
    let last20 = last21.setSize(20);
    state = state.setIn(["last20"], last20);
    return state.setIn(["blocks", hash], action.value);
}

function convert(unixtimestamp) {
    // Months array
    var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    // Convert timestamp to milliseconds
    var date = new Date(unixtimestamp/1000000);

    // Year
    var year = date.getFullYear();

    // Month
    var month = months_arr[date.getMonth()];

    // Day
    var day = date.getDate();

    // Hours
    var hours = date.getHours();

    // Minutes
    var minutes = "0" + date.getMinutes();

    // Seconds
    var seconds = "0" + date.getSeconds();

    // Display date time in MM-dd-yyyy h:m:s format
    var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


    return convdataTime;
}