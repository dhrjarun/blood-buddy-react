import React from "react";
import { HTMLChakraProps, chakra } from "@chakra-ui/react";

export interface AuthRightProps extends HTMLChakraProps<"div"> {}
export const AuthRight: React.FC<AuthRightProps> = (props) => {
  return (
    <chakra.div
      minH="100vh"
      flexBasis="full"
      __css={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows:
          "[header]max-content [content]1fr [footer]max-content",
        alignItems: "center",
      }}
      {...props}
    ></chakra.div>
  );
};

export interface AuthRightHeaderProps extends HTMLChakraProps<"header"> {}

export const AuthRightHeader: React.FC<AuthRightHeaderProps> = (props) => {
  return (
    <chakra.header
      display={{ base: "flex", lg: "none" }}
      gridRow="header"
      borderBottom="1px"
      borderColor="gray.300"
      px="4"
      py="3"
      justifyContent="center"
      {...props}
    ></chakra.header>
  );
};

export interface AuthRightFooterProps extends HTMLChakraProps<"header"> {}

export const AuthRightFooter: React.FC<AuthRightFooterProps> = (props) => {
  return <chakra.footer gridRow="footer" {...props}></chakra.footer>;
};

export interface AuthRightContentProps extends HTMLChakraProps<"header"> {}

export const AuthRightContent: React.FC<AuthRightContentProps> = (props) => {
  return (
    <chakra.main gridRow="content" {...props}>
      content
    </chakra.main>
  );
};
