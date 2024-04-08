import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CounterState {
    count: number;
    isReady: boolean;

}

const initialState: CounterState = {
    count: 5,
    isReady: false,
}

export const counterSlice = createSlice({
    name: 'name',
    initialState: initialState,
    reducers: {
        addOne(state) {
            state.count++;
        },
        subtractOne(state) {
            if (!state.count) return;
            state.count--;
        },
        resetCount(state,action: PayloadAction<number>) {
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
        },
        initCounterState( state, action: PayloadAction<number>){
            if(state.isReady) return;
            state.count = action.payload;
            state.isReady = true;
        }
    }
});


export const { initCounterState,addOne, subtractOne, resetCount } = counterSlice.actions;
export default counterSlice.reducer;

