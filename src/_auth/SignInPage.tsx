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
import Checkbox from "@mui/material/Checkbox";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OAuthProviders from "../components/global/OAuthProviders";
import { app } from "../constants/config";
import { signIn } from "../slices/authSlice";
import { openSnackbar } from "../slices/toggleSlice";
import { RootStore, store } from "../store/store";

export default function SignInPage() {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const { isLoading } = useSelector((s: RootStore) => s.authState);

  // Handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    } as SignInput; // data

    if (!data.email.trim() || !data.password.trim())
      return dispatch(
        openSnackbar({
          message: "Email & Password is empty !",
          mode: "error",
        })
      );
    // submit login
    store.dispatch(signIn(data));
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
          Please sign-in to your account and start the adventure
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />

          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
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

          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label={<Typography fontSize={14}>Remember me</Typography>}
              />
            </Grid>
            <Grid item>
              <Link to="/forget">
                <Typography fontSize={14} sx={{ color: palette.primary.main }}>
                  Forgot password?
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            {isLoading && (
              <CircularProgress sx={{ mr: 1 }} size={16} color="inherit" />
            )}
            Sign In
          </Button>
          <Grid container justifyContent="center" gap={1}>
            <Typography fontSize={14}>New on our platform?</Typography>
            <Link to="/sign-up">
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
