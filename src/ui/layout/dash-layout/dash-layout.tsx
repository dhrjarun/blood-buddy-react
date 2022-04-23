import React from "react";
import { HTMLChakraProps, chakra } from "@chakra-ui/react";
import { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { variant } from "utils";
import { useStyle } from "style-tools";

export interface DashLayoutProps extends HTMLChakraProps<"div"> {}

export const DashLayout: React.FC<DashLayoutProps> = (props) => {
  const style = useStyle(LayoutStyle);

  return <chakra.div {...props} __css={style}></chakra.div>;
};

const LayoutStyle: SystemStyleFunction = (props) => {
  const mode = variant("light", "dark")(props.colorMode);

  return {
    display: "grid",
    backgroundColor: mode("gray.50", "gray.800"),
    gridTemplateColumns: "minmax(15rem, 20rem) minmax(56rem, 1fr)",
    gridTemplateRows: "max-content 1fr",
    gridTemplateAreas: {
      base: `"header header" "main main"`,
      lg: `"aside header" "aside main"`,
    },
    justifyItems: "stretch",
    alignItems: "stretch",
    width: "100vw",
    height: "100vh",
    maxWidth: "100vw",
    maxHeight: "100vh",
    borderColor: mode("gray.300", "gray.600"),
  };
};
