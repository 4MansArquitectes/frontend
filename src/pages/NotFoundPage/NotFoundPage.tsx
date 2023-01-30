import NotFoundPageStyled from "./NotFoundPageStyled";
import { Link } from "react-router-dom";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <span className="code">404</span>
      <h2 className="title">Page not found</h2>
      <span className="text">Oops! The page you are looking for does not exist.</span>
      <Link to="/" className="link">
        Go Back
      </Link>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
