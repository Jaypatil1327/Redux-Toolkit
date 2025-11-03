# 📦 Redux Setup Guide

This guide outlines the steps to set up Redux in your React application using `@reduxjs/toolkit`.

---

## 🧩 Step 1: Create a Slice

### 1.1 Define the Slice

Each slice should include:

- `name`: Unique identifier for the slice.
- `initialState`: The default state.
- `reducers`: Functions to update the state.

Example:

```js
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
```

## 🏗️ Step 2: Configure the Store

### 2.1 Combine Reducers

Create a central store and include all slice reducers.

```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter";

export const store = configureStore({
  reducer: counterReducer,
});

export default store;
```

---

## 🧼 Step 3: Wrap App with `<Provider>`

In your root component (usually `index.js` or `App.js`):

```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

## 🚀 Using Redux in Components

### Dispatching Actions

Use `useDispatch` to trigger actions:

```js
import { useDispatch } from "react-redux";
import {
  IncrementState,
  DecrementState,
  ResetState,
} from "../store/slices/counter";

function Button({ type }) {
  const dispatch = useDispatch();

  function handleClick() {
    if (type === "Increment") {
      dispatch(IncrementState());
    } else if (type === "Decrement") {
      dispatch(DecrementState());
    } else {
      dispatch(ResetState());
    }
  }
  return <button onClick={handleClick}>{type}</button>;
}

export default Button;
```

### Selecting State

Use `useSelector` to access state:

```js
import { useSelector } from "react-redux";
function Heading() {
  const count = useSelector((state) => state.count);
  return <h1>Count is {count}</h1>;
}

export default Heading;
```
