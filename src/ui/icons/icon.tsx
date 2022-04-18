import React, { ComponentPropsWithoutRef, useContext } from "react";
import { Icon as CIcon, forwardRef } from "@chakra-ui/react";
import IconContext from "./contexts";

export interface IconProps extends ComponentPropsWithoutRef<typeof CIcon> {}

const Icon = forwardRef<IconProps, "svg">((props, ref) => {
  const value = useContext(IconContext);
  const { children, ...rest } = { ...value, ...props };

  return (
    <CIcon ref={ref ?? value.ref} {...rest}>
      {children}
    </CIcon>
  );
});

export default Icon;
