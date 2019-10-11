export function fieldEntered(state, action) {
    return state.setIn([action.field], action.value);
}

