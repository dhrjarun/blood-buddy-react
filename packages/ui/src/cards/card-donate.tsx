import React from "react";
import type { CardData } from "./types";
import { CardProvider } from "./cardContext";
import { CardTop } from "./card-top";
import { CardMiddle } from "./card-middle";
import { CardExpandButton } from "./card-expand-button";
import { CardDonateBottom } from "./card-donate-bottom";
import { CardBase } from "./card-base";
import { useHover } from "common/hooks/use-hover";
import { HTMLChakraProps } from "@chakra-ui/react";

export interface CardDonateProps extends HTMLChakraProps<"div"> {
  donate: CardData;
}

export const CardDonate = React.forwardRef<HTMLDivElement, CardDonateProps>(
  (props) => {
    const { donate, ...rest } = props;
    const { ref, isHover } = useHover<HTMLDivElement>();

    return (
      <CardBase ref={ref} {...rest}>
        <CardProvider value={{ ...donate, isHover }}>
          <CardTop />
          <CardMiddle />
          <CardDonateBottom />
          <CardExpandButton />
        </CardProvider>
      </CardBase>
    );
  }
);
