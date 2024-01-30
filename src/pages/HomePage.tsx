import { Box, Container, Grid, Stack, SxProps, Theme } from "@mui/material";
import ActiveFollowers from "../components/feed/ActiveFollowers";
import CreatePost from "../components/post/CreatePost";
import Post from "../components/post/Post";
import RightBar from "../components/rightbar/RightBar";
import Sidebar from "../components/sidebar/Sidebar";

export default function HomePage() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {/* Grid items 1 for sidebar */}
        <Grid
          item
          sm={4}
          md={3}
          mt={2}
          position="relative"
          display={{ xs: "none", sm: "block" }}
        >
          <Box sx={sidebarBoxSx}>
            <Sidebar />
          </Box>
        </Grid>
        {/* Grid items 2 for post scroll */}
        <Grid item xs={12} sm={8} md={6}>
          <Box display="flex" my={2} flexDirection="column">
            <Stack
              mb={2}
              bgcolor="background.paper"
              p={1}
              borderRadius={1}
              gap={1}
              direction="row"
            >
              {dummy.map((ur, index) => {
                return <ActiveFollowers item={ur} key={index} />;
              })}
            </Stack>
            <Box
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: 1,
              }}
            >
              <CreatePost />
            </Box>
            <Box sx={{ px: { xs: 0, lg: 5 } }}>
              {[...Array.from("123456789").keys()].map((item, index) => {
                return <Post key={index} item={item} />;
              })}
            </Box>
          </Box>
        </Grid>
        {/* Grid items 3 for right-bar */}
        <Grid
          item
          md={3}
          mt={2}
          position="relative"
          display={{ xs: "none", md: "block" }}
        >
          <Box sx={sidebarBoxSx}>
            <RightBar />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const dummy = [
  "https://mui.com/static/images/avatar/1.jpg",
  "https://mui.com/static/images/avatar/2.jpg",
  "https://mui.com/static/images/avatar/3.jpg",
  "",
  "https://mui.com/static/images/avatar/5.jpg",
  "https://mui.com/static/images/avatar/4.jpg",
  "https://mui.com/static/images/avatar/3.jpg",
  "https://mui.com/static/images/avatar/1.jpg",
  "https://mui.com/static/images/avatar/2.jpg",
  "https://mui.com/static/images/avatar/3.jpg",
  "",
  "https://mui.com/static/images/avatar/5.jpg",
  "https://mui.com/static/images/avatar/4.jpg",
];

type SX = SxProps<Theme> | undefined;
const sidebarBoxSx: SX = {
  width: "100%",
  bgcolor: "background.paper",
  borderRadius: 1,
  position: "sticky",
  top: 85,
  left: 0,
  right: 0,
};
