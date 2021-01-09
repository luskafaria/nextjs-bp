import { Theme as ChakraThemeProps } from "@chakra-ui/theme";

export type ColorHues = {
  "50": string;
  "100": string;
  "200": string;
  "300": string;
  "400": string;
  "500": string;
  "600": string;
  "700": string;
  "800": string;
  "900": string;
};

export type ThemeFonts = ChakraThemeProps["fonts"] & {
  light: string;
}

export type ThemeSizes = ChakraThemeProps["sizes"] & {
  xxs: string;
}

export type ThemeFontSizes = ChakraThemeProps["fontSizes"] & {
  xxs: string;
}

export type ThemeColors = ChakraThemeProps["colors"] & {
  primary: ColorHues;
  secondary: ColorHues;
  background: string;
  progress: string;
  status: {
    error: string;
    warning: string;
    success: string;
    info: string;
  };
}

export type ColorScheme = keyof ThemeColors;

export interface Theme extends ChakraThemeProps {
  fonts: ThemeFonts;
  colors: ThemeColors;
}

export type ThemeSizeKey = keyof ThemeSizes;
