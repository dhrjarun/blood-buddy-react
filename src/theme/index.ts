import { extendTheme } from "@chakra-ui/react";
import foundation from "./foundation";
import components from "./components";

const overrides = {
  ...foundation,
  components,
};

const theme = extendTheme(overrides);

export default theme;
