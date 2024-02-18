import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import "react-multi-carousel/lib/styles.css";
import { Route, Routes } from "react-router-dom";
import ForgetPage from "./_auth/ForgetPage";
import SignInPage from "./_auth/SignInPage";
import SignUpPage from "./_auth/SignUpPage";
import { icons } from "./constants/icons";
import AuthLayout from "./layout/AuthLayout";
import DiscusLayout from "./layout/DiscusLayout";
import RootLayout from "./layout/RootLayout";
import ScrollTop from "./layout/ScrollTop";
import SnackbarSetup from "./layout/SnackbarSetup";
import DiscusPage from "./pages/DiscusPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage";
import ReduxProvider from "./provider/ReduxProvider";
import ThemeProvider from "./provider/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <ReduxProvider>
        {/* Default Position to top all pages */}
        <ScrollTop />
        <SnackbarSetup />

        <Routes>
          {/* Private Route */}
          <Route Component={RootLayout}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* Discus nested route */}
            <Route element={<DiscusLayout />}>
              <Route path="/discus" element={<DiscusNotSelect />} />
              <Route path="/discus/:discusId" element={<DiscusPage />} />
            </Route>
          </Route>
          {/* Public Route */}
          <Route Component={AuthLayout}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/forget" element={<ForgetPage />} />
          </Route>
          {/* Global Route */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </ReduxProvider>
    </ThemeProvider>
  );
}
function DiscusNotSelect() {
  return (
    <Box
      justifyContent="center"
      minHeight="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Lottie className="w-52" animationData={icons.sendLottie} loop />
      <Typography>Not Chat Selected</Typography>
    </Box>
  );
}
