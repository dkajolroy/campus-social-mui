import { icons } from "@/constants/icons";
import { useSocket } from "@/provider/SocketProvider";
import {
  useDeliveryMsgMutation,
  useGetConversationQuery,
} from "@/query/message_query";
import { RootStore } from "@/store/store";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import {
  Badge,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListSubheader,
  Menu,
  Stack,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Fade from "@mui/material/Fade";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { app } from "../../constants/config";
import MessageDrawer from "../drawer/MessageDrawer";

export default function MessageDialog() {
  // const { anchorEl, goMessage, toggleDrawer, handleClose, open } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Messages notify
  const { data, refetch } = useGetConversationQuery({ limit: 20 });
  const { user } = useSelector((sx: RootStore) => sx.authState);
  const totalUnread =
    data &&
    data.filter((msg) => {
      if (msg.last_msg && msg.last_msg.sender) {
        return (
          msg.last_msg.sender._id !== user?._id && !msg.last_msg?.delivered
        );
      }
    });
  const [sendToDelivery] = useDeliveryMsgMutation();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (totalUnread) {
      const msg = totalUnread.map((x) => x.last_msg?._id);
      sendToDelivery({ messages: msg });
    }
    setAnchorEl(event.currentTarget);
  };
  // const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  function goMessage() {
    // goto message page
    navigate("/discus");
    setAnchorEl(null);
  }
  const [openDrawer, setOpenDrawer] = useState(false); // drawer
  function toggleDrawer() {
    // open right drawer
    setAnchorEl(null);
    setOpenDrawer((s) => !s);
  }

  // Realtime change notify
  const { socket } = useSocket();
  React.useEffect(() => {
    socket.on("new_message", () => {
      refetch();
    });
  }, []);

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      >
        {!totalUnread ? (
          <MailIcon />
        ) : (
          <Badge
            badgeContent={totalUnread.length < 20 ? totalUnread.length : "20+"}
            color="error"
          >
            <MailIcon />
          </Badge>
        )}
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <ListItemButton onClick={goMessage}>
          <ListItemIcon>
            <Avatar
              sx={{ borderWidth: 1, borderColor: "primary" }}
              src={icons.dIcon}
              alt="icon"
            />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography
                variant="h2"
                fontSize={16}
                fontWeight={600}
              >{`Go ${app.chatName}`}</Typography>
            }
            secondary="Go to your inbox hare"
          />
          <KeyboardDoubleArrowRight color="action" />
        </ListItemButton>
        {/* Message list */}
        <Divider />
        <List
          subheader={
            <ListSubheader
              sx={{ lineHeight: 3 }}
              component="div"
              id="nested-list-subheader"
            >
              Latest messages
            </ListSubheader>
          }
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {messageRes.map((mes, i) => (
            <MessageResponse item={mes} key={i} onClick={toggleDrawer} />
          ))}
        </List>
      </Menu>
      <MessageDrawer toggleDrawer={toggleDrawer} openDrawer={openDrawer} />
    </>
  );
}
const messageRes = [
  {
    image: "https://mui.com/static/images/avatar/1.jpg",
    name: "Brunch",
    createdAt: "",
    message: "I'll be in your neighborhood doing errands this…",
  },
  {
    image: "https://mui.com/static/images/avatar/2.jpg",
    name: "Summer BBQ",
    createdAt: "",
    message: "Wish I could come, but I'm out of town this…",
  },
  {
    image: "https://mui.com/static/images/avatar/3.jpg",
    name: "Oui Oui",
    createdAt: "",
    message: "Do you have Paris recommendations? Have you ever…",
  },
];

interface MProps {
  onClick: () => void;
  item: {
    image: string;
    name: string;
    createdAt: string;
    message: string;
  };
}
function MessageResponse({ onClick, item }: MProps) {
  return (
    <>
      <ListItemButton onClick={onClick} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack direction="row" justifyContent="space-between">
              <Typography fontSize={16} fontWeight="600">
                {item.name}
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
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {item.message}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </>
  );
}
