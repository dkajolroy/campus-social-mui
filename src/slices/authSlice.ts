import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  user: User | null;
  token: string | null;
}
const initialState: InitialState = {
  user: null,
  token: null,
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
