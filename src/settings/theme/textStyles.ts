import { ChakraTheme } from "@chakra-ui/react";

const baseTextStyle = {
  fontFamily: "bold",
};

const textStyles: ChakraTheme["textStyles"] = {
  h1: {
    ...baseTextStyle,
    fontSize: "xl",
    lineHeight: "32px",
  },
  h2: {
    ...baseTextStyle,
    fontSize: "lg",
    lineHeight: "22px",
  },
  h3: {
    ...baseTextStyle,
    fontSize: "md",
    lineHeight: "20px",
  },
  p: {
    fontSize: "sm",
    lineHeight: "18px",
    fontFamily: "regular",
  },
  small: {
    fontSize: "xs",
    lineHeight: "16px",
    fontFamily: "regular",
  },
};

export default textStyles;
