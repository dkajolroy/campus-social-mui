import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export default function MessageItem({ item }: { item: string }) {
  const myText = item === "a";
  return (
    <ListItem
      sx={{
        py: 0.5,
        justifyContent: myText ? "end" : "start",
        flexDirection: myText ? "row-reverse" : "row",
      }}
    >
      <ListItemAvatar sx={{ justifyContent: "center", display: "flex" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
      </ListItemAvatar>
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
                User name
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
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              I'll be in your neighborhood doing errands this…
            </Typography>
          }
        />
      </Stack>
    </ListItem>
  );
}
