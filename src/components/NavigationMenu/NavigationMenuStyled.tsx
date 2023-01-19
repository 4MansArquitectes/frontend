import styled from "styled-components";

const NavigationMenuStyled = styled.div`
  float: right;

  .menu {
    display: none;
    font-size: 2.5rem;
    padding-top: 15px;
  }
  .navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
    font-size: ${(props) => props.theme.globalFonts.fontSizeSmall};

    &__link {
      padding: 0 25px 0 25px;
      border-right: 1px solid ${(props) => props.theme.globalColors.textMainColor};

      :last-child {
        border-right: none;
        padding-right: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .menu {
      display: block;
    }

    .navigation {
      display: none;
    }
  }
`;
export default NavigationMenuStyled;
