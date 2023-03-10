import LayoutStyled from "./LayoutStyled";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] | string }): JSX.Element => (
  <LayoutStyled>{children}</LayoutStyled>
);

export default Layout;
