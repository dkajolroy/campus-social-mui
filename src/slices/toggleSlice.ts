import { AlertColor } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  snackbar: {
    open: boolean;
    mode: AlertColor;
    message: string;
  };
}

const initialState: InitialState = {
  snackbar: {
    open: false,
    mode: "success",
    message: "",
  },
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    openSnackbar(
      state,
      { payload }: PayloadAction<{ mode: AlertColor; message: string }>
    ) {
      state.snackbar.open = true;
      state.snackbar.mode = payload.mode;
      state.snackbar.message = payload.message;
    },
    closeSnackbar(state) {
      state.snackbar.open = false;
      state.snackbar.message = "";
    },
  },
});

export const { closeSnackbar, openSnackbar } = toggleSlice.actions;
export default toggleSlice.reducer;
