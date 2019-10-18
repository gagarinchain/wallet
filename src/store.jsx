import { connectRouter, routerMiddleware } from 'connected-react-router/immutable'

import { createHashHistory } from 'history'

import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux-immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {txReducer} from "./transactor/reducer";
import {mainReducer} from "./main/reducer";
import {searchReducer} from "./search/reducer";
import {Map, fromJS} from "immutable"

export const history = createHashHistory();

export function makeStore() {
    return createStore(
        createRootReducer(history),
        fromJS({
            router: {
                location: {
                    pathname: '/',
                    search: '',
                    hash: ''
                },
                action: 'POP'
            }
        }),
        composeWithDevTools(
            applyMiddleware(routerMiddleware(history), thunk)
        ));
}

const createRootReducer = (history) => combineReducers({
        router: connectRouter(history),
        form: combineReducers({
            tx:             txReducer,
            search:             searchReducer,
        }),
        blocks: mainReducer
    });