import {blockReceived, epochStarted, viewChanged} from "./actions";
import {connect} from "react-redux";
import {toJS} from "../ImmutableTransformerHOC";
import {Explorer} from "../explorer/explorer";
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
    };
}

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(toJS(Main));