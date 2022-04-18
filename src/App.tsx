import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export const App = () => (
  <ChakraProvider theme={theme}>
    <p>APP</p>
  </ChakraProvider>
);
