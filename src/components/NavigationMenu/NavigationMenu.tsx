import { Link } from "react-router-dom";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { RxHamburgerMenu } from "react-icons/rx";

const NavigationMenu = () => {
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
