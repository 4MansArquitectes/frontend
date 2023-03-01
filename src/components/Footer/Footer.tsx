import NavigationFooterMenu from "../NavigationFooterMenu/NavigationFooterMenu";
import FooterStyled from "./FooterStyled";

const Footer = (): JSX.Element => (
  <FooterStyled>
    <div className="section">
      <img className="logo" src="/assets/images/logo_ligth.svg" alt="Logotipo Quatre mans arquitectes" />
      <span className="address">
        Carrer de Brutau, 27, <br />
        <span>08203 Sabadell, Barcelona</span>
      </span>
      <span className="copyright">© {new Date().getFullYear()} Quatre Mans Arquitectes</span>
    </div>
    <div className="section">
      <NavigationFooterMenu />
      <div className="icon-group">
        <a className="icon__link" href="/">
          <img className="icon--instagram" src="/assets/images/instagram-social.svg" alt="Logotipo Instagram" />
        </a>
        <a className="icon__link" href="/">
          <img className="icon--instagram" src="/assets/images/linkedin-social.svg" alt="Logotipo Linkedin" />
        </a>
      </div>
    </div>
  </FooterStyled>
);

export default Footer;
