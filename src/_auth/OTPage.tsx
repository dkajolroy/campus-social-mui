import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Chip, Divider, useTheme } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Countdown from "react-countdown";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OAuthProviders from "../components/global/OAuthProviders";
import { app } from "../constants/config";
import { resetForget } from "../slices/forgetSlice";
import { openSnackbar } from "../slices/toggleSlice";
import { RootStore } from "../store/store";

export default function OTPage() {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const forgetState = useSelector((xx: RootStore) => xx.forgetState);
  const [otp, setOtp] = React.useState("");

  // Handle form submit
  const handleSubmit = async () => {
    if (otp.trim().length < 4)
      return dispatch(
        openSnackbar({
          message: "Check email to enter OPT !",
          mode: "error",
        })
      );
    if (String(forgetState?.otp) !== otp) {
      return dispatch(
        openSnackbar({
          message: "Invalid OTP ! Enter correct OTP !",
          mode: "error",
        })
      );
    }
    navigate("/auth/forget/password");
  };

  // for timeout otp
  function timeout() {
    dispatch(resetForget());
    navigate("/auth/forget");
  }

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
        <Box sx={{ mt: 1 }}>
          <Typography fontSize={16} textAlign="center">
            {`Please enter OTP : `}
            <Countdown
              onComplete={timeout}
              renderer={({ minutes, seconds }) => {
                return (
                  <span>
                    {minutes}:{seconds}
                  </span>
                );
              }}
              date={Number(forgetState?.duration) || Date.now()}
            />
          </Typography>

          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => (
              <input
                onKeyUp={({ key }) => key === "Enter" && handleSubmit()}
                {...props}
              />
            )}
            inputStyle={{
              border: "1px solid #673ab7",
              borderRadius: 5,
              width: 40,
              height: 40,
            }}
            containerStyle={{
              justifyContent: "center",
              gap: 5,
              margin: "10px 0",
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
            onClick={handleSubmit}
          >
            Next
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
