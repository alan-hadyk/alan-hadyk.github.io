import { ThemeProvider } from "styled-components";
import { render, RenderResult } from "@testing-library/react";
import React from "react";

import theme from "<styles>/theme";

export default function renderWithTheme(
  children: JSX.Element | JSX.Element[]
): RenderResult {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
