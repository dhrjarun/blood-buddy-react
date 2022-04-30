import { chakra } from "@chakra-ui/react";
import { useCardContext } from "./cardContext";
import { Button } from "../buttons";

export interface CardMiddleProps {}

export const CardMiddle: React.FC<CardMiddleProps> = (props) => {
  const { quantity, location, timing } = useCardContext()!;

  return (
    <chakra.div
      __css={{
        px: "4",
        py: "6",
        color: "gray.600",
        bg: "gray.100",
      }}
      {...props}
    >
      <chakra.div
        __css={{
          display: "flex",
          justifyContent: "space-between",
          mb: "4",
        }}
      >
        <chakra.p>
          <chakra.span fontWeight="medium">{quantity.magnitude}</chakra.span>
          {quantity.unit}
        </chakra.p>
        <chakra.p>{timing}</chakra.p>
      </chakra.div>

      <chakra.p>
        {location}....{" "}
        <Button variant="link" size="sm" fontWeight="normal">
          map
        </Button>
      </chakra.p>
    </chakra.div>
  );
};
