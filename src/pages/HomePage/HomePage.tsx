import OurTeamList from "../../components/OurTeamList/OurTeamList";
import teamMembers from "../../lib/teamMembers";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  return (
    <HomePageStyled>
      <section className="section-ourteam">
        <div className="section-head">
          <h2 className="section-head__title">Nuestro Equipo</h2>
        </div>
        <div className="section-container">
          <OurTeamList teamMembers={teamMembers} />
        </div>
      </section>
      <section className="section-projects">
        <div className="section-head">
          <h2 className="section-head__title">Proyectos</h2>
        </div>
        <div className="section-container"></div>
      </section>
      <section className="section-services">
        <div className="section-head">
          <h2 className="section-head__title">Servicios</h2>
        </div>
        <div className="section-container"></div>
      </section>
      <section className="section-proccess">
        <div className="section-head">
          <h2 className="section-head__title">Proceso</h2>
        </div>
        <div className="section-container"></div>
      </section>
      <section className="section-opinions">
        <div className="section-head">
          <h2 className="section-head__title">Opiniones</h2>
        </div>
        <div className="section-container"></div>
      </section>
    </HomePageStyled>
  );
};

export default HomePage;
