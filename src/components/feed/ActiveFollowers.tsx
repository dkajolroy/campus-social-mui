import {
  Avatar,
  Box,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import Badge from "@mui/material/Badge";

export default function ActiveFollowers({ item }: { item: string }) {
  return (
    <HtmlTooltip
      title={
        <Box>
          <List sx={{ mb: 2 }}>
            <ListItemButton alignItems="flex-start" sx={{ borderRadius: 1 }}>
              <ListItemAvatar>
                <Avatar
                  alt="Profile Picture"
                  src="https://mui.com/static/images/avatar/5.jpg"
                />
              </ListItemAvatar>

              <ListItemText
                primary={
                  <Typography fontSize={18} fontWeight="700">
                    This Name
                  </Typography>
                }
                secondary={
                  <>
                    <Typography color="CaptionText" fontWeight="500">
                      0 Follower | 0 Followings
                    </Typography>
                    <Typography variant="body2" fontSize={14}>
                      Menus that are generated by open as bottom sheets at a
                      higher elevation than the bar.
                    </Typography>
                  </>
                }
              />
            </ListItemButton>
          </List>
        </Box>
      }
    >
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
      >
        <Avatar alt="Remy Sharp" src={item} />
      </StyledBadge>
    </HtmlTooltip>
  );
}

// Active Indicator styles
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
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

// custom tooltip
const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 350,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #d1c4e9",
  },
}));