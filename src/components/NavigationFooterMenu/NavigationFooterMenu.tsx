import { routesFooter } from "../../lib/routes";
import NavigationFooterMenuStyled from "./NavigationFooterMenuStyled";
import { Link } from "react-router-dom";

const NavigationFooterMenu = (): JSX.Element => {
  return (
    <NavigationFooterMenuStyled>
      <ul className="navigation">
        {routesFooter.map((route) => (
          <li key={route.index} className="navigation__link">
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </NavigationFooterMenuStyled>
  );
};

export default NavigationFooterMenu;
