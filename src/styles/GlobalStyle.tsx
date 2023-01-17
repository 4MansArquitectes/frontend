import { createGlobalStyle } from "styled-components";
import globalStyleColors from "./globalStyleColors";
import globaStyleFonts from "./globaStyleFonts";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  font-family: ${globaStyleFonts.secondaryFont};
  color: ${globalStyleColors.textMainColor};
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${globaStyleFonts.mainFont};
  color: ${globalStyleColors.textMainColor};
  font-weight: ${globaStyleFonts.mainFontRegular};
  text-align: center;
}

a {
  text-decoration: none;
}

ul {
    list-style: none;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
