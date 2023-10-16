import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
	total: number;
}

const initialState: CounterState = {
	total: 0,
};

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.total += 1;
		},
		decrement: (state) => {
			state.total -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.total += action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;

