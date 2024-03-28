import { useSendMessageToRoomMutation } from "@/query/message_query";
import { Settings } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { AppBar, Box, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { useState } from "react";
import InputEmoji from "react-input-emoji";
import { useParams } from "react-router-dom";

export default function BottomToolbar() {
  const [text, setText] = useState("");
  const { discusId } = useParams();
  const [sendMessage] = useSendMessageToRoomMutation();

  function handleOnEnter() {
    // use text message on enter
    if (discusId && text) {
      sendMessage({ receiver: discusId, text });
      setText("");
    }
  }

  return (
    <AppBar
      position="sticky"
      elevation={2}
      color="inherit"
      sx={{ top: "auto", bottom: 0 }}
    >
      <Toolbar className="!px-0">
        <Stack direction="row" width="100%">
          <InputEmoji
            keepOpened={true}
            theme="light"
            inputClass="emoji-picker-input bottom-picker"
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />

          <Button
            size="small"
            sx={{
              borderColor: "lightgray",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
            onClick={handleOnEnter}
            variant="outlined"
            color="inherit"
            startIcon={<SendIcon />}
          >
            Send
          </Button>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton sx={{ mx: 1 }} color="inherit">
          <Settings />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
