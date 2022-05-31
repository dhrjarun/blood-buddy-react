import React from "react";
import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";

export interface BigCardHeaderProps extends HTMLChakraProps<"header"> {}

export const BigCardHeader = React.forwardRef<
  HTMLDivElement,
  BigCardHeaderProps
>((props, ref) => {
  const { title, ...rest } = props;
  const color = useColorModeValue("blue.600", "blue.200");
  const borderColor = useColorModeValue("gray.300", "gray.600");
  return (
    <chakra.header
      ref={ref}
      __css={{
        fontSize: "sm",
        fontWeight: "semibold",
        textTransform: "uppercase",
        color,
        borderBottom: "1px",
        borderColor,
        px: "4",
        pb: "2.5",
        pt: "1",
      }}
      {...rest}
    >
      <chakra.h3>{title}</chakra.h3>
    </chakra.header>
  );
});
