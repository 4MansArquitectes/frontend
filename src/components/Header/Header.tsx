import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => (
  <HeaderStyled>
    <img className="logo" src="/assets/images/logo.svg" alt="Logotipo Quatre mans arquitectes" />
    <NavigationMenu />
  </HeaderStyled>
);

export default Header;
