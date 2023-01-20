import styled from "styled-components";

const AppStyled = styled.div`
  margin: ${(props) => props.theme.globalSizes.desktopMargin};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
    margin: ${(props) => props.theme.globalSizes.mobileMargin};
  }
`;

export default AppStyled;
