import { chakra } from "@chakra-ui/react";
import { useCardContext } from "./cardContext";
import { Button } from "../buttons";
import {
  mode,
  SystemStyleFunction,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";
import { useMultiStyle } from "style-tools";

export interface CardMiddleProps {}

export const CardMiddle: React.FC<CardMiddleProps> = (props) => {
  const { quantity, location, timing } = useCardContext()!;

  const style = useMultiStyle(CardMiddleStyle, props);

  return (
    <chakra.div __css={style.container} {...props}>
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

const CardMiddleStyle: {
  container: SystemStyleObject | SystemStyleFunction;
} = {
  container: (props) => {
    return {
      color: mode("gray.600", "gray.500")(props),
      bg: mode("gray.100", "gray.800")(props),
      px: "4",
      py: "6",
    };
  },
};
