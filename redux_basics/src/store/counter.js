import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true
};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state, action) {
            state.counter += action.payload;
        },
        decrement(state, action) {
            state.counter -= action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter
        }
    }
});

const counterStore = counterSlice.reducer;

export const counterActions = counterSlice.actions;

export default counterStore;