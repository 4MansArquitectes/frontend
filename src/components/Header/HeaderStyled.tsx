import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .logo {
    width: 250px;

    @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileSmall}) {
      width: 200px;
    }
  }
`;
export default HeaderStyled;
