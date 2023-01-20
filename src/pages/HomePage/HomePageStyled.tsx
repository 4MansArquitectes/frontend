import styled from "styled-components";

const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 40px;

  section {
    width: 100%;
    height: 100%; // 900px
  }

  .section {
    &-head {
      &__title {
        border-bottom: 1px solid ${(props) => props.theme.globalColors.textMainColor};
        margin-bottom: 40px;
        text-align: left;
        font-family: ${(props) => props.theme.globalFonts.secondaryFont};
        font-weight: ${(props) => props.theme.globalFonts.secondaryFontRegular};
        font-size: ${(props) => props.theme.globalFonts.fontSizeExtraLarge};
      }
    }

    &-container {
      display: flex;
      justify-content: flex-end;
      flex-wrap: nowrap;
      flex-direction: row;

      @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
        justify-content: center;
      }
    }
  }
`;

export default HomePageStyled;
