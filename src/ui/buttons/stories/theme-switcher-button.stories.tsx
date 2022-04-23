import { ComponentMeta } from "@storybook/react";
import { ThemeSwitcherButton } from "../theme-switcher-button";

export default {
  title: "ui/buttons/themeSwitcherButton",
  component: ThemeSwitcherButton,
} as ComponentMeta<typeof ThemeSwitcherButton>;

export const SM = () => {
  return <ThemeSwitcherButton size="sm" />;
};

export const MD = () => {
  return <ThemeSwitcherButton size="md" />;
};
