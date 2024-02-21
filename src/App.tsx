import "react-multi-carousel/lib/styles.css";
import { Route, Routes } from "react-router-dom";
import ChangePassPage from "./_auth/ChangePassPage";
import ForgetPage from "./_auth/ForgetPage";
import OTPage from "./_auth/OTPage";
import SignInPage from "./_auth/SignInPage";
import SignUpPage from "./_auth/SignUpPage";
import AuthLayout from "./layout/AuthLayout";
import DiscusLayout from "./layout/DiscusLayout";
import ForgetLayout from "./layout/ForgetLayout";
import RootLayout from "./layout/RootLayout";
import ScrollTop from "./layout/ScrollTop";
import SnackbarSetup from "./layout/SnackbarSetup";
import DiscusNotSelect from "./pages/DiscusNotSelect";
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
            <Route path="/auth/sign-in" element={<SignInPage />} />
            <Route path="/auth/sign-up" element={<SignUpPage />} />
            <Route path="/auth/forget" element={<ForgetPage />} />
            <Route element={<ForgetLayout />}>
              <Route path="/auth/forget/otp" element={<OTPage />} />
              <Route
                path="/auth/forget/password"
                element={<ChangePassPage />}
              />
            </Route>
          </Route>
          {/* Global Route */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </ReduxProvider>
    </ThemeProvider>
  );
}
