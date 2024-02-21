import { useSelector } from "react-redux";
import {
  Navigate,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { RootStore } from "../store/store";

export default function ForgetLayout() {
  const { pathname } = useLocation();
  const [search] = useSearchParams();
  // const [cookie, _] = useCookies(["FORGET"]);
  const forgetState = useSelector((xx: RootStore) => xx.forgetState);

  const key = search.get("key"); // for email link
  const otp = forgetState?.otp; // for use email otp

  // protected without send otp or link
  if (pathname === "/auth/forget/otp" && forgetState?.duration) {
    return <Outlet />;
  }
  if (pathname === "/auth/forget/password" && (key || otp)) {
    return <Outlet />;
  } else {
    return <Navigate to="/auth/sign-in" />;
  }
}
