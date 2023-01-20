import type { TeamMembers } from "../../types/teamTypes";
import OurTeamCard from "../OurTeamCard/OurTeamCard";
import OurTeamListStyled from "./OurTeamListStyled";

interface OurTeamListProps {
  teamMembers: TeamMembers;
}

const OurTeamList = ({ teamMembers }: OurTeamListProps): JSX.Element => {
  return (
    <OurTeamListStyled teamCount={teamMembers.length}>
      {teamMembers.map((member) => {
        const findIndex = teamMembers.findIndex((memberIndex) => memberIndex.name === member.name);
        return <OurTeamCard key={findIndex} {...member} />;
      })}
    </OurTeamListStyled>
  );
};

export default OurTeamList;
