import chakraUiTheme from "@chakra-ui/theme";

import { ThemeColors } from "./types";

const PRIMARY_COLOR = "#BADC58";
const PRIMARY_COLOR_LIGHT = "#BADC88";
const PRIMARY_COLOR_DISABLED = "#BADCCC";

const SECONDARY_COLOR = "#1D164D";
const SECONDARY_COLOR_LIGHT = "#1D16CC";
const SECONDARY_COLOR_DISABLED = "#888888";

const colors: ThemeColors = {
  ...chakraUiTheme.colors,
  black: "#000000",
  white: "#FFFFFF",
  background: "#FAFAFC",
  progress: "#8700F9",
  primary: {
    50: PRIMARY_COLOR_DISABLED,
    100: PRIMARY_COLOR_LIGHT,
    200: PRIMARY_COLOR,
    300: PRIMARY_COLOR,
    400: PRIMARY_COLOR,
    500: PRIMARY_COLOR,
    600: PRIMARY_COLOR,
    700: PRIMARY_COLOR,
    800: PRIMARY_COLOR,
    900: PRIMARY_COLOR,
  },
  secondary: {
    50: SECONDARY_COLOR_DISABLED,
    100: SECONDARY_COLOR_LIGHT,
    200: SECONDARY_COLOR,
    300: SECONDARY_COLOR,
    400: SECONDARY_COLOR,
    500: SECONDARY_COLOR,
    600: SECONDARY_COLOR,
    700: SECONDARY_COLOR,
    800: SECONDARY_COLOR,
    900: SECONDARY_COLOR,
  },
  gray: {
    ...chakraUiTheme.colors.gray,
    100: "#FAFAFC",
    200: "#BCBCBC",
    300: "#9E9BAF",
    400: "#4C4C4C",
  },
  status: {
    success: "#44d7b6",
    error: "#f14336",
    warning: "#f7b500",
    info: "#248EB4",
  },
};

export default colors;
