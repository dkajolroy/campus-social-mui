import { Widgets } from "@mui/icons-material";
import {
  Box,
  Divider,
  Fade,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import menu_list from "../../constants/menus";

export default function AppMenuDialog() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  //   const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick} size="large" color="inherit">
        <Widgets />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        id="app-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Box maxWidth={400}>
          <Typography mb={1} textAlign="center" fontWeight={500} fontSize={20}>
            App
          </Typography>
          <Divider />
          <Grid container>
            {menu_list.map((item, index) => {
              const Icon = item.icon;
              return (
                <Grid item xs={4} key={index}>
                  <Box>
                    <MenuItem
                      sx={{
                        flexDirection: "column",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        py: 2,
                      }}
                    >
                      <Icon color="primary" />
                      <Typography>{item.title}</Typography>
                    </MenuItem>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Menu>
    </>
  );
}
