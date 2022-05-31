import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export interface BigCardProps extends HTMLChakraProps<"article"> {}

export const BigCard = React.forwardRef<HTMLDivElement, BigCardProps>(
  (props, ref) => {
    const borderColor = useColorModeValue("gray.300", "gray.600");
    return (
      <chakra.article
        ref={ref}
        __css={{
          border: "1px",
          borderColor,
          px: "5",
          py: "4",
          borderRadius: "md",
        }}
        {...props}
      ></chakra.article>
    );
  }
);
