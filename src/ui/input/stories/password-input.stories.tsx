import { HStack } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { PasswordInput } from "../password-input";

export default {
  title: "ui/form/PasswordInput",
  commponent: PasswordInput,
  args: {},
} as ComponentMeta<typeof PasswordInput>;

export const simple = () => {
  return (
    <HStack>
      <PasswordInput />
    </HStack>
  );
};
