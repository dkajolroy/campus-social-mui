import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

export default function AuthLayout() {
  const { user, token } = useSelector((s: RootState) => s.authState);
  if (user && token) {
    return <Navigate to="/" />;
  } else {
    return (
      <div className="min-h-screen ">
        <h2 className="text-center">This is Auth Layout </h2>
        <Outlet />
      </div>
    );
  }
}
