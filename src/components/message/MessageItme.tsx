import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export default function MessageItem({ item }: { item: string }) {
  return (
    <ListItem
      sx={{
        py: 0.5,
        justifyContent: item === "a" ? "end" : "start",
      }}
    >
      <Stack
        direction="row"
        sx={{
          maxWidth: "80%",
          borderRadius: 1,
          bgcolor: "background.paper",
          p: 1,
        }}
      >
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Stack
              direction="row"
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
