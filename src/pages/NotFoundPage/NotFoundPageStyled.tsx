import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 40px;

  .code {
    font-size: 7rem;

    @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
      font-size: 6rem;
    }
  }

  .title {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 1rem;

    @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
      font-size: 1rem;
    }
  }

  .text {
    font-size: 1.2rem;
    margin-bottom: 40px;

    @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
      font-size: 1rem;
    }
  }

  .link {
    padding: 10px 30px;
    border: 1px solid #323232;
  }
`;

export default NotFoundPageStyled;
