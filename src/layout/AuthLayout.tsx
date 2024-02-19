import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootStore } from "../store/store";

import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import OAuthProviders from "../components/global/OAuthProviders";
import { app } from "../constants/config";

export default function AuthLayout() {
  const theme = useTheme();
  const authState = useSelector((s: RootStore) => s.authState);
  if (!authState) return;
  const { user, token } = authState;

  // Authenticate middleware
  if (user && token) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="min-h-screen flex items-center">
        <Container component="main">
          <Grid container gap={10}>
            <Box
              sx={{
                borderRadius: 5,
                display: { md: "flex", xs: "none", flexDirection: "column" },
                justifyContent: "center",
                alignItems: "center",
                bgcolor: theme.palette.primary.main,
              }}
              flex={{ lg: 2, md: 1 }}
            >
              <Typography
                sx={{ color: "white" }}
                fontSize={32}
                fontWeight="bold"
              >
                Join {app.appName}
              </Typography>
              <Typography align="center" fontSize={14} sx={{ color: "white" }}>
                The best social media platform of <br /> Bangladesh
              </Typography>
              <Box
                sx={{
                  bgcolor: "white",
                  mt: 5,
                  mb: 1,
                  py: 0.5,
                  px: 1,
                  borderRadius: 5,
                }}
              >
                <OAuthProviders />
              </Box>
              <Typography sx={{ color: "white" }} fontSize={14}>
                {app.appName} Terms and condition
              </Typography>
              <Typography sx={{ color: "lightgray" }} fontSize={14}>
                v{app.appVersion}
              </Typography>
            </Box>
            {/* Auth Form  */}
            <Outlet />
          </Grid>
        </Container>
      </div>
    );
  }
}
