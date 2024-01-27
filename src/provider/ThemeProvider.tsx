import { ThemeProvider as MuiThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: blue[300],
      },
    },
    typography: {
      fontFamily: "Public Sans",
      fontSize: 14,
    },
  });

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
