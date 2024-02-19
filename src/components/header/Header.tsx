import { School } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { app } from "../../constants/config";
import AppMenuDialog from "../dialog/AppMenuDialog";
import MessageDialog from "../dialog/MessageDialog";
import NotificationDialog from "../dialog/NotificationDialog";
import UserMenuDialog from "../dialog/UserMenuDialog";
import SearchInput from "./SearchInput";
const pages = ["Feed", "Friends", "Video"];

export default function Header() {
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
              <School sx={{ display: { md: "flex" }, mr: 1 }} />
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
                {app.appName.toUpperCase()}
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
                sx={{ borderWidth: 1, color: "white", display: "block" }}
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
              <AppMenuDialog />
              <MessageDialog />
              <NotificationDialog />
            </Box>
            {/* User Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <UserMenuDialog />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
