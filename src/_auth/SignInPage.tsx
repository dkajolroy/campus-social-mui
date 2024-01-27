import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Chip, Divider, IconButton, InputAdornment } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import OAuthProviders from "../components/global/OAuthProviders";

export default function SignInPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <>
      <Container component="main">
        <Grid container gap={10}>
          <Box
            sx={{
              borderRadius: 5,
              display: { md: "flex", xs: "none", flexDirection: "column" },
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "purple",
            }}
            flex={{ lg: 2, md: 1 }}
          >
            <Typography sx={{ color: "white" }} fontSize={28} fontWeight="bold">
              Join Dadu-web
            </Typography>
            <Typography align="center" fontSize={14} sx={{ color: "white" }}>
              The best social media platform of <br /> Bangladesh
            </Typography>
            <Box
              sx={{ bgcolor: "white", my: 2, py: 0.5, px: 1, borderRadius: 5 }}
            >
              <OAuthProviders />
            </Box>
            <Typography sx={{ color: "white" }} fontSize={14}>
              Dadu-web Terms and condition
            </Typography>
          </Box>
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
              <Avatar sx={{ m: 1, bgcolor: "purple" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Welcome to Dadu-web
              </Typography>
              <Typography fontSize={14}>
                Please sign-in to your account and start the adventure
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
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

                <Grid
                  container
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Grid item>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label={<Typography fontSize={14}>Remember me</Typography>}
                    />
                  </Grid>
                  <Grid item>
                    <Link to="#">
                      <Typography fontSize={14} sx={{ color: "purple" }}>
                        Forgot password?
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container justifyContent="center" gap={1}>
                  <Typography fontSize={14}>New on our platform?</Typography>
                  <Link to="/sign-up">
                    <Typography fontSize={14} sx={{ color: "purple" }}>
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
        </Grid>
      </Container>
    </>
  );
}
