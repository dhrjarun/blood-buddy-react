import { chakra, FormLabel, Input } from "@chakra-ui/react";
import { FormHelperText, FormErrorMessage } from "../form-control";
import { ComponentMeta } from "@storybook/react";
import { Form } from "../form";
import { FormControl } from "../form-control";
import { PasswordInput } from "../../input";
import { FormButton } from "../FormButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default {
  title: "ui/form/Form",
  commponent: Form,
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

type FormValue = {
  name: string;
  email: string;
  password: string;
  passwordCnf: string;
};
const schema = yup.object().shape({
  name: yup.string().min(3).max(50).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  passwordCnf: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Your passwords do not match"),
});

export const Normal = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isValidating },
  } = useForm<FormValue>({
    mode: "onChange",
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });
  return (
    <Form
      errors={errors}
      isValid={isValid}
      isValidating={isValidating}
      noValidate
    >
      <FormControl mb="2" id="name">
        <FormLabel>Enter your name</FormLabel>
        <Input type="text" {...register("name")} placeholder="John Doe" />
        <FormErrorMessage>This is not a valid name</FormErrorMessage>
      </FormControl>

      <FormControl mb="2" id="email">
        <FormLabel>Email Address</FormLabel>
        <Input
          {...register("email")}
          type="email"
          placeholder="example@email.com"
        />
        <FormHelperText>We'll never share your email</FormHelperText>
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <FormControl mb="2" id="password">
        <FormLabel>Create your Password</FormLabel>
        <PasswordInput
          inputProps={{
            ...register("password"),
            placeholder: "Password must at least be 8 characters long",
          }}
        />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <FormControl mb="4" id="passwordCnf">
        <FormLabel>Confirm your password</FormLabel>
        <PasswordInput
          inputProps={{
            placeholder: "Re-enter your password",
            ...register("passwordCnf"),
          }}
        />
        <FormErrorMessage></FormErrorMessage>
      </FormControl>

      <FormButton ml="auto">Submit</FormButton>
    </Form>
  );
};
