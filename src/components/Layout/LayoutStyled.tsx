import styled from "styled-components";

const LayoutStyled = styled.div`
  margin: ${(props) => props.theme.globalSizes.desktopMargin};
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.desktopSmall}) {
    margin: ${(props) => props.theme.globalSizes.mobileMargin};
  }
`;

export default LayoutStyled;
