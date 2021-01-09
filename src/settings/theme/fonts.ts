import { theme as chakraUiTheme } from "@chakra-ui/theme";

import { ThemeFonts } from "./types";

const fonts: ThemeFonts = {
  ...chakraUiTheme.fonts,
  heading: "Montserrat Bold, sans-serif",
  body: "Muli Regular, sans-serif",
  light: "LibreFranklin Light, sans-serif",
};

export default fonts;
