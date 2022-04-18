import { extendTheme } from "@chakra-ui/react";
import foundation from "./foundation";

const overrides = {
  ...foundation,
};

const theme = extendTheme(overrides);

export default theme;
