import {
  HStack,
  Input,
  InputRightElement,
  InputGroup,
  chakra,
} from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { GearFillIcon } from "icons";
import { IconButton } from "buttons";

export default {
  title: "ui/form/Input",
  commponent: Input,
  args: {},
  decorators: [
    (Story) => {
      return (
        <chakra.div w="40rem">
          <Story />
        </chakra.div>
      );
    },
  ],
} as ComponentMeta<typeof Input>;

export const Normal = () => {
  return <Input />;
};

export const Error = () => {
  return <Input isInvalid={true} />;
};

export const Disabled = () => {
  return <Input isDisabled={true} />;
};

export const WithPlaceholder = ({
  placeholder,
  isDisabled,
}: {
  isDisabled: boolean;
  placeholder: string;
}) => {
  return <Input placeholder={placeholder} isDisabled={isDisabled} />;
};
WithPlaceholder.args = { placeholder: "Enter your name", isDisabled: false };

export const WithIconButton = () => {
  return (
    <HStack>
      <InputGroup>
        <Input></Input>
        <InputRightElement px="2">
          <IconButton
            aria-label="input button"
            size="xs"
            icon={<GearFillIcon />}
          />
        </InputRightElement>
      </InputGroup>
    </HStack>
  );
};
