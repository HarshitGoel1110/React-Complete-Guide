import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      // here we are allowed to make changes on the existing state.
      // because react-toolkit, will internally create a new object of we try to
      // change state like this, so becomes easy to do work with redux.
      console.log(action);
      state.counter += action.payload.amount || 1;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// we are passing 2 reducers inside this.
// so It will take these 2 and will merge them and make a single big reducer, 
// to process internally
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// it will contain auto generated unique identifiers for the actions, that we have defined
// in the reducer.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;