import LayoutStyled from "./LayoutStyled";

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] | string }): JSX.Element => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
