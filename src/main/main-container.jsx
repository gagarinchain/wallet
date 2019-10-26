import {
    blockReceived,
    epochStarted,
    viewChanged,
    committed,
    blockResponseReceived,
    accountResponseReceived
} from "./actions";
import {connect} from "react-redux";
import {toJS} from "../ImmutableTransformerHOC";
import {Main} from "./main";

function mapStateToProps(state) {
    return {
        view: state.getIn(["blocks", "view"]),
        epoch: state.getIn(["blocks", "epoch"]),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        blockReceived : (block) => {
            dispatch(blockReceived(block));
        },
        epochStarted : (epoch) => {
            dispatch(epochStarted(epoch));
        },
        viewChanged : (view) => {
            dispatch(viewChanged(view));
        },
        committed : (hash) => {
            dispatch(committed(hash));
        },
        blockResponseReceived : (block) => {
            dispatch(blockResponseReceived(block));
        },
        accountResponseReceived : (account) => {
            dispatch(accountResponseReceived(account));
        },
    };
}

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(toJS(Main));