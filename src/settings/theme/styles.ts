import { ChakraTheme, theme as chakraUiTheme } from "@chakra-ui/react";

const styles: ChakraTheme["styles"] = {
  ...chakraUiTheme.styles,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  global: (props) => ({
    body: {
      color: "gray.400",
      bg: "background.100",
      fontFamily: "Roboto Regular, sans-serif",
    },
  }),
};

export default styles;
