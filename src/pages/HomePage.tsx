import { Box, Container, Grid } from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import Post from "../components/post/Post";
import RightBar from "../components/rightbar/RightBar";
import Sidebar from "../components/sidebar/Sidebar";

export default function HomePage() {
  return (
    <Container maxWidth="xl" sx={{ overflow: "hidden" }}>
      <Grid container spacing={2}>
        {/* items */}
        <Grid item sm={4} md={3} mt={2} display={{ xs: "none", sm: "block" }}>
          <Box
            sx={{
              width: "100%",
              bgcolor: "background.paper",
              borderRadius: "10px",
            }}
          >
            <Scrollbars
              style={{ width: "100%" }}
              className="min-h-[calc(100vh-100px)]"
              autoHide
              universal={true}
            >
              <Sidebar />
            </Scrollbars>
          </Box>
        </Grid>
        <Grid item xs={12} sm={8} md={6}>
          <Scrollbars
            style={{ width: "100%" }}
            className="min-h-[calc(100vh-100px)]"
            universal={true}
            renderTrackHorizontal={(props) => (
              <div {...props} className="track-horizontal" />
            )}
            renderTrackVertical={(props) => (
              <div {...props} className="track-vertical" />
            )}
            renderThumbHorizontal={(props) => (
              <div {...props} className="thumb-horizontal" />
            )}
            renderThumbVertical={(props) => (
              <div {...props} className="thumb-vertical" />
            )}
          >
            <Box display="flex" flexDirection="column">
              {[...Array.from("123").keys()].map((item, index) => {
                return <Post key={index} item={item} />;
              })}
            </Box>
          </Scrollbars>
        </Grid>
        <Grid item md={3} mt={2} display={{ xs: "none", md: "block" }}>
          <Box>
            <RightBar />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
