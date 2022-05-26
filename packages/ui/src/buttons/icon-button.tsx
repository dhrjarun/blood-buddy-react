import React from "react";
import {
  IconButton as CIconButton,
  HTMLChakraProps,
  omitThemingProps,
  forwardRef,
} from "@chakra-ui/react";
import { IconProvider } from "icons";
import { variant } from "common/utils";

export interface IconButtonProps extends HTMLChakraProps<"button"> {
  colorScheme?: "primary" | "neutral" | "extreme" | "error";
  variant?: "solid" | "outline" | "light" | "ghost" | "link";
  size?: "xs" | "sm" | "md" | "lg";

  icon?: React.ReactElement;

  "aria-label": string;

  isRound?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
}

const IconButton = forwardRef<IconButtonProps, "button">((props, ref) => {
  const { children, ...rest } = omitThemingProps(props);
  const getColorScheme = variant<
    IconButtonProps["colorScheme"],
    IconButtonProps["color"]
  >(
    "primary",
    "neutral",
    "error",
    "extreme"
  )(props.colorScheme);
  const size = variant("xs", "sm", "md", "lg")(props.size!);

  return (
    <IconProvider value={{ boxSize: size("3", "3.5", "4", "5") }}>
      <CIconButton
        ref={ref}
        variant={props.variant}
        size={props.size}
        colorScheme={getColorScheme("blue", "gray", "red")}
        {...rest}
      >
        {children}
      </CIconButton>
    </IconProvider>
  );
});

IconButton.defaultProps = {
  colorScheme: "primary",
  variant: "solid",
  size: "md",
};

export default IconButton;
