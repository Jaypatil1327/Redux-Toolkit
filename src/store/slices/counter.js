import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    IncrementState: function (state) {
      state.count += 1;
    },
    DecrementState: function (state) {
      state.count -= 1;
    },
    ResetState: function (state) {
      state.count = 0;
    },
  },
});

export const { IncrementState, DecrementState, ResetState } =
  counterSlice.actions;
export default counterSlice.reducer;
