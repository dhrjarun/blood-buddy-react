import React from "react";
import type { CardData } from "./types";
import { CardProvider } from "./cardContext";
import { CardTop } from "./card-top";
import { CardMiddle } from "./card-middle";
import { CardExpandButton } from "./card-expand-button";
import { CardRequestBottom } from "./card-request-bottom";
import { CardBase } from "./card-base";
import { useHover } from "hooks/use-hover";
import { HTMLChakraProps } from "@chakra-ui/react";

export interface CardRequestProps extends HTMLChakraProps<"div"> {
  request: CardData;
}

export const CardRequest = React.forwardRef<HTMLDivElement, CardRequestProps>(
  (props) => {
    const { request, ...rest } = props;
    const { ref, isHover } = useHover<HTMLDivElement>();

    return (
      <CardBase ref={ref} {...rest}>
        <CardProvider value={{ ...request, isHover }}>
          <CardTop />
          <CardMiddle />
          <CardRequestBottom />
          <CardExpandButton />
        </CardProvider>
      </CardBase>
    );
  }
);
