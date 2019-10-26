import {INITIAL_STATE, SEARCH_FIELD_ENTERED} from "./actions";
import {fieldEntered} from "../reducers-common";

export function searchReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SEARCH_FIELD_ENTERED:
            return fieldEntered(state, action);
        default:return state
    }
}