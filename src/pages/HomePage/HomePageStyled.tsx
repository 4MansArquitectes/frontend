import styled from "styled-components";

interface HomePageStyledProps {
  divOurTeam: {
    width: number;
    height: number;
  };
}

const HomePageStyled = styled.main<HomePageStyledProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 40px;

  section {
    width: 100%;
    height: 100%;
  }

  .section {
    &-head {
      &__title {
        border-bottom: 1px solid ${(props) => props.theme.globalColors.textMainColor};
        margin-bottom: 40px;
        padding-bottom: 5px;
        text-align: left;
        font-family: ${(props) => props.theme.globalFonts.secondaryFont};
        font-weight: ${(props) => props.theme.globalFonts.secondaryFontRegular};
        font-size: ${(props) => props.theme.globalFonts.fontSizeExtraLarge};

        @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
          font-size: ${(props) => props.theme.globalFonts.fontSizeMediumLarge};
        }
      }
    }

    &-container {
      display: flex;
      justify-content: flex-end;

      &__box {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-items: flex-end;

        @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
          width: 100%;
          align-items: center;
        }
      }

      &__description {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        flex-wrap: wrap;
        width: ${(props) => (props.divOurTeam.width > 0 ? `${props.divOurTeam.width}px` : "100%")};

        @media only screen and (max-width: ${(props) => props.theme.globalSizes.desktopSmall}) {
          width: 100%;
        }

        & > p {
          text-align: start;
        }
      }
    }
  }
`;

export default HomePageStyled;
