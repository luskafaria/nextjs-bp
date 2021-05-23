import { theme as chakraUiTheme, ChakraTheme } from "@chakra-ui/react";

const fonts: ChakraTheme["fonts"] = {
  ...chakraUiTheme.fonts,
  heading: "Roboto Bold, sans-serif",
  medium: "Roboto Medium, sans-serif",
  body: "Roboto Regular, sans-serif",
  light: "Roboto Light, sans-serif"
};

export default fonts;
