import { routesHeader } from "../../lib/routes";
import NavigationMenuStyled from "./NavigationMenuStyled";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const NavigationMenu = (): JSX.Element => {
  return (
    <NavigationMenuStyled>
      <RxHamburgerMenu className="menu" />
      <ul className="navigation">
        {routesHeader.map((route) => (
          <li key={route.index} className="navigation__link">
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </NavigationMenuStyled>
  );
};

export default NavigationMenu;
