import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";

const reducer = combineReducers({
  authState: authSlice,
});

export default reducer;
