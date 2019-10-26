import React from 'react';
import { connect } from 'react-redux';
import {Explorer} from './explorer';
import {toJS} from "../ImmutableTransformerHOC";
import {BlockInfo} from "./block-info";
import {createSelector} from "reselect"

function mapStateToProps(state, ownProps) {
    let id = ownProps.id != null ? ownProps.id : ownProps.match.params.id;
    return {
        block: transformBlockSelector(state, id),
    };
}

function selectBlocks(state, id) {
    let block = state.getIn(["blocks", "blocks", id]);

    return block
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
const transformBlockSelector = createSelector(
    [selectBlocks],
    (block) => {
        return {
            "header": {
                "hash": Buffer.from(block.header.hash).toString('hex'),
                "height": block.header.height,
                "parentHash": Buffer.from(block.header.parentHash).toString('hex'),
                "qcHash": Buffer.from(block.header.qcHash).toString('hex'),
                "dataHash": Buffer.from(block.header.dataHash).toString('hex'),
                "stateHash": Buffer.from(block.header.stateHash).toString('hex'),
                "txHash": Buffer.from(block.header.txHash).toString('hex'),
                "timestamp": block.header.timestamp,
            },
            "cert": {
                "header": {
                    "hash": Buffer.from(block.cert.header.hash).toString('hex'),
                    "height": block.cert.header.height,
                    "parentHash": Buffer.from(block.cert.header.parentHash).toString('hex'),
                    "qcHash": Buffer.from(block.cert.header.qcHash).toString('hex'),
                    "dataHash": Buffer.from(block.cert.header.dataHash).toString('hex'),
                    "stateHash": Buffer.from(block.cert.header.stateHash).toString('hex'),
                    "txHash": Buffer.from(block.cert.header.txHash).toString('hex'),
                    "timestamp": block.cert.header.timestamp,
                },
                "signatureAggregate":{
                    "bitmap": block.cert.signatureAggregate.bitmap,
                    "signature": block.cert.signatureAggregate.signature
                }
            },
            "data": {
                "data": Buffer.from(block.data.data).toString()
            },
            "txs": [{

            }]
        }
    }
);


export const BlockInfoContainer = connect(mapStateToProps)(BlockInfo);