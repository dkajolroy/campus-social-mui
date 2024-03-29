// Supports weights 100-900
import "@fontsource/public-sans/200.css";
import "@fontsource/public-sans/300.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import ReduxProvider from "./provider/ReduxProvider.tsx";
import SocketProvider from "./provider/SocketProvider.tsx";
import ThemeProvider from "./provider/ThemeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <ReduxProvider>
        <SocketProvider>
          <App />
        </SocketProvider>
      </ReduxProvider>
    </ThemeProvider>
  </BrowserRouter>
);
