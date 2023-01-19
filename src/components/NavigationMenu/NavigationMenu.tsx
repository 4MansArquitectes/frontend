import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import NavigationMenuStyled from "./NavigationMenuStyled";

const NavigationMenu = (): JSX.Element => {
  return (
    <NavigationMenuStyled>
      <RxHamburgerMenu className="menu" />
      <ul className="navigation">
        <li className="navigation__link">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navigation__link">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className="navigation__link">
          <Link to="/proyectos">Proyectos</Link>
        </li>
        <li className="navigation__link">
          <Link to="/servicios">Servicios</Link>
        </li>
        <li className="navigation__link">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </NavigationMenuStyled>
  );
};

export default NavigationMenu;
