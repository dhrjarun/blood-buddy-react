import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export interface SectionHeaderProps extends HTMLChakraProps<"header"> {
  title: string;
}

export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  SectionHeaderProps
>((props, ref) => {
  const { title, ...rest } = props;
  const borderColor = useColorModeValue("gray.300", "gray.600");
  return (
    <chakra.header
      __css={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px",
        borderColor,
        py: "4",
        fontSize: "lg",
        fontWeight: "medium",
        letterSpacing: "wide",
      }}
      ref={ref}
      {...rest}
    >
      <chakra.h2>{title}</chakra.h2>
    </chakra.header>
  );
});
