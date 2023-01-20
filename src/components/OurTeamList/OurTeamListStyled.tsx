import styled from "styled-components";

interface OurTeamListStyledProps {
  teamCount: number;
}

const OurTeamListStyled = styled.div<OurTeamListStyledProps>`
  display: grid;
  grid-template-columns: 1fr 1fr ${(props) => props.teamCount >= 3 && "1fr"};
  grid-gap: 70px;

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.desktopSmall}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
    grid-template-columns: 1fr;
  }
`;

export default OurTeamListStyled;
