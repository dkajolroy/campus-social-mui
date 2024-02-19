import { Favorite } from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import React from "react";

export default function NotificationDialog() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="notification-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box maxWidth={400}>
          <Typography mb={1} textAlign="center" fontWeight={500} fontSize={20}>
            Notification
          </Typography>
          <Divider />
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {Array.from({ length: 5 }).map((_, i) => {
              return <Notification key={i} />;
            })}
          </List>
        </Box>
      </Menu>
    </>
  );
}

function Notification() {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            badgeContent={
              <Box bgcolor="red" borderRadius={100} sx={{ p: "2px" }}>
                <Favorite sx={{ color: "white", fontSize: 14 }} />
              </Box>
            }
          >
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </Badge>
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}
