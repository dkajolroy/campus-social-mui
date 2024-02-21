import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import { icons } from "../constants/icons";

export default function DiscusNotSelect() {
  return (
    <Box
      justifyContent="center"
      minHeight="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Lottie className="w-52" animationData={icons.sendLottie} loop />
      <Typography>Not Chat Selected</Typography>
    </Box>
  );
}
