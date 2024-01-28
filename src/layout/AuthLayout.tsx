import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

import Typography from "@mui/material/Typography";
import OAuthProviders from "../components/global/OAuthProviders";

export default function AuthLayout() {
  const { user, token } = useSelector((s: RootState) => s.authState);

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
                bgcolor: "purple",
              }}
              flex={{ lg: 2, md: 1 }}
            >
              <Typography
                sx={{ color: "white" }}
                fontSize={32}
                fontWeight="bold"
              >
                Join Dadu-web
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
                Dadu-web Terms and condition
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
