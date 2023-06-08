import { useReducer } from 'react';

const defaultInputState = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_VALUE':
            return {value: action.val, isTouched: state.isTouched};
        case 'INPUT_BLUR':
            return {value: state.value, isTouched: true};
        case 'INPUT_RESET':
            return {...defaultInputState};
        default:
            return defaultInputState;
    }
}

const useInput = (validateValue) => {
    const [inputState, dispatchInput] = useReducer(inputReducer, defaultInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = inputState.isTouched && !valueIsValid;

    const valueChangeHandler = (event) => {
        dispatchInput({type: 'INPUT_VALUE', val: event.target.value});
    };

    const valueBlurHandler = (event) => {
        dispatchInput({type: 'INPUT_BLUR'});
    };

    const reset = () => {
        dispatchInput({type: 'INPUT_RESET'});
    }

    return {
        enteredValue: inputState.value,
        valueIsValid,
        hasError,
        valueChangeHandler,
        valueBlurHandler,
        reset
    }
}

export default useInput;