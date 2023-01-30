import type { TeamMembers } from "../../types/teamTypes";
import OurTeamCard from "../OurTeamCard/OurTeamCard";
import OurTeamListStyled from "./OurTeamListStyled";

interface OurTeamListProps {
  teamMembers: TeamMembers;
}

const OurTeamList = ({ teamMembers }: OurTeamListProps): JSX.Element => {
  return (
    <OurTeamListStyled teamCount={teamMembers.length}>
      {teamMembers.map((member) => (
        <OurTeamCard key={member.index} {...member} />
      ))}
    </OurTeamListStyled>
  );
};

export default OurTeamList;
