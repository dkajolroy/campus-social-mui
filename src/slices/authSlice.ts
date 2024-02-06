import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseApi, handleError } from "../utils/service";

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
  extraReducers: (builder) => {
    builder.addCase(signIn.pending, (state) => {
      // Pending
      state.isLoading = true;
    }),
      builder.addCase(
        signIn.fulfilled,
        (state, { payload }: PayloadAction<{ user: User; token: string }>) => {
          // Success
          state.isLoading = false;
          state.user = payload.user;
          state.token = payload.token;
        }
      ),
      builder.addCase(signIn.rejected, (state) => {
        // Error
        state.isLoading = false;
      });
  },
});

export const { addUser, logout } = authSlice.actions;
export default authSlice.reducer;

// login api
export const signIn = createAsyncThunk(
  "/sign-in",
  async (formData: SignInput, { rejectWithValue }) => {
    try {
      const res = await baseApi.post("/auth/sign-in", formData);
      return res.data;
    } catch (error) {
      // login error snackbar
      rejectWithValue(handleError(error));
    }
  }
);
