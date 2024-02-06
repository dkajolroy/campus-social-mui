import "react-multi-carousel/lib/styles.css";
import { Route, Routes } from "react-router-dom";
import SignInPage from "./_auth/SignInPage";
import SignUpPage from "./_auth/SignUpPage";
import AuthLayout from "./layout/AuthLayout";
import RootLayout from "./layout/RootLayout";
import ScrollTop from "./layout/ScrollTop";
import HomePage from "./pages/HomePage";
import MessagePage from "./pages/MessagePage";
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
        <Routes>
          {/* Public Route */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
          </Route>
          {/* Private Route */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/message" element={<MessagePage />} />
          </Route>
          {/* Global Route */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </ReduxProvider>
    </ThemeProvider>
  );
}
