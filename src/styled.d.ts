import "styled-components";
import globalColors from "./styles/globalColors";
import globalFonts from "./styles/globalFonts";
import globaSizes from "./styles/globaSizes";

interface GlobalTheme {
  globalColors: typeof globalColors;
  globalFonts: typeof globalFonts;
  globaSizes: typeof globaSizes;
}

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {}
}
