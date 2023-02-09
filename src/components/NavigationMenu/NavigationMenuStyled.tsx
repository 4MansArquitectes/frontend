import styled from "styled-components";

const NavigationMenuStyled = styled.nav`
  float: right;

  .desktop-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    font-size: ${(props) => props.theme.globalFonts.fontSizeSmall};

    &__link {
      padding: 0 25px 0 25px;
      border-right: 1px solid ${(props) => props.theme.globalColors.textMainColor};

      :hover {
        font-weight: 800;
      }

      :last-child {
        border-right: none;
        padding-right: 0;
      }
    }
  }

  .mobile-navigation {
    &__button {
      border: 0;
      background: transparent;
    }

    &__link {
      display: none;
    }
  }

  .menu {
    display: none;
    font-size: 3rem;
    padding-top: 15px;
  }

  @media only screen and (max-width: ${(props) => props.theme.globalSizes.desktopSmall}) {
    .desktop-navigation {
      display: none;
    }

    .mobile-navigation {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      position: absolute;
      left: 0;
      right: 0;
      padding: 0 30px;
      top: -50%;
      z-index: 1;

      &__link {
        background-color: ${(props) => props.theme.globalColors.mainLightColor};
        border-top: 1px solid ${(props) => props.theme.globalColors.mainColor};
        font-size: ${(props) => props.theme.globalFonts.fontSizeSmall};
        font-weight: ${(props) => props.theme.globalFonts.secondaryFontRegular};
        display: flex;
        justify-content: flex-end;
        padding: 15px;
        width: 100%;
      }
    }

    .menu {
      display: block;
    }

    .show {
      top: auto;
    }
  }
`;

export default NavigationMenuStyled;
