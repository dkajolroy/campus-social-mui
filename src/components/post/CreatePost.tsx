import { addPost } from "@/slices/postSlice";
import { openSnackbar } from "@/slices/toggleSlice";
import { RootStore, store } from "@/store/store";
import { ImageOutlined, VideocamOutlined } from "@mui/icons-material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Box,
  Button,
  ImageList,
  ImageListItem,
  LinearProgress,
  LinearProgressProps,
  Stack,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CreatePost() {
  // open loading backdrop
  const [blob, setBlob] = useState({
    text: "",
    images: [] as string[],
    videos: [] as string[],
  });
  const [data, setData] = useState({
    text: "",
    images: [] as File[],
    videos: [] as File[],
  });
  // onchange text
  function onChangeText(text: string) {
    setBlob((s) => ({ ...s, text }));
    setData((s) => ({ ...s, text }));
  }
  // onchange image
  function onChangeImages(files: FileList | null) {
    setBlob((s) => ({ ...s, images: [] }));
    if (files?.length) {
      for (var i = 0; i < files.length; i++) {
        const file = files[i];
        const img = URL.createObjectURL(file);
        setBlob((s) => ({ ...s, images: [...s.images, img] }));
        setData((s) => ({ ...s, images: [...s.images, file] }));
      }
    }
  }
  // onchange video
  function onChangeVideos(files: FileList | null) {
    setBlob((s) => ({ ...s, videos: [] }));
    if (files?.length) {
      for (var i = 0; i < files.length; i++) {
        const file = files[i];
        const video = URL.createObjectURL(file);
        setBlob((s) => ({ ...s, videos: [...s.videos, video] }));
        setData((s) => ({ ...s, videos: [...s.videos, file] }));
      }
    }
  }
  // submit post
  const formData = new FormData();
  const postRes = useSelector((ss: RootStore) => ss.postState);
  const dispatch = useDispatch();
  async function submitPost() {
    // data validation
    if (!blob.text.trim() && !blob.images.length && !blob.videos.length) {
      return dispatch(
        openSnackbar({
          message: "Enter post content please !",
          mode: "error",
        })
      );
    }

    formData.append(`text`, data.text);
    data.images.forEach((images, _) => {
      formData.append(`images`, images);
    });
    data.videos.forEach((video, _) => {
      formData.append(`videos`, video);
    });
    store.dispatch(addPost(formData));
    setBlob({ images: [], videos: [], text: "" });
  }

  return (
    <Box p={2}>
      <Stack
        flexDirection={{ sm: "row", xs: "column" }}
        // alignItems={{ xs: "center", sm: "start" }}
        gap={1}
      >
        <Avatar
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{
            bgcolor: red[500],
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          aria-label="recipe"
        >
          R
        </Avatar>

        <Stack flex={1} width="100%" gap={1}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={2}
            value={blob.text}
            onChange={({ target }) => onChangeText(target.value)}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              borderColor: "lightgray",
            }}
            placeholder="What's on your mind ?"
          />
          <Stack sx={{ maxHeight: 200 }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {blob.images.map((item, i) => (
                <ImageListItem sx={{ position: "relative" }} key={i}>
                  <Box position="absolute" top={0} left={0}>
                    <ImageOutlined sx={{ color: "white" }} />
                  </Box>
                  <img src={`${item}`} alt="image" loading="lazy" />
                </ImageListItem>
              ))}
              {blob.videos.map((item, i) => (
                <ImageListItem sx={{ position: "relative" }} key={i}>
                  <Box position="absolute" top={0} left={0}>
                    <VideocamOutlined sx={{ color: "white" }} />
                  </Box>
                  <video src={`${item}`} autoPlay muted />
                </ImageListItem>
              ))}
            </ImageList>
          </Stack>
          {/* Form Action */}
          <Stack
            spacing={1}
            direction={{ lg: "row", sm: "column" }}
            justifyContent="space-between"
          >
            <Stack
              spacing={1}
              direction={{ md: "row", sm: "column" }}
              justifyContent="space-between"
              gap={{ sm: 0, xs: 1 }}
            >
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Upload Image
                <VisuallyHiddenInput
                  onChange={({ target }) => {
                    onChangeImages(target.files);
                    target.value = "";
                  }}
                  accept="image/*"
                  multiple
                  type="file"
                />
              </Button>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Upload Video
                <VisuallyHiddenInput
                  onChange={({ target }) => {
                    onChangeVideos(target.files);
                    target.value = "";
                  }}
                  multiple
                  accept="video/*"
                  type="file"
                />
              </Button>
            </Stack>
            <Stack spacing={1} mt={{ sm: 0, xs: 1 }}>
              <Button
                onClick={() => {
                  submitPost();
                }}
                variant="contained"
              >
                Create Post
              </Button>
            </Stack>
          </Stack>
          {postRes?.isAddLoading && (
            <LinearProgressWithLabel value={postRes.addPercent} />
          )}
        </Stack>
      </Stack>
    </Box>
  );
}

// Hidden  input
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
