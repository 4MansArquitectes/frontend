import { InitialEntry } from "@remix-run/router";
import { render, RenderOptions } from "@testing-library/react";
import { PropsWithChildren } from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import GlobalStyled from "../styles/GlobalStyled";

interface ExtendedPropsWithChildren extends PropsWithChildren {
  initialEntries?: InitialEntry[];
}

interface ExtendedRenderOptions extends RenderOptions {
  initialEntries?: InitialEntry[];
}

const ExtendedRouter = ({
  children,
  initialEntries,
}: ExtendedPropsWithChildren): JSX.Element => {
  return initialEntries ? (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  ) : (
    <BrowserRouter>{children}</BrowserRouter>
  );
};

const renderWithProviders = (
  ui: React.ReactElement,
  { initialEntries, ...renderOptions }: ExtendedRenderOptions = {}
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return (
      <>
        <ExtendedRouter initialEntries={initialEntries}>
          <GlobalStyled />
          {children}
        </ExtendedRouter>
      </>
    );
  };
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
