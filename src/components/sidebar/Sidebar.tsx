import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from "@mui/icons-material/StarBorder";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import menu_list from "../../constants/menus";

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      {menu_list.map((item, i) => {
        return (
          <ListItemButton key={i}>
            <ListItemIcon sx={{ minWidth: 40 }}>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        );
      })}
    </List>
  );
}
