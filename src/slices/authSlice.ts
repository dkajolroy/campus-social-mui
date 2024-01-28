import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user: User | null;
  token: string | null;
}
const initialState: InitialState = {
  user: { _id: "10" }, // dev mode for login
  token: "null", // dev mode for login
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (
      state,
      { payload }: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = payload.user;
      state.token = payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { addUser, logout } = authSlice.actions;
export default authSlice.reducer;
