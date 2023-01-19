import styled from "styled-components";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 25px;

  .logo {
    width: 250px;
    @media only screen and (max-width: 360px) {
      width: 200px;
    }
  }
`;
export default HeaderStyled;
