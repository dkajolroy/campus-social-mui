import { Box } from "@mui/material";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { app } from "../constants/config";
import { logout } from "../slices/authSlice";
import { RootStore } from "../store/store";
export default function RootLayout() {
  const [cookies] = useCookies([app.clientCookieName]);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!cookies[app.clientCookieName]) {
      dispatch(logout());
    }
  }, [cookies]);

  const authState = useSelector((s: RootStore) => s.authState);
  if (!authState) return;
  const { user, token } = authState;

  if (!user || !token) {
    return <Navigate to="/auth/sign-in" />;
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
