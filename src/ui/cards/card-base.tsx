import React from "react";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";

export interface CardBaseProps extends HTMLChakraProps<"div"> {}
export const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <chakra.article
        ref={ref}
        __css={{
          width: "17rem",
          height: "max-content",
          py: "1.5",
          borderRadius: "md",
          backgroundColor: "white",
          border: "1px",
          borderColor: "gray.300",
          fontSize: "sm",
          position: "relative",
        }}
        {...rest}
      >
        {children}
      </chakra.article>
    );
  }
);
