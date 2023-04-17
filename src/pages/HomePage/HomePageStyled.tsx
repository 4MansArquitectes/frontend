import styled from "styled-components";

const HomePageStyled = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 40px;

  .underline {
    text-decoration: underline;
  }

  .cover {
    width: 100%;
    height: 250px;
    overflow: hidden;
    margin: 10px;
    position: relative;

    &__img {
      position: absolute;
      width: inherit;
      height: inherit;
      object-fit: cover;
    }
  }

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
        align-items: center;

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
        width: 100%;

        & > p {
          text-align: start;
        }
      }

      &__link {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;

        & > span {
          cursor: pointer;
          font-weight: 600;
        }

        & > .icon {
          height: 13px;
        }
      }
    }

    &-projects > .section-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export default HomePageStyled;
