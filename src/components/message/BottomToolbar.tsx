import { Settings } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  alpha,
  styled,
} from "@mui/material";

export default function BottomToolbar() {
  return (
    <AppBar position="absolute" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <Stack direction="row">
          <Search>
            <StyledInputBase
              sx={{ minWidth: 300 }}
              placeholder="Type message..."
              inputProps={{ "aria-label": "message" }}
            />
          </Search>
          <Button
            variant="outlined"
            color="inherit"
            startIcon={<SendIcon />}
            sx={{
              color: "white",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            Send
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
