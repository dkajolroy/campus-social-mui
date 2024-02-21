import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Chip,
  CircularProgress,
  Divider,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import OAuthProviders from "../components/global/OAuthProviders";
import { app } from "../constants/config";
import { forgetSuccessApi, resetForget } from "../slices/forgetSlice";
import { openSnackbar } from "../slices/toggleSlice";
import { RootStore, store } from "../store/store";

export default function ForgetPassPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const key = search.get("key"); // for email link
  const forgetState = useSelector((xx: RootStore) => xx.forgetState);

  // Handle form submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const inputData = {
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };
    if (!inputData.password?.toString().trim().length)
      return dispatch(
        openSnackbar({
          message: "Enter your email !",
          mode: "error",
        })
      );
    store.dispatch(
      forgetSuccessApi({
        inputData: {
          password: String(inputData.password),
          key, // for verification link
          email: forgetState?.email, // for find user
          otp: String(forgetState?.otp), // for otp
        },
        callback() {
          dispatch(resetForget());
          navigate("/auth/sign-in");
        },
      })
    );
  };
  return (
    <Box flex={1} maxWidth={444} mx="auto">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: palette.primary.main }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome to {app.appName}
        </Typography>
        <Typography fontSize={14} color="GrayText">
          Please forget to your account and start the adventure
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="password"
            label="New Password"
            name="password"
            autoFocus
            type={showPassword ? "text" : "password"}
            InputProps={{
              sx: { padding: 0 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="confirmPassword"
            label="Confirm Password "
            name="confirmPassword"
            autoComplete="Confirm Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              sx: { padding: 0 },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((s) => !s)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            disabled={forgetState?.isLoading}
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            {forgetState?.isLoading && (
              <CircularProgress sx={{ mr: 1 }} size={16} color="inherit" />
            )}
            Forget
          </Button>
          <Grid container justifyContent="center" gap={1}>
            <Typography fontSize={14}>New on our platform?</Typography>
            <Link to="/auth/sign-up">
              <Typography fontSize={14} sx={{ color: palette.primary.main }}>
                Create an account
              </Typography>
            </Link>
          </Grid>
        </Box>
      </Box>

      <Box my={2}>
        <Divider>
          <Chip label="Or" size="small" />
        </Divider>
      </Box>
      <OAuthProviders />
    </Box>
  );
}
