import { combineSlices } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import forgetSlice from "../slices/forgetSlice";
import toggleSlice from "../slices/toggleSlice";

const reducer = combineSlices({
  authState: authSlice,
  toggleState: toggleSlice,
  forgetState: forgetSlice,
});

export default reducer;
