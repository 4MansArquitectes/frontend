import GlobalStyled from "../styles/GlobalStyled";
import globalColors from "../styles/globalColors";
import globalFonts from "../styles/globalFonts";
import globalSizes from "../styles/globalSizes";
import { InitialEntry } from "@remix-run/router";
import { RenderOptions, render } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}

interface ExtendedRenderOptions extends RenderOptions {
  initialEntries?: InitialEntry[];
}

const ExtendedRouter = ({ children, initialEntries = [] }: ExtendedPropsWithChildren): JSX.Element => {
  return initialEntries.length > 0 ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

const renderWithProviders = (ui: React.ReactElement, { initialEntries, ...renderOptions }: ExtendedRenderOptions = {}) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <ThemeProvider
        theme={{
          globalColors,
          globalFonts,
          globalSizes,
        }}
      >
        <GlobalStyled />
        <ExtendedRouter initialEntries={initialEntries}>{children}</ExtendedRouter>
      </ThemeProvider>
    );
  };
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
