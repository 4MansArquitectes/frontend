import styled from "styled-components";

const FooterStyled = styled.footer`
  width: 100%;
  height: 170px;
  color: ${(props) => props.theme.globalColors.textMainLightColor};
  background-color: ${(props) => props.theme.globalColors.textMainColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 60px;

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileMedium}) {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileMedium}) {
    flex-direction: column;
  }

  .section {
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileMedium}) {
      width: 100%;
      height: 100%;
    }
  }

  .logo {
    width: 130px;
    height: 100%;
  }

  .icon__link {
    padding-right: 20px;

    & > img {
      width: 27px;
      height: 100%;
    }
  }
`;

export default FooterStyled;
