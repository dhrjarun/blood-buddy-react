import { ComponentMeta } from "@storybook/react";
import { VNav, VNavButton } from "../v-nav";
import { DashLayout, DashLayoutAside } from "layout";

export default {
  component: VNav,
  title: "ui/navigation/VNav",
} as ComponentMeta<typeof VNav>;

export const Simpe = () => {
  return (
    <DashLayout>
      <DashLayoutAside>
        <VNav currentKey="profile">
          <VNavButton navKey="profile">Profile</VNavButton>
          <VNavButton navKey="request">Request</VNavButton>
          <VNavButton navKey="donate">Donate</VNavButton>
          <VNavButton navKey="noti">Notification</VNavButton>
        </VNav>
      </DashLayoutAside>
    </DashLayout>
  );
};
