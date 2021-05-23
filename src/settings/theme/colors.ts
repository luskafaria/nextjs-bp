import { theme as chakraUiTheme, ChakraTheme } from "@chakra-ui/react";


const PRIMARY_COLOR = "#FD5720";
const PRIMARY_COLOR_LIGHT = "#FFD8CB";

const SECONDARY_COLOR = "#1678C2";
const SECONDARY_COLOR_LIGHT = "#E8F2F9";

const DARK_GRAY = "#4C4C4C";
const GRAY = "#98999F";
const LIGHT_GRAY = "#F0F0F0";
const LIGHTEST_GRAY = "#FAFAFA";

const WARNING = "#FDD010";
const ERROR = "#EF6969";
const SUCCESS = "#50C878";

const colors: ChakraTheme["colors"] = {
  ...chakraUiTheme.colors,
  black: "#333333",
  white: "#FFFFFF",
  primary: {
    50: PRIMARY_COLOR_LIGHT,
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
    50: SECONDARY_COLOR_LIGHT,
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
    100: LIGHTEST_GRAY,
    200: LIGHT_GRAY,
    300: GRAY,
    400: DARK_GRAY,
  },
  warning: {
    50: "#FFFBEB",
    100: "#FEF3C2",
    200: "#FEE886",
    300: "#FEE472",
    400: "#FDDC49",
    500: WARNING,
    600: "#DEB602",
    700: "#CAA502",
    800: "#B69502",
    900: "#A28402",
  },
  success: {
    50: "#E0F5E7",
    100: "#C1EBCF",
    200: "#A2E2B7",
    300: "#73D393",
    400: "#64CE87",
    500: SUCCESS,
    600: "#3BBA65",
    700: "#319B54",
    800: "#2C8C4C",
    900: "#226D3B",
  },
  error: {
    50: "#FBDADA",
    100: "#F7B5B5",
    200: "#F5A3A3",
    300: "#F39090",
    400: "#F17E7E",
    500: ERROR,
    600: "#EE5959",
    700: "#EC4646",
    800: "#DE3939",
    900: "#B92626",
  },
  background: {
    100: LIGHTEST_GRAY,
    200: LIGHT_GRAY,
    300: GRAY,
    400: DARK_GRAY,
  },
};

export default colors;
