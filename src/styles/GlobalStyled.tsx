import { createGlobalStyle, css } from "styled-components";
import globalColors from "./globalColors";
import globaFonts from "./globalFonts";

const GlobalStyled = css`
  * {
    box-sizing: border-box;
    font-family: ${globaFonts.secondaryFont};
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: ${globalColors.textMainColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${globaFonts.mainFont};
    color: ${globalColors.textMainColor};
    font-weight: ${globaFonts.mainFontRegular};
    text-align: center;
    margin: 0;
    cursor: default;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button,
  a {
    cursor: pointer;
  }

  input {
    outline: none;
  }
`;

export default createGlobalStyle`${GlobalStyled}`;
