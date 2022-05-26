import React from "react";
import {
  Avatar as CAvatar,
  AvatarProps as CAvatarProps,
} from "@chakra-ui/react";

export interface AvatarProps extends CAvatarProps {}

export const Avatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (props, ref) => {
    return <CAvatar ref={ref} getInitials={getInitials} {...props} />;
  }
);

function getInitials(name: string): string {
  console.log(name.charAt(0).toUpperCase(), "ok");
  return name.charAt(0).toUpperCase();
}
