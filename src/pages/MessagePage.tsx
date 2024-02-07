import {
  Avatar,
  Box,
  CssBaseline,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import BottomToolbar from "../components/message/BottomToolbar";
import ChatSidebar from "../components/sidebar/ChatSidebar";

export default function MessagePage() {
  return (
    <>
      <CssBaseline />
      <>
        <Stack direction="row">
          <Box sx={sidebarBoxSx}>
            <Scrollbars
              style={{ width: 350 }}
              className="min-h-[calc(100vh-70px)]"
              autoHide
              universal={true}
            >
              <ChatSidebar />
            </Scrollbars>
          </Box>
          <Box sx={{ width: "100%", position: "relative" }}>
            <Scrollbars
              style={{ width: "100%" }}
              className="min-h-[calc(100vh-70px)]"
              autoHide
              universal={true}
            >
              <List sx={{ paddingBottom: "85px" }}>
                {Array.from("abbaabbbaa").map((list, b) => (
                  <ListItem
                    sx={{
                      py: 0.5,
                      justifyContent: list === "a" ? "end" : "start",
                    }}
                    key={b}
                  >
                    <MessageItem />
                  </ListItem>
                ))}
              </List>
            </Scrollbars>
            <BottomToolbar />
          </Box>
        </Stack>
      </>
    </>
  );
}

function MessageItem() {
  return (
    <Stack
      direction="row"
      sx={{
        maxWidth: "50%",
        borderRadius: 1,
        bgcolor: "background.paper",
        p: 1,
      }}
    >
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={16} fontWeight="600">
              User name
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
          <Typography
            sx={{ display: "inline" }}
            component="span"
            variant="body2"
            color="text.secondary"
          >
            I'll be in your neighborhood doing errands this…
          </Typography>
        }
      />
    </Stack>
  );
}
type SX = SxProps<Theme> | undefined;
const sidebarBoxSx: SX = {
  bgcolor: "background.paper",
  borderRadius: 1,
  position: "sticky",
  top: 85,
  left: 0,
  right: 0,
};
