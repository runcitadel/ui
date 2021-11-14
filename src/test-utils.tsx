import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "theme-ui";
import { theme } from "./theme";

const AllProviders = ({ children }: { children?: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AllProviders, ...options });

export { customRender as render };
