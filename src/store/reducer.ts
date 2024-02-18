import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import toggleSlice from "../slices/toggleSlice";

const reducer = combineReducers({
  authState: authSlice,
  toggleState: toggleSlice,
});

export default reducer;
