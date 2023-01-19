import "styled-components";
import globalColors from "./styles/globalColors";
import globalFonts from "./styles/globalFonts";
import globalSizes from "./styles/globalSizes";

interface GlobalTheme {
  globalColors: typeof globalColors;
  globalFonts: typeof globalFonts;
  globalSizes: typeof globalSizes;
}

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {}
}
