import { createStore } from "redux";
import { reducer } from "./apiData/apiDataReducer";
const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;
