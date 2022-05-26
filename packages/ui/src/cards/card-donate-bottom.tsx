import { chakra } from "@chakra-ui/react";
import { ButtonGroup, Button } from "../buttons";

export const CardDonateBottom: React.FC = () => {
  return (
    <chakra.div __css={{ p: "4", textAlign: "center" }}>
      <ButtonGroup isAttached={true} size="sm">
        <Button
          size="sm"
          variant="light"
          colorScheme="neutral"
          isTranslateOnActive={false}
        >
          Reject
        </Button>
        <Button
          size="sm"
          variant="solid"
          colorScheme="primary"
          isTranslateOnActive={false}
        >
          Accept
        </Button>
      </ButtonGroup>
    </chakra.div>
  );
};
