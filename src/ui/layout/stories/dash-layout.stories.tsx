import { ComponentMeta } from "@storybook/react";
import {
  DashLayout,
  DashLayoutHeader,
  DashLayoutAside,
  DashLayoutMain,
} from "../dash-layout";

export default {
  component: DashLayout,
  title: "ui/layout/DashLayout",
} as ComponentMeta<typeof DashLayout>;

export const Dash = () => {
  return (
    <DashLayout>
      <DashLayoutHeader></DashLayoutHeader>
      <DashLayoutAside></DashLayoutAside>
      <DashLayoutMain></DashLayoutMain>
    </DashLayout>
  );
};
