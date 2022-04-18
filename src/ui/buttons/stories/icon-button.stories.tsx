import { HStack } from "@chakra-ui/react";
import React from "react";
import { GearFillIcon } from "ui/icons";
import IconButton from "../icon-button";

export default {
  title: "ui/buttons/Icon Button",
  component: IconButton,
  args: { icon: <GearFillIcon /> },
};

export const simple = ({ icon }: { icon: React.ReactElement }) => (
  <HStack>
    <IconButton size="sm" aria-label="icon">
      {icon}
    </IconButton>
    <IconButton size="md" aria-label="icon" icon={icon} />
    <IconButton size="lg" aria-label="icon" icon={icon} />
    <IconButton size="lg" variant="ghost" aria-label="icon" icon={icon} />
  </HStack>
);
