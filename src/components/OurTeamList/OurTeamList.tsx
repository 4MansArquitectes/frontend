import type { TeamMembers } from "../../types/teamTypes";
import OurTeamCard from "../OurTeamCard/OurTeamCard";
import OurTeamListStyled from "./OurTeamListStyled";

interface OurTeamListProps {
  ref?: React.RefObject<HTMLDivElement>;
  teamMembers: TeamMembers;
}

const OurTeamList = ({ ref, teamMembers }: OurTeamListProps): JSX.Element => {
  return (
    <OurTeamListStyled ref={ref} teamCount={teamMembers.length}>
      {teamMembers.map((member) => (
        <OurTeamCard key={member.index} {...member} />
      ))}
    </OurTeamListStyled>
  );
};

export default OurTeamList;
