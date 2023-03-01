import { routesFooter } from "../../lib/routes";
import NavigationFooterMenuStyled from "./NavigationFooterMenuStyled";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const NavigationFooterMenu = (): JSX.Element => (
  <NavigationFooterMenuStyled>
    <ul className="navigation">
      {routesFooter.map((route) => (
        <li key={uuidv4()} className="navigation__link">
          <Link to={route.path}>{route.name}</Link>
        </li>
      ))}
    </ul>
  </NavigationFooterMenuStyled>
);

export default NavigationFooterMenu;
