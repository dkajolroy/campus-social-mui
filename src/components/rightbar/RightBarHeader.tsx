import { Avatar } from "@mui/material";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
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
          Dadu-vai
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
