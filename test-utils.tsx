import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import { darkTheme } from "./styles/stitches.config";

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider>
    attribute="class" defaultTheme="system" value=
    {{
      dark: darkTheme.className,
      light: "light",
    }}
    {children}
  </ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
