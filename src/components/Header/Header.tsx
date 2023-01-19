import NavigationMenu from "../NavigationMenu/NavigationMenu";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <img
        className="logo"
        src="/assets/logo.svg"
        alt="Logotipo Quatre mans arquitectes"
      />
      <NavigationMenu />
    </HeaderStyled>
  );
};

export default Header;
