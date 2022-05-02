import { IconButton } from "../buttons";
import { useCardContext } from "./cardContext";
import { ExpandIcon } from "ui/icons";
import { HTMLChakraProps } from "@chakra-ui/react";

export interface CardExpandButtonProps extends HTMLChakraProps<"button"> {}
export const CardExpandButton: React.FC = (props) => {
  const { isHover } = useCardContext()!;
  return isHover ? (
    <IconButton
      aria-label="expand the card"
      size="sm"
      icon={<ExpandIcon />}
      position="absolute"
      top="2.5"
      right="2.5"
      isRound={true}
      {...props}
    />
  ) : null;
};
