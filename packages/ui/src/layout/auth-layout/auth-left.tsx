import React from "react";
import { HTMLChakraProps, chakra } from "@chakra-ui/react";
import { authCoverLg } from "images";

export interface AuthLeftProps extends HTMLChakraProps<"div"> {}
export const AuthLeft: React.FC<AuthLeftProps> = (props) => {
  return (
    <chakra.div
      flexBasis="full"
      backgroundImage={authCoverLg}
      display={{ base: "none", lg: "block" }}
      {...props}
    ></chakra.div>
  );
};

export interface AuthLeftHeaderProps extends HTMLChakraProps<"header"> {}

export const AuthLeftHeader: React.FC<AuthLeftHeaderProps> = (props) => {
  return <chakra.header px="4" py="3" {...props}></chakra.header>;
};
