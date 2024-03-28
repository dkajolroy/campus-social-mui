import { useSocket } from "@/provider/SocketProvider";
import { useGetMessagesQuery } from "@/query/message_query";
import { RootStore } from "@/store/store";
import { Box, CssBaseline, List } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BottomToolbar from "../components/discus/BottomToolbar";
import MessageItem from "../components/discus/MessageItem";

export default function DiscusPage() {
  const { discusId } = useParams();
  const { user } = useSelector((sx: RootStore) => sx.authState);
  const { refetch, data } = useGetMessagesQuery(String(discusId));
  const { socket } = useSocket();
  React.useEffect(() => {
    socket.on("new_message", () => {
      refetch();
    });
  }, []);

  return (
    <Box position="relative">
      <CssBaseline />
      <Box className="min-h-[calc(100vh-128px)]">
        <List>
          {data?.map((list, i) => {
            if (!user) return;
            return <MessageItem key={i} user={user} item={list} />;
          })}
        </List>
      </Box>
      <BottomToolbar />
    </Box>
  );
}
