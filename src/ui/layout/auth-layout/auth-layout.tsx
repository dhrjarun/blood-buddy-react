import React from "react";
import { HTMLChakraProps, chakra } from "@chakra-ui/react";
import { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { variant } from "utils";
import { useStyle } from "style-tools";

export interface AuthLayoutProps extends HTMLChakraProps<"div"> {}
export const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const style = useStyle(LayoutStyle);

  return <chakra.div {...props} __css={style}></chakra.div>;
};

const LayoutStyle: SystemStyleFunction = (props) => {
  const mode = variant("light", "dark")(props.colorMode);

  return {
    display: "flex",
    backgroundColor: mode("white", "gray.800"),
    justifyContent: "stretch",
    alignItems: "stretch",
    gap: "6",
    borderColor: mode("gray.300", "gray.600"),
  };
};
