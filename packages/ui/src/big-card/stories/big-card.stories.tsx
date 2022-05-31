import { ComponentMeta } from "@storybook/react";
import { BigCard } from "../big-card";
import { BigCardHeader } from "../big-card-header";
import { Container } from "layout";
import { InputRow } from "rows/input-row";
import { SelectRow } from "rows/select-row";
import { RadiosRow } from "rows/radios-row";

export default {
  title: "ui/layout/big-card",
  component: BigCard,
  decorators: [
    (Story) => {
      return (
        <Container maxW="container.md">
          <Story />
        </Container>
      );
    },
  ],
} as ComponentMeta<typeof BigCard>;

export const simple = () => {
  return <BigCard height="60"></BigCard>;
};

export const withHeader = () => {
  return (
    <BigCard minH="60">
      <BigCardHeader title="Personal Info" />
    </BigCard>
  );
};
