import { combineReducers } from "@reduxjs/toolkit";
import modalReducer from "../components/modal/modalSlice";

export const rootReducer = combineReducers({
  modal: modalReducer,
});
