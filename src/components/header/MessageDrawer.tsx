import SendIcon from "@mui/icons-material/Send";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  SwipeableDrawer,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import InputEmoji from "react-input-emoji";

const settings = ["Profile", "Block", "Media", "Report"];
interface Props {
  openDrawer: boolean;
  toggleDrawer: () => void;
}
export default function MessageDrawer(props: Props) {
  const { openDrawer, toggleDrawer } = props;

  const [text, setText] = useState("");

  function handleOnEnter() {
    // use text message on enter
  }

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <SwipeableDrawer
      anchor="right"
      open={openDrawer}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      sx={{ overflowY: "inherit" }}
    >
      <Box width={340}>
        {/* App bar header */}
        <AppBar position="static">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p={1}
          >
            <Typography fontSize={16} fontWeight="700">
              Kamrul Hasan
            </Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/3.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Box sx={{ minWidth: 140 }}>
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Menu>
          </Stack>
        </AppBar>

        {/* Data */}
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            gap: 2,
          }}
        >
          <Typography>Messages</Typography>
          <Typography>Messages</Typography>
          <Typography>Messages</Typography>
          <Typography>Messages</Typography>
          <Typography>Messages</Typography>
          <Typography>Messages</Typography>
        </Box>

        {/* Bottom toolbar */}
        <AppBar
          position="absolute"
          elevation={2}
          color="inherit"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Stack direction="row">
            <>
              <InputEmoji
                keepOpened={true}
                theme="light"
                inputClass="emoji-picker-input drawer-picker"
                value={text}
                onChange={setText}
                cleanOnEnter
                onEnter={handleOnEnter}
                placeholder="Type a message"
              />

              <Button
                sx={{
                  borderColor: "lightgray",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                onClick={handleOnEnter}
                variant="outlined"
                color="inherit"
                startIcon={<SendIcon />}
              >
                Send
              </Button>
            </>
          </Stack>
        </AppBar>
      </Box>
    </SwipeableDrawer>
  );
}
