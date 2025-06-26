"use client";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Providers;

// // <Provider> this provider is redux provider
// <ThemeProvider theme={theme}>{children}</ThemeProvider>;
// // </Provider>
