import { Box, CssBaseline, Stack, SxProps, Theme } from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import { useMediaQuery } from "react-responsive";
import { Outlet, useParams } from "react-router-dom";
import ChatSidebar from "../components/sidebar/ChatSidebar";
export default function DiscusLayout() {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const { discusId } = useParams();

  return (
    <>
      <CssBaseline />
      <>
        <Stack direction="row">
          <Box
            display={discusId && isTablet ? "none" : "block"}
            sx={{
              width: "100%",
              background: "white",
              maxWidth: isTablet ? "100%" : 350,
            }}
          >
            <Box sx={sidebarBoxSx}>
              <Scrollbars
                style={{ width: "100%" }}
                className="min-h-[calc(100vh-70px)]"
                autoHide
                universal={true}
              >
                <Box px={1}>
                  <ChatSidebar />
                </Box>
              </Scrollbars>
            </Box>
          </Box>
          <Box
            className="max-h-[calc(100vh-64px)] overflow-y-auto"
            display={isTablet && !discusId ? "none" : "block"}
            sx={{
              width: "100%",
              height: "100",
              position: "relative",
            }}
          >
            <Outlet />
          </Box>
        </Stack>
      </>
    </>
  );
}
type SX = SxProps<Theme> | undefined;
const sidebarBoxSx: SX = {
  bgcolor: "background.paper",
  borderRadius: 1,
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
};
