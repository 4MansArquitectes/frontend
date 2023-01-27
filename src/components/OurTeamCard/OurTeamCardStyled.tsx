import styled from "styled-components";

const OurTeamCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;

  .team {
    &__image {
      width: 243px;
      height: 346px;
      object-fit: contain;
      margin-bottom: 10px;

      @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileLarge}) {
        width: 182px;
        height: 259px;
      }

      @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileMedium}) {
        width: 126px;
        height: 180px;
      }
    }

    &__name,
    &__tag {
      font-family: ${(props) => props.theme.globalFonts.secondaryFont};
    }

    &__name {
      font-size: ${(props) => props.theme.globalFonts.fontSizeSmall};
      font-weight: ${(props) => props.theme.globalFonts.secondaryFontBold};

      @media only screen and (max-width: ${(props) => props.theme.globalSizes.mobileMedium}) {
        font-size: 0.8rem;
      }
    }

    &__tag {
      color: ${(props) => props.theme.globalColors.textMainLightColor};
      font-size: ${(props) => props.theme.globalFonts.fontSizeSmall};
      font-weight: ${(props) => props.theme.globalFonts.secondaryFontRegular};
    }
  }
`;

export default OurTeamCardStyled;
