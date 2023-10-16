import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedVideo: undefined,
};

export const courseSlice = createSlice({
	name: "course",
	initialState,
	reducers: {
		selectVideo: (state, action) => {
			state.selectedVideo = action.payload;
			localStorage.setItem("selectedVideoID", action.payload.id);
		},
	},
});

export default courseSlice.reducer;
export const { selectVideo } = courseSlice.actions;
