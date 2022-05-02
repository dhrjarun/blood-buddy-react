import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import foundation from "./foundation";
import components from "./components";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  config,
  ...foundation,
  components,
};

const theme = extendTheme(overrides);

export default theme;
