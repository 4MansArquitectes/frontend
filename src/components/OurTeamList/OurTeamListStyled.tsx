import styled from "styled-components";

const OurTeamListStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 112px;

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.desktopSmall}) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
    grid-template-columns: 1fr;
  }
`;

export default OurTeamListStyled;
