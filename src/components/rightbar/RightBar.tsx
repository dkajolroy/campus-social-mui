import InsertChart from "@mui/icons-material/InsertChart";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import RightBarHeader from "./RightBarHeader";
export default function RightBar() {
  return (
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
        <Typography fontSize={22}>Trading</Typography>

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
  );
}

const trendings = ["games", "viralpost", "test", "job", "new", "update"];
