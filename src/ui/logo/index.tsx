import React from "react";
import { Image, ImageProps, useColorMode } from "@chakra-ui/react";
import { logoBlack, logoWhite } from "images";

export interface LogoProps extends ImageProps {}

export const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  (props, ref) => {
    const { colorMode } = useColorMode();

    return (
      <Image
        ref={ref}
        {...props}
        src={colorMode === "light" ? logoBlack : logoWhite}
        px="3.5"
      />
    );
  }
);

export interface LogoLightProps extends ImageProps {}

export const LogoLight = React.forwardRef<HTMLImageElement, LogoLightProps>(
  (props, ref) => {
    return <Image ref={ref} {...props} src={logoWhite} px="3.5" />;
  }
);

export interface LogoDarkProps extends ImageProps {}

export const LogoDark = React.forwardRef<HTMLImageElement, LogoDarkProps>(
  (props, ref) => {
    return <Image ref={ref} {...props} src={logoBlack} px="3.5" />;
  }
);
