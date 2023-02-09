import { routesHeader } from "../../lib/routes";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavigationMenuStyled>
      <nav className="mobile">
        <button className="mobile-navigation__button" type="button" onClick={toggleMenu} aria-label="menu">
          <RxHamburgerMenu className="menu" />
        </button>
        <ul className={`mobile-navigation ${isOpen ? "show" : "hidden"}`}>
          {routesHeader.map((route) => (
            <li key={route.index} className="mobile-navigation__link">
              <Link to={route.path} onClick={toggleMenu}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="desktop">
        <ul className="desktop-navigation">
          {routesHeader.map((route) => (
            <li key={route.index} className="desktop-navigation__link">
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </NavigationMenuStyled>
  );
};

export default NavigationMenu;
