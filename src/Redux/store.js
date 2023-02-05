import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {rootReducer} from './Reducers/rootReducer';

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))