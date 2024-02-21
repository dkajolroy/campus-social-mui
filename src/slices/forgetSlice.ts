import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { axiosInstance, getCatchError } from "../utils/service";
import { openSnackbar } from "./toggleSlice";

interface InitialState {
  isLoading: boolean;
  otp: number | null;
  email: string;
  duration: number;
}

const initialState: InitialState = {
  isLoading: false,
  duration: 0, // for expire time
  otp: null, // for match
  email: "", // for success api find user
};
const forgetSlice = createSlice({
  name: "forget",
  initialState,
  reducers: {
    resetForget(state) {
      (state.isLoading = false), (state.duration = 0), (state.otp = null);
      state.email = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(forgetReqApi.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(
        forgetReqApi.fulfilled,
        (
          state,
          {
            payload,
          }: PayloadAction<{ message: string; otp: number; email: string }>
        ) => {
          const min10 = Date.now() + 1000 * 60 * 10;
          state.duration = min10;
          state.isLoading = false;
          state.otp = payload.otp;
          state.email = payload.email;
        }
      ),
      builder.addCase(forgetReqApi.rejected, (state) => {
        state.isLoading = false;
      });
    // Forget success
    builder.addCase(forgetSuccessApi.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(forgetSuccessApi.fulfilled, (state) => {
        state.isLoading = false;
      }),
      builder.addCase(forgetSuccessApi.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetForget } = forgetSlice.actions;
export default forgetSlice.reducer;

interface ForgetInput {
  inputData: { email: FormDataEntryValue | null };
  callback: () => void;
}

// Sign in
export const forgetReqApi = createAsyncThunk(
  "/forget-req",
  async (
    { inputData, callback }: ForgetInput,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await axiosInstance.post(
        "/api/auth/forget-req",
        inputData
      );
      dispatch(openSnackbar({ message: data?.message, mode: "success" }));
      callback();
      return { ...data, email: inputData.email } as {
        message: string;
        otp: number;
        email: string;
      };
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

interface ForgetSS {
  inputData: {
    key: string | null;
    email?: string;
    otp: string;
    password: string;
  };
  callback: () => void;
}
// Sign in
export const forgetSuccessApi = createAsyncThunk(
  "/forget-success",
  async ({ inputData, callback }: ForgetSS, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/auth/forget-success`,
        inputData
      );
      dispatch(openSnackbar({ message: data?.message, mode: "success" }));
      callback();
      return data as { message: string }; // 200++ to fulfilled
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
