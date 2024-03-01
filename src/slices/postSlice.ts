import { app } from "@/constants/config";
import { getCatchError } from "@/utils/service";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { openSnackbar } from "./toggleSlice";

interface InitialState {
  isAddLoading: boolean;
  isEditLoading: boolean;
  isRemoveLoading: boolean;
  addPercent: number;
  editPercent: number;
}
const initialState: InitialState = {
  isAddLoading: false,
  isEditLoading: false,
  isRemoveLoading: false,
  addPercent: 0,
  editPercent: 0,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPercent(
      state,
      action: PayloadAction<{ value: number; type: "ADD" | "EDIT" }>
    ) {
      if (action.payload.type == "ADD") {
        state.addPercent = state.addPercent = action.payload.value;
      } else {
        state.editPercent = action.payload.value;
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(addPost.pending, (state, payload) => {
      console.log(payload);
      state.isAddLoading = true;
    }),
      builder.addCase(addPost.fulfilled, (state, _) => {
        state.isAddLoading = false;
      }),
      builder.addCase(addPost.rejected, (state) => {
        state.isAddLoading = false;
      });
  },
});

export const { setPercent } = postSlice.actions;
export default postSlice.reducer;

// Add post
export const addPost = createAsyncThunk(
  "/add-post",
  async (formData: FormData, { rejectWithValue, dispatch }) => {
    try {
      const res = await axios.post(app.baseApiUrl + "/api/post/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
        onUploadProgress({ loaded, total }) {
          if (total) {
            const percent = Math.floor((loaded * 100) / total);
            dispatch(setPercent({ type: "ADD", value: percent }));
          }
        },
      });
      dispatch(openSnackbar({ message: res.data?.message, mode: "success" }));
      return res.data?.post as IPost;
    } catch (error) {
      dispatch(
        openSnackbar({
          message: getCatchError(error as AxiosError).message,
          mode: "error",
        })
      );
      rejectWithValue(getCatchError(error as AxiosError).message);
    }
  }
);
