import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { blue, deepPurple } from "@mui/material/colors";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: deepPurple[500],
      },
      secondary: {
        main: blue[500],
      },
    },
    typography: {
      fontFamily: "Public Sans",
      fontSize: 14,
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
