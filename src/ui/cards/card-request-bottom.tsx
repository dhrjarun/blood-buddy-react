import { chakra, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useCardContext } from "./cardContext";

export const CardRequestBottom: React.FC = () => {
  const color = useColorModeValue("blue.600", "blue.200");
  const { donor } = useCardContext()!;
  return (
    <chakra.p
      __css={{
        textAlign: "center",
        fontWeight: "medium",
        py: "4",
        color,
      }}
    >
      {donor ? donor : "finding Donor..."}
    </chakra.p>
  );
};
