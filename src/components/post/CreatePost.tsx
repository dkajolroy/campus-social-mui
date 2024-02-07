import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Avatar,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Stack,
  TextareaAutosize,
  Typography,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { useState } from "react";

export default function CreatePost() {
  // open backdrop
  const [open, setOpen] = useState(false);
  return (
    <Box p={2}>
      <Stack
        flexDirection={{ sm: "row", xs: "column" }}
        alignItems={{ xs: "center", sm: "start" }}
        gap={1}
      >
        <Avatar
          src="https://mui.com/static/images/avatar/3.jpg"
          sx={{ bgcolor: red[500] }}
          aria-label="recipe"
        >
          R
        </Avatar>

        <Stack flex={1} width="100%" gap={1}>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={2}
            style={{
              borderWidth: 1,
              borderRadius: 5,
              padding: 5,
              borderColor: "lightgray",
            }}
            placeholder="What's on your mind ?"
          />
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
                <VisuallyHiddenInput type="file" />
              </Button>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
              >
                Upload Video
                <VisuallyHiddenInput type="file" />
              </Button>
            </Stack>
            <Stack spacing={1} mt={{ sm: 0, xs: 1 }}>
              <Button onClick={() => setOpen(true)} variant="contained">
                Create Post
              </Button>
            </Stack>
          </Stack>
        </Stack>
        {/* BackDrop From */}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={() => setOpen(false)}
        >
          <Stack direction="column" alignItems="center">
            <Typography>Only design this</Typography>
            <CircularProgress color="inherit" />
          </Stack>
        </Backdrop>
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
