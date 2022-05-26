import { ComponentMeta } from "@storybook/react";
import { Logo, LogoLight } from "logo";
import {
  AuthLayout,
  AuthLeft,
  AuthLeftHeader,
  AuthRight,
  AuthRightContent,
  AuthRightFooter,
  AuthRightHeader,
} from "../auth-layout";

export default {
  component: AuthLayout,
  title: "ui/layout/authLayout",
} as ComponentMeta<typeof AuthLayout>;

export const Auth = () => {
  return (
    <AuthLayout>
      <AuthLeft>
        <AuthLeftHeader>
          <LogoLight />
        </AuthLeftHeader>
      </AuthLeft>
      <AuthRight>
        <AuthRightHeader>
          <Logo />
        </AuthRightHeader>
        <AuthRightContent>Content</AuthRightContent>
        <AuthRightFooter>Footer</AuthRightFooter>
      </AuthRight>
    </AuthLayout>
  );
};
