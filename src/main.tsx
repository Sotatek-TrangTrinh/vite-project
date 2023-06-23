import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import SignIn from "./routes/SignIn.tsx";
import Home from "./routes/Home.tsx";
import { ThemeProvider } from "@mui/material";
import theme from "./theme/index.ts";
import SocketsProvider from "./providers/SocketsProvider.tsx";
import { ReduxProviders } from "./providers/ReduxProvider.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProviders>
        <SocketsProvider>
          <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </SocketsProvider>
      </ReduxProviders>
    </QueryClientProvider>
  </React.StrictMode>
);
