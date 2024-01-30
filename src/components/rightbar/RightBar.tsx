import InsertChart from "@mui/icons-material/InsertChart";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Scrollbars from "react-custom-scrollbars-2";
import RightBarHeader from "./RightBarHeader";
export default function RightBar() {
  return (
    <Scrollbars
      style={{ width: "100%" }}
      className="min-h-[calc(100vh-100px)]"
      autoHide
      universal={true}
    >
      <Box gap={2} display="flex" flexDirection="column">
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 2,
          }}
        >
          <RightBarHeader />
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 2,
            padding: 1,
          }}
        >
          <Typography fontSize={22}>Hashtag</Typography>

          <List component="ul" aria-labelledby="nested-list-subheader">
            {trendings.map((tx, ix) => {
              return (
                <ListItemButton key={ix}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <InsertChart />
                  </ListItemIcon>
                  <ListItemText primary={`#${tx}`} />
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Box>
    </Scrollbars>
  );
}

const trendings = ["Jio biden", "modi", "Donald trump", "job", "new", "apple"];
