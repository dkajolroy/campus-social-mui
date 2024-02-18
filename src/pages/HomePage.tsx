import { Box, Button, Container, Grid, SxProps, Theme } from "@mui/material";
import Carousel from "react-multi-carousel";
import ActiveFollowers from "../components/feed/ActiveFollowers";
import CreatePost from "../components/post/CreatePost";
import Post from "../components/post/Post";
import RightBar from "../components/rightbar/RightBar";
import Sidebar from "../components/sidebar/Sidebar";
import { axiosInstance } from "../utils/service";

export default function HomePage() {
  async function demo() {
    // for test protect route
    const { data } = await axiosInstance.get("/api/posts");
    console.log(data);
    console.log("data");
  }

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
            <Button onClick={demo}>OK</Button>
            <Sidebar />
          </Box>
        </Grid>
        {/* Grid items 2 for post scroll */}
        <Grid item xs={12} sm={8} md={6}>
          <Box display="flex" my={2} flexDirection="column">
            <Box
              mb={2}
              bgcolor="background.paper"
              py={1}
              px={1}
              borderRadius={1}
              gap={1}
              position="relative"
            >
              <Carousel
                additionalTransfrom={0}
                arrows
                centerMode={false}
                containerClass="container"
                draggable
                focusOnSelect={false}
                infinite={false}
                keyBoardControl
                minimumTouchDrag={80}
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                slidesToSlide={5}
                swipeable
              >
                {dummy.map((ur, index) => {
                  return <ActiveFollowers item={ur} key={index} />;
                })}
              </Carousel>
            </Box>
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
  "https://mui.com/static/images/avatar/3.jpg",
  "",
  "https://mui.com/static/images/avatar/5.jpg",
  "https://mui.com/static/images/avatar/4.jpg",
  "https://mui.com/static/images/avatar/3.jpg",
];

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1200,
    },
    items: 12,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: {
      max: 1200,
      min: 464,
    },
    items: 9,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 13,
    },
    items: 6,
    partialVisibilityGutter: 30,
  },
};
