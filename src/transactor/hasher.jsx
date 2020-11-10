import {gagarin} from "../../protos";
import {keccak256} from "js-sha3";

/**
 * Verifies a Transaction message.
 * @function hash
 * @memberof gagarin.network.core.Transaction
 * @static
 * @param {gagarin.network.core.Transaction} tx proto transaction
 * @returns Buffer
 */
function hash(tx) {
    let length = 4 + 20 + 20 + 8 + 8 + 8 + 4 + tx.data.length;
    let buf = new Uint8Array(length);
    let view = new DataView(buf.buffer);
    let offset = 0;


    view.setInt32(0, tx.type, true /* BigEndian */);
    offset += 4;

    buf.set(tx.to, offset);
    offset += 20;

    buf.set(tx.from, offset);
    offset += 20;

    view.setBigUint64(offset, BigInt(tx.nonce),true);
    offset += 8;
    view.setBigUint64(offset, BigInt(tx.value),true);
    offset += 8;
    view.setBigUint64(offset, BigInt(tx.fee),true);
    offset += 8;

    view.setUint32(offset, offset + 4, true);
    offset += 4;

    buf.set(tx.data, offset);
    offset += tx.data.length;

    console.log( "serialized for hashing: " + Buffer.from(buf).toString('hex'));
    return Buffer.from(keccak256.arrayBuffer(buf))
}

export default hash
