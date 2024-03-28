import { useSocket } from "@/provider/SocketProvider";
import {
  Avatar,
  Badge,
  Divider,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Props {
  item: Conversation;
  user: User;
}
export default function ChatItem({ item, user }: Props) {
  const { discusId } = useParams();
  const { last_msg, updatedAt, name } = item;
  const meSender = last_msg?.sender?._id === user._id;
  const receiver = item.members.find((x) => x._id !== user._id);
  const { socket, onlineUser } = useSocket();
  // is user online in this group
  const online = item.members.filter((x) => {
    const meN = onlineUser.filter((ee) => ee.user_id !== user._id);
    return meN.find((xx) => xx.user_id == x._id);
  });

  // navigation routing
  const navigate = useNavigate();
  function onClick() {
    navigate(`/discus/${item._id}`);
  }
  // Join all room realtime updates
  useEffect(() => {
    if (user && item) {
      socket.emit("join_room", item._id);
    }
  }, [user, item]);
  return (
    <React.Fragment>
      <ListItemButton
        onClick={onClick}
        sx={{ bgcolor: discusId === item._id ? "ButtonShadow" : "initial" }}
      >
        <ListItemAvatar>
          <OnlineAvatar online={online} receiver={receiver} />
        </ListItemAvatar>
        <ListItemText
          primary={
            item.isGroup
              ? item.name
              : `${receiver?.firstName} ${receiver?.lastName}`
          }
          secondary={
            <Typography variant="caption" className="justify-between  flex">
              <span>
                {meSender ? "You: " : ""}
                {last_msg?.text.slice(0, 30)}
              </span>
              <span>{moment(item.updatedAt).fromNow()}</span>
            </Typography>
          }
        />
      </ListItemButton>
      <Divider variant="inset" component="li" />
    </React.Fragment>
  );
}

export function OnlineAvatar({
  receiver,
  online,
}: {
  receiver?: User;
  online: User[];
}) {
  // Active Indicator styles
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: online.length ? "#44b700" : "gray",
      color: "#44b700",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: online.length ? "ripple 1.2s infinite ease-in-out" : "ease",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
    >
      <Avatar alt={receiver?.firstName} src={receiver?.avatar.secure_url} />
    </StyledBadge>
  );
}
