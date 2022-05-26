import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { MoonIcon, SunIcon } from "icons";
import IconButton, { IconButtonProps } from "../icon-button";

export interface ThemeSwitcherButtonProps
  extends Omit<IconButtonProps, "icon" | "aria-label"> {
  "aria-label"?: string;
}

export const ThemeSwitcherButton = React.forwardRef<
  HTMLButtonElement,
  ThemeSwitcherButtonProps
>((props, ref) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      ref={ref}
      variant="light"
      colorScheme="neutral"
      aria-label="theme switcher button"
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      onClick={toggleColorMode}
      {...props}
    />
  );
});
