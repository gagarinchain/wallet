import React from 'react';
import { connect } from 'react-redux';
import {Explorer} from './explorer';
import {toJS} from "../ImmutableTransformerHOC";
import {createSelector} from "reselect"

function mapStateToProps(state) {
    return {
        last20: modifiedLast20Selector(state),
    };
}

function mapDispatchToProps(dispatch) {
}

function last20Selector(state) {
    return state.getIn(["blocks", "last20"]);
}

function isCommittedSelector(state) {
    return state.getIn(["blocks", "committed"]);
}

const modifiedLast20Selector = createSelector(
    [last20Selector, isCommittedSelector],
    (last20, committed) => {
        return last20.map((item) => {
            if (item) {
                let isCommitted = committed.getIn([item.hash]);
                item.isCommitted = !!isCommitted;
            }
            return item
        })
    }
);

export const ExplorerContainer = connect(mapStateToProps, mapDispatchToProps)(toJS(Explorer));