import React from "react";
import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { SystemStyleFunction, mode } from "@chakra-ui/theme-tools";
import { useStyle } from "style-tools";

export interface CardBaseProps extends HTMLChakraProps<"div"> {}
export const CardBase = React.forwardRef<HTMLDivElement, CardBaseProps>(
  (props, ref) => {
    const style = useStyle(cardBaseStyle, props);
    const { children, ...rest } = props;
    return (
      <chakra.article ref={ref} __css={style} {...rest}>
        {children}
      </chakra.article>
    );
  }
);

const cardBaseStyle: SystemStyleFunction = (props) => {
  return {
    width: "17rem",
    height: "max-content",
    py: "1.5",
    borderRadius: "md",
    backgroundColor: mode("white", "gray.900")(props),
    border: "1px",
    borderColor: mode("gray.300", "gray.700")(props),
    fontSize: "sm",
    position: "relative",
  };
};
