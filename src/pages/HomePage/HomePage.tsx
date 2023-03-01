import OurTeamList from "../../components/OurTeamList/OurTeamList";
import teamMembers from "../../lib/teamMembers";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => (
  <HomePageStyled>
    <div className="cover">
      <img className="cover__img" src="/assets/images/cabecera.jpg" alt="Cabecera" />
    </div>
    <section className="section-ourteam">
      <div className="section-head">
        <h2 className="section-head__title">Nuestro Equipo</h2>
      </div>
      <div className="section-container">
        <div className="section-container__box">
          <OurTeamList teamMembers={teamMembers} />
          <p className="section-container__description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis
            nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
            consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
            praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
        </div>
      </div>
    </section>
    <section className="section-projects">
      <div className="section-head">
        <h2 className="section-head__title">Proyectos</h2>
      </div>
      <div className="section-container" />
    </section>
    <section className="section-services">
      <div className="section-head">
        <h2 className="section-head__title">Servicios</h2>
      </div>
      <div className="section-container" />
    </section>
    <section className="section-proccess">
      <div className="section-head">
        <h2 className="section-head__title">Proceso</h2>
      </div>
      <div className="section-container" />
    </section>
    <section className="section-opinions">
      <div className="section-head">
        <h2 className="section-head__title">Opiniones</h2>
      </div>
      <div className="section-container" />
    </section>
  </HomePageStyled>
);

export default HomePage;
