import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";
import blogReducer from "./slices/Blog";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blog: blogReducer,
  },
});
