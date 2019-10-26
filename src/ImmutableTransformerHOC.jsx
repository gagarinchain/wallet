import React from "react";
import {Iterable} from "immutable";

export const toJS = (WrappedComponent) => (wrappedComponentProps) => {
    const propsJS = Object.entries(wrappedComponentProps)
        .reduce((newProps, wrappedComponentsProp) => {
            newProps[wrappedComponentsProp[0]] = 
                Iterable.isIterable(wrappedComponentsProp[1]) ? wrappedComponentsProp[1].toJS() : wrappedComponentsProp[1];
            return newProps;
        }, {});
    return <WrappedComponent {...propsJS} />;
};