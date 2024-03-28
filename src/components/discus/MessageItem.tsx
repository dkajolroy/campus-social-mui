import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";

export default function MessageItem({
  item,
  user,
}: {
  item: Message;
  user: User;
}) {
  const myText = item.sender?._id === user._id;
  return (
    <ListItem
      sx={{
        py: 0.5,
        justifyContent: myText ? "end" : "start",
        flexDirection: myText ? "row-reverse" : "row",
      }}
    >
      {!myText && (
        <ListItemAvatar sx={{ justifyContent: "center", display: "flex" }}>
          <Avatar
            alt={item.sender?.firstName}
            src={item.sender?.avatar.secure_url}
          />
        </ListItemAvatar>
      )}
      <Stack
        sx={{
          maxWidth: "80%",
          borderRadius: 1,
          background: "white",
          p: 1,
        }}
      >
        <ListItemText
          primary={
            <Stack
              direction={myText ? "row-reverse" : "row"}
              flexWrap="wrap"
              justifyContent="space-between"
            >
              <Typography fontSize={16} fontWeight="600">
                {myText
                  ? "You"
                  : `${item.sender?.firstName} ${item.sender?.lastName}`}
              </Typography>
            </Stack>
          }
          secondary={
            <>
              {item.text}
              <Typography
                fontSize={12}
                component="span"
                variant="body2"
                color="text.secondary"
                display="block"
                textAlign={myText ? "left" : "right"}
              >
                {moment(item.createdAt).fromNow()}
              </Typography>
            </>
          }
        />
      </Stack>
    </ListItem>
  );
}
