import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {txReducer} from "./transactor/reducer";
import {mainReducer} from "./main/reducer";

export function makeStore() {
    return createStore(
        combineReducers({
            form: combineReducers({
                tx:             txReducer,
            }),
            blocks: mainReducer
        }),
        composeWithDevTools(
            applyMiddleware(thunk)
        ));
}