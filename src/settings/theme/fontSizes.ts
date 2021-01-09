import { theme as chakraUiTheme } from "@chakra-ui/theme";

import { ThemeFontSizes } from "./types";

const fontSizes: ThemeFontSizes = {
  ...chakraUiTheme.fontSizes,
  xxs: "10pt",
  xs: "12pt",
  sm: "14pt",
  md: "16pt",
  lg: "18pt",
  xl: "20pt",
  "2xl": "24pt",
  "3xl": "26pt",
};

export default fontSizes;
