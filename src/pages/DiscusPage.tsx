import { Box, CssBaseline, List } from "@mui/material";
import BottomToolbar from "../components/discus/BottomToolbar";
import MessageItem from "../components/discus/MessageItem";

export default function DiscusPage() {
  return (
    <Box position="relative">
      <CssBaseline />
      <List>
        {Array.from("abbaabbbaa").map((list, i) => (
          <MessageItem key={i} item={list} />
        ))}
      </List>
      <BottomToolbar />
    </Box>
  );
}
