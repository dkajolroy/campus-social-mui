import { Box } from "@mui/material";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { app } from "../constants/config";
import { logout } from "../slices/authSlice";
import { openSnackbar } from "../slices/toggleSlice";
import { RootStore } from "../store/store";
export default function RootLayout() {
  const { user, token } = useSelector((s: RootStore) => s.authState);
  const [cookies] = useCookies([app.clientCookieName]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!cookies[app.clientCookieName]) {
      dispatch(
        openSnackbar({ mode: "error", message: "You are not authenticate !" })
      );
      dispatch(logout());
    }
  }, [cookies]);

  if (!user || !token) {
    return <Navigate to="/sign-in" />;
  } else {
    return (
      <Box bgcolor="whitesmoke" minHeight="100vh" position="relative">
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Box>
    );
  }
}
