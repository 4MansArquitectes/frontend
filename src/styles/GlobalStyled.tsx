import { createGlobalStyle, css } from "styled-components";

const GlobalStyled = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: ${(props) => props.theme.globalFonts.secondaryFont};
    color: ${(props) => props.theme.globalColors.textMainColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.globalFonts.mainFont};
    font-weight: ${(props) => props.theme.globalFonts.mainFontRegular};
    color: ${(props) => props.theme.globalColors.textMainColor};
    text-align: center;
    margin: 0;
    cursor: default;
  }

  ul {
    list-style: none;
  }

  button,
  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    cursor: default;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span {
    cursor: default;
  }

  input {
    outline: none;
  }
`;

export default createGlobalStyle`${GlobalStyled}`;
