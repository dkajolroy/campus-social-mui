import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-[200vh]  flex justify-center items-center bg-green-600">
      <Link to="/profile">Profile</Link>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}
