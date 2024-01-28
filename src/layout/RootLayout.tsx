import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { RootState } from "../store/store";

export default function RootLayout() {
  const { user, token } = useSelector((s: RootState) => s.authState);

  if (!user || !token) {
    return <Navigate to="/sign-in" />;
  } else {
    return (
      <Box bgcolor="lightgray" minHeight="100vh">
        <Header />
        <Box>
          <Outlet />
        </Box>
      </Box>
    );
  }
}
