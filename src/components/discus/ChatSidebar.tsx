import SearchIcon from "@mui/icons-material/Search";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import moment from "moment";
import * as React from "react";

import { useSocket } from "@/provider/SocketProvider";
import { useGetConversationQuery } from "@/query/message_query";
import { RootStore } from "@/store/store";
import {
  ListSubheader,
  Skeleton,
  Stack,
  Typography,
  alpha,
} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import { useSelector } from "react-redux";
import ChatItem from "./ChatItem";

export default function ChatSidebar() {
  const [limit, setLimit] = React.useState(20);
  const { user } = useSelector((sx: RootStore) => sx.authState);
  const { data, isLoading, isError, isSuccess, refetch } =
    useGetConversationQuery({
      limit,
    });

  const { socket } = useSocket();
  React.useEffect(() => {
    socket.on("new_message", () => {
      refetch();
    });
  }, []);

  var tDay_list: Conversation[] = [];
  var yDay_list: Conversation[] = [];
  var oDay_list: Conversation[] = [];
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square sx={{ pb: "50px", boxShadow: "none" }}>
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon color="disabled" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>

        {isSuccess && !data.length ? (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "50vh" }}
          >
            <Typography variant="overline" fontSize={16}>
              Empty conversation
            </Typography>
          </Stack>
        ) : isError ? (
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: "50vh" }}
          >
            <Typography variant="overline" fontSize={16}>
              Network error
            </Typography>
          </Stack>
        ) : null}

        <List>
          {data?.map((item, i) => {
            if (!user) return;
            const today = moment(new Date()).format("DD MM YY");
            const yesterday = moment(new Date())
              .subtract(1, "day")
              .format("DD MM YY");

            const itemDate = moment(item.updatedAt).format("DD MM YY");
            const isToday = itemDate === today;
            const isYesterday = itemDate === yesterday;
            // condition for one time render list header
            if (isToday && tDay_list.length < 3) tDay_list.push(item);
            if (isYesterday && yDay_list.length < 3) yDay_list.push(item);
            if (!isYesterday && !isToday && oDay_list.length < 3)
              oDay_list.push(item);
            return (
              <React.Fragment key={i}>
                {isToday &&
                  tDay_list.length < 2 && ( // < 5
                    <ListSubheader sx={{ bgcolor: "background.paper" }}>
                      Today
                    </ListSubheader>
                  )}
                {isYesterday &&
                  yDay_list.length < 2 && ( //   > 5
                    <ListSubheader sx={{ bgcolor: "background.paper" }}>
                      Yesterday
                    </ListSubheader>
                  )}
                {!isYesterday &&
                  !isToday &&
                  oDay_list.length < 2 && ( //   > 5
                    <ListSubheader sx={{ bgcolor: "background.paper" }}>
                      Older
                    </ListSubheader>
                  )}
                <ChatItem item={item} user={user} />
              </React.Fragment>
            );
          })}
        </List>
        {isLoading ? (
          <Stack gap={1}>
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton variant="rounded" width="100%" height={50} key={i} />
            ))}
          </Stack>
        ) : null}
      </Paper>
    </React.Fragment>
  );
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));
