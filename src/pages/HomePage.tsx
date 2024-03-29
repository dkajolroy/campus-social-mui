import ActiveFollowers from "@/components/feed/ActiveFollowers";
import CreatePost from "@/components/post/CreatePost";
import Post from "@/components/post/Post";
import RightBar from "@/components/rightbar/RightBar";
import Sidebar from "@/components/sidebar/Sidebar";
import PostSkeleton from "@/components/skeleton/PostSkeleton";
import { useSocket } from "@/provider/SocketProvider";
import { useGetFriendsQuery } from "@/query/friends_query";
import { useGetPostQuery } from "@/query/post_query";
import { Box, Container, Grid, SxProps, Theme } from "@mui/material";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Carousel from "react-multi-carousel";

export default function HomePage() {
  const [limit, setLimit] = useState(20);
  const { isLoading, isFetching, data } = useGetPostQuery({ limit });

  // Load more data
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && data && data.length >= limit) {
      setLimit((s) => s + 20);
    }
  }, [inView]);

  // online friends
  const friends = useGetFriendsQuery();
  const { onlineUser } = useSocket();
  // console.log(onlineUser);
  // console.log(online);
  const onlineFriends = friends.data?.filter((x) => {
    return onlineUser.find((xx) => xx.user_id === x.user._id);
  });

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {/* Grid items 1 for sidebar */}
        <Grid
          item
          sm={4}
          md={3}
          position="relative"
          display={{ xs: "none", sm: "block" }}
        >
          <Box sx={sidebarBoxSx}>
            <Sidebar />
          </Box>
        </Grid>
        {/* Grid items 2 for post scroll */}
        <Grid item xs={12} sm={8} md={6}>
          <Box display="flex" mt={`${centerTop}px`} flexDirection="column">
            {onlineFriends && onlineFriends.length ? (
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
                  {onlineFriends.map((xxx, index) => {
                    return <ActiveFollowers item={xxx.user} key={index} />;
                  })}
                </Carousel>
              </Box>
            ) : null}
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
              {isLoading &&
                Array.from({ length: 5 }).map((_, i) => (
                  <PostSkeleton key={i} />
                ))}
              {data?.map((item, index) => {
                return <Post key={index} item={item} />;
              })}
            </Box>
            <div ref={ref} className="flex justify-center">
              <span>{isFetching ? "Processing..." : "Load more"}</span>
            </div>
          </Box>
        </Grid>
        {/* Grid items 3 for right-bar */}
        <Grid
          item
          md={3}
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
const sidebarTop = 85;
const centerTop = sidebarTop - 64;
const sidebarBoxSx: SX = {
  width: "100%",
  bgcolor: "background.paper",
  borderRadius: 1,
  position: "sticky",
  top: sidebarTop,
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
