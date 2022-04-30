import { chakra } from "@chakra-ui/react";
import { useCardContext } from "./cardContext";
import { Avatar, AvatarBadge } from ".././avatar";

export interface CardTopProps {}

export const CardTop: React.FC<CardTopProps> = (props) => {
  const { name, bloodGroup, age, gender } = useCardContext()!;

  return (
    <chakra.div
      __css={{ display: "flex", alignItems: "center", px: "4", py: "6" }}
      {...props}
    >
      <Avatar size="md" mr="10" name={name}>
        <AvatarBadge bloodGroup={bloodGroup} />
      </Avatar>

      <chakra.div>
        <chakra.p fontSize="lg" color="gray.800" fontWeight="medium">
          {name}
        </chakra.p>
        <chakra.p color="gray.500">{`${age} ${gender}`}</chakra.p>
      </chakra.div>
    </chakra.div>
  );
};
