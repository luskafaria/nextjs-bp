import { theme as chakraUiTheme } from "@chakra-ui/theme";

import { ThemeSizes } from "./types";

const sizes: ThemeSizes = {
  ...chakraUiTheme.sizes,
  xxs: "10em",
};

export default sizes;
