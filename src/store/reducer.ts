import { combineSlices } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import toggleSlice from "../slices/toggleSlice";

const reducer = combineSlices({
  authState: authSlice,
  toggleState: toggleSlice,
});

export default reducer;
