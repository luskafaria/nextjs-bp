import { theme as chakraUITheme } from "@chakra-ui/theme";

import fontSizes from "./fontSizes";
import { Theme } from "./types";
import colors from "./colors";
import fonts from "./fonts";
import sizes from "./sizes";

const theme: Theme = {
  ...chakraUITheme,
  fontSizes,
  colors,
  fonts,
  sizes,
};

export default theme;
