import React from "react";
import {
  Button as CButton,
  HTMLChakraProps,
  ButtonProps as CButtonProps,
  omitThemingProps,
  forwardRef,
  SystemProps,
} from "@chakra-ui/react";
import { IconProvider } from "ui/icons";
import { variant } from "utils";

export interface ButtonProps extends HTMLChakraProps<"button"> {
  colorScheme?: "primary" | "neutral" | "extreme" | "error";
  variant?: "solid" | "outline" | "light" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg";

  isRound?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  iconSpacing?: SystemProps["marginRight"];
}

const Button = forwardRef<ButtonProps, "button">((props, ref) => {
  const { children, iconSpacing, ...rest } = omitThemingProps(props);

  const getColor = variant<string, "red" | "black">(
    "primary",
    "neutral",
    "error"
  )(props.colorScheme!);
  const getSize = variant<CButtonProps["size"], SystemProps["m"]>(
    "xs",
    "sm",
    "md",
    "lg"
  )(props.size);

  return (
    <IconProvider value={{ boxSize: getSize("3", "3.5", "4", "5") }}>
      <CButton
        ref={ref}
        variant={props.variant}
        size={props.size}
        colorScheme={getColor("blue", "gray", "red")}
        iconSpacing={iconSpacing ?? getSize("1.5", "2", "2.5")}
        {...rest}
      >
        {children}
      </CButton>
    </IconProvider>
  );
});

Button.defaultProps = {
  colorScheme: "primary",
  variant: "solid",
  size: "md",
};

export default Button;
