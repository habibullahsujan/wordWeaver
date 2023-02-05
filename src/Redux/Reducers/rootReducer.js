import { combineReducers } from "@reduxjs/toolkit";
import { blogReducers } from "./blogReducers";
import { sortingReducers } from "./sortingReducers";

export const rootReducer=combineReducers({
    blogs:blogReducers,
    sort:sortingReducers,
})