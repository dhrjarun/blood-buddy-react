import {
  chakra,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FormHelperText } from "../form-control";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "ui/form/FormControl",
  commponent: FormControl,
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
} as ComponentMeta<typeof FormControl>;

export const Normal = ({
  placeholder,
  isInvalid,
}: {
  placeholder: string;
  isInvalid: boolean;
}) => {
  return (
    <FormControl id="userName" isInvalid={isInvalid}>
      <FormLabel>Enter your name</FormLabel>
      <Input placeholder={placeholder} />
      <FormHelperText>
        You will not share your data with anybody.
      </FormHelperText>
      <FormErrorMessage>This is not a valid name</FormErrorMessage>
    </FormControl>
  );
};
Normal.args = {
  isInvalid: false,
  placeholder: "Name",
};
