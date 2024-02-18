import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosInstance, getCatchError } from "../utils/service";
import { openSnackbar } from "./toggleSlice";

interface InitialState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
}
const initialState: InitialState = {
  user: null, // dev mode for login
  token: null, // dev mode for login
  isLoading: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      // dummy client side only
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // for sign in
    builder.addCase(signIn.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(
        signIn.fulfilled,
        (state, { payload }: PayloadAction<LogRes | null>) => {
          state.isLoading = false;
          if (payload) {
            state.user = payload.user;
            state.token = payload.token;
          }
        }
      ),
      builder.addCase(signIn.rejected, (state) => {
        // const { message } = action.payload as { message: string };
        state.isLoading = false;
      });
    // For sign up
    builder.addCase(signUp.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(
        signUp.fulfilled,
        (state, { payload }: PayloadAction<LogRes | null>) => {
          state.isLoading = false;
          if (payload) {
            state.user = payload.user;
            state.token = payload.token;
          }
        }
      ),
      builder.addCase(signUp.rejected, (state) => {
        // const { message } = action.payload as { message: string };
        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;

// login api
interface LogRes {
  user: User;
  message: string;
  token: string;
}
// Sign in
export const signIn = createAsyncThunk(
  "/sign-in",
  async (formData: SignInput, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.post("/api/auth/sign-in", formData);
      dispatch(openSnackbar({ message: res.data.message, mode: "success" }));
      return res.data as LogRes; // 200++ to fulfilled
    } catch (error) {
      dispatch(
        openSnackbar({
          message: getCatchError(error as AxiosError).message,
          mode: "error",
        })
      );
      // 400-500 rejected
      return rejectWithValue(getCatchError(error as AxiosError));
    }
  }
);
// Sign up
export const signUp = createAsyncThunk(
  "/sign-up",
  async (formData: SignUpInput, { rejectWithValue, dispatch }) => {
    try {
      const res = await axiosInstance.post("/api/auth/sign-up", formData);

      dispatch(openSnackbar({ message: res.data.message, mode: "success" }));
      return res.data as LogRes; // 200++ to fulfilled
    } catch (error) {
      dispatch(
        openSnackbar({
          message: getCatchError(error as AxiosError).message,
          mode: "error",
        })
      );
      // 400-500 rejected
      return rejectWithValue(getCatchError(error as AxiosError));
    }
  }
);
