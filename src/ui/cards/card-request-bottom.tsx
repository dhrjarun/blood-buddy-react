import { chakra } from "@chakra-ui/react";
import React from "react";
import { useCardContext } from "./cardContext";

export const CardRequestBottom: React.FC = () => {
  const { donor } = useCardContext()!;
  return (
    <chakra.p
      __css={{
        textAlign: "center",
        fontWeight: "medium",
        py: "4",
        color: "blue.600",
      }}
    >
      {donor ? donor : "finding Donor..."}
    </chakra.p>
  );
};
