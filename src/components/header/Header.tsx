// import { Search } from "@mui/icons-material";
import AdbIcon from "@mui/icons-material/Adb";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MessageDialog from "../dialog/MessageDialog";
import MessageDrawer from "./MessageDrawer";
import SearchInput from "./SearchInput";
import UserMenuDialog from "./UserMenuDialog";
const pages = ["Feed", "Friends", "Video"];

export default function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null); // dialog
  const open = Boolean(anchorEl); //null or element => convert to boolean value
  const [openDrawer, setOpenDrawer] = useState(false); // drawer
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    // close dialog
    setAnchorEl(null);
  };
  function goMessage() {
    // goto message page
    navigate("/message");
    setAnchorEl(null);
  }
  function toggleDrawer() {
    // open right drawer
    setAnchorEl(null);
    setOpenDrawer((s) => !s);
  }
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Link to="/">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <AdbIcon sx={{ display: { md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
            </Box>
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Nav menus */}
            {pages.map((page) => (
              <Button
                variant="outlined"
                color="inherit"
                key={page}
                sx={{ my: 2, borderWidth: 1, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            {/* Search input */}
            <SearchInput />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Icon buttons */}
            <Box>
              <IconButton
                onClick={handleClick}
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <MessageDialog
                anchorEl={anchorEl}
                goMessage={goMessage}
                handleClose={handleClose}
                open={open}
                toggleDrawer={toggleDrawer} //for open drawer
              />
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            {/* User Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <UserMenuDialog />
            </Box>
          </Box>
        </Toolbar>
      </Container>
      <MessageDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
    </AppBar>
  );
}
