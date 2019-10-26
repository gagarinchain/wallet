import React from "react";
import {connect} from "react-redux";
import {Results} from "./results";

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;

    let res = resultSelector(state, id.toLowerCase());
    return {
        res: res
    }
};

const mapDispatchToProps = (dispatch) => {
};

const resultSelector = (state, id) => {return state.getIn(["blocks", "responses", id])};


export const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results);



