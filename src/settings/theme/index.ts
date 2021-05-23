import textStyles from "./textStyles";
import fontSizes from "./fontSizes";
import colors from "./colors";
import styles from "./styles";
import fonts from "./fonts";

import merge from "deepmerge"
import { theme as baseTheme } from "@chakra-ui/theme";

const theme = merge(
  baseTheme,
  {
    textStyles,
    fontSizes,
    colors,
    styles,
    fonts,
  });

export default theme;
