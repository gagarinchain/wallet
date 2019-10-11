export function formFieldEnteredCommon(enteredAction) {
    return (fieldName, fieldValue) => {
        return {
            type: enteredAction,
            field: fieldName,
            value: fieldValue
        };
    };
}