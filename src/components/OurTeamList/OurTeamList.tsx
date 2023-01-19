import teamMembers from "../../lib/teamMembers";
import OurTeamCard from "../OurTeamCard/OurTeamCard";
import OurTeamListStyled from "./OurTeamListStyled";

const OurTeamList = (): JSX.Element => {
  return (
    <OurTeamListStyled>
      {teamMembers.map((member, index) => (
        <OurTeamCard key={index} {...member} />
      ))}
    </OurTeamListStyled>
  );
};

export default OurTeamList;
