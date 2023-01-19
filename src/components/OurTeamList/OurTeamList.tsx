import teamMembers from "../../lib/teamMembers";
import OurTeamCard from "../OurTeamCard/OurTeamCard";
import OurTeamListStyled from "./OurTeamListStyled";

const OurTeamList = (): JSX.Element => {
  return (
    <OurTeamListStyled>
      {teamMembers.map((member) => {
        const findIndex = teamMembers.findIndex((memberIndex) => memberIndex.name === member.name);
        return <OurTeamCard key={findIndex} {...member} />;
      })}
    </OurTeamListStyled>
  );
};

export default OurTeamList;
