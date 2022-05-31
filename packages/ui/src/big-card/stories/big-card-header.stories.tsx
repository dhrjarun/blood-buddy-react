import { ComponentMeta } from "@storybook/react";
import { BigCardHeader } from "../big-card-header";

export default {
  title: "ui/header/big-card-header",
  component: BigCardHeader,
} as ComponentMeta<typeof BigCardHeader>;

export const simple = () => {
  return <BigCardHeader title="Address" />;
};
