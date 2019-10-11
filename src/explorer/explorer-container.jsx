import React from 'react';
import { connect } from 'react-redux';
import {Explorer} from './explorer';
import {toJS} from "../ImmutableTransformerHOC";

function mapStateToProps(state) {
    return {
        last20: state.getIn(["blocks", "last20"]),
    };
}

function mapDispatchToProps(dispatch) {
}

export const ExplorerContainer = connect(mapStateToProps, mapDispatchToProps)(toJS(Explorer));