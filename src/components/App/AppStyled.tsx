import styled from "styled-components";

const AppStyled = styled.div`
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: ${(props) => props.theme.globalSizes.desktopMedium}) {
    max-width: 1920px;
  }
`;

export default AppStyled;
