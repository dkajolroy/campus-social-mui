import { Avatar } from "@mui/material";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootStore } from "../../store/store";

export default function MediaCard() {
  const authState = useSelector((xx: RootStore) => xx.authState);

  if (!authState) return;
  const { user } = authState;
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <Avatar
        alt={`${user?.firstName} ${user?.lastName}`}
        src={user?.avatar.secure_url}
        sx={{
          width: 100,
          height: 100,
          position: "absolute",
          top: 140,
          left: "50%",
          translate: "-50% -50%",
        }}
      />
      <CardContent sx={{ mt: "40px" }}>
        <Typography align="center" gutterBottom variant="h5" component="div">
          {`${user?.firstName} ${user?.lastName}`}
        </Typography>
        <Typography align="center" variant="body2" color="text.secondary">
          @username | 0 Follower | 0 Following
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button size="small">Share</Button>
        <Button size="small">Profile</Button>
      </CardActions>
    </Card>
  );
}
