import { routesHeader } from "../../lib/routes";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
            <li key={uuidv4()} className="mobile-navigation__link">
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
            <li key={uuidv4()} className="desktop-navigation__link">
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </NavigationMenuStyled>
  );
};

export default NavigationMenu;
