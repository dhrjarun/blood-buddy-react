import { HTMLChakraProps, chakra, forwardRef } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { Button } from "buttons";

export interface VNevContextProps {
  currentKey: string;
  setKey: React.Dispatch<React.SetStateAction<string>>;
}
export const VNavContext = React.createContext<VNevContextProps | null>(null);

export interface VNavProps extends HTMLChakraProps<"div"> {
  currentKey: VNevContextProps["currentKey"];
}

export const VNav = forwardRef<VNavProps, "div">((props, ref) => {
  const [currentKey, setKey] = useState<string>(props.currentKey);

  return (
    <VNavContext.Provider value={{ currentKey, setKey }}>
      <chakra.div
        ref={ref}
        sx={{ "& > * + *": { marginTop: "1.5" } }}
        {...props}
      ></chakra.div>
    </VNavContext.Provider>
  );
});

export interface VNavButtonProps extends HTMLChakraProps<"button"> {
  isActive?: boolean;
  navKey: string;
}
export const VNavButton: React.FC<VNavButtonProps> = (props) => {
  const { children, navKey, onClick, ...rest } = props;
  const { currentKey, setKey } = useContext(VNavContext)!;

  return (
    <Button
      variant="ghost"
      colorScheme="neutral"
      isFullWidth={true}
      isTranslateOnActive={false}
      justifyContent="flex-start"
      isActive={navKey === currentKey}
      onClick={(e) => {
        setKey(navKey);
        if (onClick) onClick(e);
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};
