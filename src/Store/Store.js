import {AppReducer} from "./Reducer/AppReducer.js"
import {combineReducers, createStore} from "redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";

export const store = createStore(combineReducers({App:AppReducer}),{},applyMiddleware(logger));