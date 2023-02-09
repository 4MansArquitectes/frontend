import styled from "styled-components";

const NavigationFooterMenuStyled = styled.nav`
  .navigation {
    margin: 0;
    padding: 0;

    &__link {
      padding-bottom: 2px;

      :hover {
        color: ${(props) => props.theme.globalColors.textSecondaryLightColor};
      }
    }
  }
`;

export default NavigationFooterMenuStyled;
