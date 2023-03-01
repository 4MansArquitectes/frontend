import type { TeamMembers } from "../../types/teamTypes";
import OurTeamCard from "../OurTeamCard/OurTeamCard";
import OurTeamListStyled from "./OurTeamListStyled";
import { v4 as uuidv4 } from "uuid";

interface OurTeamListProps {
  teamMembers: TeamMembers;
}

const OurTeamList = ({ teamMembers }: OurTeamListProps): JSX.Element => (
  <OurTeamListStyled teamCount={teamMembers.length}>
    {teamMembers.map((member) => (
      <OurTeamCard key={uuidv4()} {...member} />
    ))}
  </OurTeamListStyled>
);

export default OurTeamList;
