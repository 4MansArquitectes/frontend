import styled from "styled-components";

const OurTeamCardStyled = styled.article`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;

  .team {
    &__image {
      width: 389px;
      height: 554px;
      object-fit: contain;
    }

    &__name,
    &__tag {
      font-family: ${(props) => props.theme.globalFonts.secondaryFont};
    }

    &__name {
      font-size: ${(props) => props.theme.globalFonts.fontSizeLarge};
      font-weight: ${(props) => props.theme.globalFonts.secondaryFontBold};
    }

    &__tag {
      color: ${(props) => props.theme.globalColors.textMainLightColor};
      font-size: ${(props) => props.theme.globalFonts.fontSizeMedium};
      font-weight: ${(props) => props.theme.globalFonts.secondaryFontRegular};
    }
  }
`;

export default OurTeamCardStyled;
