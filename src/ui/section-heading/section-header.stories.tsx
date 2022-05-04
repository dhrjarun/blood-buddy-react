import { ComponentMeta } from "@storybook/react";
import { SectionHeader } from "./section-header";

export default {
  title: "ui/header/section-header",
  componet: SectionHeader,
} as ComponentMeta<typeof SectionHeader>;

export const Simple = () => {
  return <SectionHeader title="User Profile" />;
};
