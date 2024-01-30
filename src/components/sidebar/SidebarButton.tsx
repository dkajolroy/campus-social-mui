import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Menu, WithSubmenu } from "../../constants/menus";

export default function SidebarButton(Props: { item: WithSubmenu }) {
  const { item } = Props;

  // Collapse menus state
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <ListItemButton onClick={() => setOpen((s) => !s)}>
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Props.item.icon color="primary" />
        </ListItemIcon>
        <ListItemText primary={item.title} />
        {/* If submenu available */}
        {item.subMenu && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {item.subMenu && <SubMenu open={open} subItem={item.subMenu} />}
    </>
  );
}

// Sub item
const SubMenu = (Props: { open: boolean; subItem: Menu }) => {
  const { open, subItem } = Props;
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItemButton sx={{ pl: 4 }}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <Props.subItem.icon color="primary" />
          </ListItemIcon>
          <ListItemText primary={subItem.title} />
        </ListItemButton>
      </List>
    </Collapse>
  );
};
