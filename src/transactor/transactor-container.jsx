import {google, gagarin} from "../../protos";
import React from "react";
import {connect} from "react-redux";
import {Transactor} from "./transactor";
import * as bls from "noble-bls12-381";
import hash from "./hasher";

import {TX_FIELD_ENTERED} from "./actions";
import {formFieldEnteredCommon} from "../action-common";

const Web3 = require("web3");
const ethEnabled = () => {
    if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        return true;
    }
    return false;
};

const SettlementAddress = "0x9cf72c59bb3624b7d2a9d82059b2f3832fd9973d";

function mapStateToProps(state) {
    return {
        type: state.getIn(["form", "tx", "type"]),
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

        initType: () => {
            dispatch(formFieldEnteredCommon(TX_FIELD_ENTERED)("type", "PAYMENT"));
        },
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
        let type = getState().getIn(["form", "tx", "type"]);
        let to = getState().getIn(["form", "tx", "to"]);
        let contract = getState().getIn(["form", "tx", "contract"]);
        let token = getState().getIn(["form", "tx", "token"]);
        let priv = getState().getIn(["form", "tx", "priv"]);
        let nonce = getState().getIn(["form", "tx", "nonce"]);
        let value = getState().getIn(["form", "tx", "value"]);
        let fee = getState().getIn(["form", "tx", "fee"]);
        let data = getState().getIn(["form", "tx", "data"]);

        const key = Buffer.from(priv, 'hex');

        let nonceInt = parseInt(nonce, 10);
        let nonceNulled = (nonceInt == 0) ? null: nonceInt;
        let from = Buffer.from(bls.getPublicKey(key)).slice(28);
        let txType = gagarin.network.core.Transaction.Type[type];
        let g_to = Buffer.from("");
        if (txType === 0) {
            console.log(to.substring(2));
            g_to = Buffer.from(to.substring(2), 'hex');
        }

        //may be hide it into hash()
        if (txType === 2) {
            g_to = Buffer.from(SettlementAddress.substring(2), 'hex');
        }

        let tx = gagarin.network.core.Transaction.create(
            {
                type: txType,
                to: g_to,
                from: from,
                nonce: nonceNulled,
                value: parseInt(value, 10),
                fee: parseInt(fee, 10),
                signature: null,
                data: Buffer.from(data, 'utf-8')
            });
        let h = hash(tx);
        //set real to address
        if (txType === 2) {
            tx.to = h.subarray(12)
        }

        (async () => {
            if (txType === 2) {
                (async (cAddr, tAddr) => {
                    if (!ethEnabled()) {
                        alert("Enable eth client")
                    }
                    // Get the contract instance using your contract's abi and address:
                    const token = new web3.eth.Contract(JSON.parse(TokenAbi), tAddr);
                    const gateway = new web3.eth.Contract(JSON.parse(GatewayAbi), cAddr);
                    //let amount = web3.utils.toWei(value.toString(), 'ether');
                    // Call a function of the contract:
                    let resAllowance = await token.methods.increaseAllowance(cAddr, value)  //function in contract
                        .send({
                            from: window.web3.currentProvider.selectedAddress,
                            to: tAddr,
                            value: 0,
                            gas: '1000000'
                        });
                    console.log(resAllowance);
                    let res = await gateway.methods.lockTokens(value)  //function in contract
                        .send({
                            from: window.web3.currentProvider.selectedAddress,
                            to: cAddr,
                            value: 0,
                            gas: '1000000'
                        });
                    console.log(res)
                })(contract, token);
            }

            let sign = await bls.sign(h, key, 0)

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

            n.sendTx(new Buffer(buf))
        })();
    }
}


export const TransactorContainer = connect(mapStateToProps, mapDispatchToProps)(Transactor);

const GatewayAbi = "[\n" +
    "    {\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"_token\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"constructor\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"anonymous\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"sender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"delta\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"DepositCancelled\",\n" +
    "      \"type\": \"event\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"anonymous\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"sender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"amount\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"DepositConfirmed\",\n" +
    "      \"type\": \"event\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"anonymous\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"sender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"amount\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"DepositReturned\",\n" +
    "      \"type\": \"event\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"anonymous\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"eth\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"gagarin\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"Registered\",\n" +
    "      \"type\": \"event\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"anonymous\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"eth\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"Unregistered\",\n" +
    "      \"type\": \"event\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [],\n" +
    "      \"name\": \"governance\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [],\n" +
    "      \"name\": \"pendingTTL\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"uint32\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"uint32\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [],\n" +
    "      \"name\": \"rollupsManager\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [],\n" +
    "      \"name\": \"token\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"contract IERC20\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"_governance\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"setGovernance\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"_manager\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"setRollupManager\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"_amount\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"lockTokens\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"uint32\",\n" +
    "          \"name\": \"newTTL\",\n" +
    "          \"type\": \"uint32\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"changePendingTTL\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"gagarinOwner\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"confirmDeposit\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"gagarinOwner\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"_amount\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"returnDeposit\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [],\n" +
    "      \"name\": \"cancelDeposit\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"gAddress\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"getPending\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"components\": [\n" +
    "            {\n" +
    "              \"internalType\": \"uint256\",\n" +
    "              \"name\": \"amount\",\n" +
    "              \"type\": \"uint256\"\n" +
    "            },\n" +
    "            {\n" +
    "              \"internalType\": \"uint256\",\n" +
    "              \"name\": \"blockNumber\",\n" +
    "              \"type\": \"uint256\"\n" +
    "            }\n" +
    "          ],\n" +
    "          \"internalType\": \"struct Gateway.Pending\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"tuple\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"gAddress\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"register\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [],\n" +
    "      \"name\": \"unregister\",\n" +
    "      \"outputs\": [],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    }\n" +
    "  ]";

const TokenAbi = "[\n" +
    "    {\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address[]\",\n" +
    "          \"name\": \"c\",\n" +
    "          \"type\": \"address[]\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"constructor\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"anonymous\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"indexed\": true,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"owner\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": true,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"spender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"value\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"Approval\",\n" +
    "      \"type\": \"event\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"anonymous\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"indexed\": true,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"from\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": true,\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"to\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"indexed\": false,\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"value\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"Transfer\",\n" +
    "      \"type\": \"event\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"owner\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"spender\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"allowance\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"spender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"amount\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"approve\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"bool\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"bool\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"account\",\n" +
    "          \"type\": \"address\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"balanceOf\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"spender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"subtractedValue\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"decreaseAllowance\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"bool\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"bool\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"spender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"addedValue\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"increaseAllowance\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"bool\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"bool\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": true,\n" +
    "      \"inputs\": [],\n" +
    "      \"name\": \"totalSupply\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"view\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"recipient\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"amount\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"transfer\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"bool\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"bool\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    },\n" +
    "    {\n" +
    "      \"constant\": false,\n" +
    "      \"inputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"sender\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"address\",\n" +
    "          \"name\": \"recipient\",\n" +
    "          \"type\": \"address\"\n" +
    "        },\n" +
    "        {\n" +
    "          \"internalType\": \"uint256\",\n" +
    "          \"name\": \"amount\",\n" +
    "          \"type\": \"uint256\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"name\": \"transferFrom\",\n" +
    "      \"outputs\": [\n" +
    "        {\n" +
    "          \"internalType\": \"bool\",\n" +
    "          \"name\": \"\",\n" +
    "          \"type\": \"bool\"\n" +
    "        }\n" +
    "      ],\n" +
    "      \"payable\": false,\n" +
    "      \"stateMutability\": \"nonpayable\",\n" +
    "      \"type\": \"function\"\n" +
    "    }\n" +
    "  ]"