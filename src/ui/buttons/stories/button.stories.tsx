import Button from "../button";
import { HStack } from "@chakra-ui/react";
import { ComponentMeta } from "@storybook/react";
import { GearFillIcon } from "ui/icons";

export default {
  title: "ui/buttons/Button",
  commponent: Button,
  args: { text: "Enter" },
} as ComponentMeta<typeof Button>;

export const solid = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button variant="solid" colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="solid" colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="solid" colorScheme="error" size="md">
        {text}
      </Button>
    </HStack>
  );
};

export const outline = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button variant="outline" colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="outline" colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="outline" colorScheme="error" size="md">
        {text}
      </Button>
    </HStack>
  );
};

export const light = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button variant="light" colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="light" colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="light" colorScheme="error" size="md">
        {text}
      </Button>
    </HStack>
  );
};

export const link = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button variant="link" colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="link" colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="link" colorScheme="error" size="md">
        {text}
      </Button>
    </HStack>
  );
};
export const ghost = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button variant="ghost" colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="ghost" colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="ghost" colorScheme="error" size="md">
        {text}
      </Button>
    </HStack>
  );
};

export const sizes = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button variant="solid" colorScheme="primary" size="sm">
        {text}
      </Button>
      <Button variant="solid" colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="solid" colorScheme="primary" size="lg">
        {text}
      </Button>
    </HStack>
  );
};

export const disabled = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button variant="solid" isDisabled={true} colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="solid" isDisabled={true} colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="solid" isDisabled={true} colorScheme="error" size="md">
        {text}
      </Button>
      <Button
        variant="outline"
        isDisabled={true}
        colorScheme="primary"
        size="md"
      >
        {text}
      </Button>
      <Button
        variant="outline"
        isDisabled={true}
        colorScheme="neutral"
        size="md"
      >
        {text}
      </Button>
      <Button variant="outline" isDisabled={true} colorScheme="error" size="md">
        {text}
      </Button>
      <Button variant="link" isDisabled={true} colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="link" isDisabled={true} colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="link" isDisabled={true} colorScheme="error" size="md">
        {text}
      </Button>
      <Button variant="ghost" isDisabled={true} colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="ghost" isDisabled={true} colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="ghost" isDisabled={true} colorScheme="error" size="md">
        {text}
      </Button>
      <Button variant="light" isDisabled={true} colorScheme="primary" size="md">
        {text}
      </Button>
      <Button variant="light" isDisabled={true} colorScheme="neutral" size="md">
        {text}
      </Button>
      <Button variant="light" isDisabled={true} colorScheme="error" size="md">
        {text}
      </Button>
    </HStack>
  );
};

export const withIcon = ({ text }: { text: string }) => {
  return (
    <HStack>
      <Button
        leftIcon={<GearFillIcon />}
        variant="solid"
        colorScheme="primary"
        size="sm"
      >
        {text}
      </Button>
      <Button
        leftIcon={<GearFillIcon />}
        variant="solid"
        colorScheme="primary"
        size="md"
      >
        {text}
      </Button>

      <Button
        leftIcon={<GearFillIcon />}
        variant="solid"
        colorScheme="primary"
        size="lg"
      >
        {text}
      </Button>
    </HStack>
  );
};
