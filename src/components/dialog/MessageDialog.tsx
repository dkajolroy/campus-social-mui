// import { Search } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Menu,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React from "react";

interface Props {
  goMessage: () => void;
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  toggleDrawer: () => void;
}
export default function MessageDialog(props: Props) {
  const { anchorEl, goMessage, toggleDrawer, handleClose, open } = props;
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      <ListItemButton onClick={goMessage}>
        <ListItemIcon>
          <Telegram
            fontSize="medium"
            sx={{
              bgcolor: "lightgray",
              height: 40,
              width: 40,
              p: 0.5,
              borderRadius: "50%",
            }}
          />
        </ListItemIcon>
        <ListItemText primary="Go Messenger" />
      </ListItemButton>
      <Divider />
      {/* Message list */}
      <List
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Latest messages
          </ListSubheader>
        }
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      >
        {messageRes.map((mes, i) => (
          <MessageResponse item={mes} key={i} onClick={toggleDrawer} />
        ))}
      </List>
    </Menu>
  );
}
const messageRes = [
  {
    image: "https://mui.com/static/images/avatar/1.jpg",
    name: "Brunch",
    createdAt: "",
    message: "I'll be in your neighborhood doing errands this…",
  },
  {
    image: "https://mui.com/static/images/avatar/2.jpg",
    name: "Summer BBQ",
    createdAt: "",
    message: "Wish I could come, but I'm out of town this…",
  },
  {
    image: "https://mui.com/static/images/avatar/3.jpg",
    name: "Oui Oui",
    createdAt: "",
    message: "Do you have Paris recommendations? Have you ever…",
  },
];

interface MProps {
  onClick: () => void;
  item: {
    image: string;
    name: string;
    createdAt: string;
    message: string;
  };
}
function MessageResponse({ onClick, item }: MProps) {
  return (
    <>
      <ListItemButton onClick={onClick} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize={16} fontWeight="600">
                {item.name}
              </Typography>
              <Typography
                fontSize={14}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                01 Jan 2022
              </Typography>
            </Stack>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {item.message}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
}
