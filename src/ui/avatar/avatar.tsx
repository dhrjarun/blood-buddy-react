import {
  Avatar as CAvatar,
  AvatarProps as CAvatarProps,
  forwardRef,
} from "@chakra-ui/react";

export interface AvatarProps extends CAvatarProps {}

export const Avatar = forwardRef<AvatarProps, "span">((ref, props) => {
  return <CAvatar getInitials={getInitials} {...props} />;
});

function getInitials(name: string): string {
  console.log(name.charAt(0).toUpperCase(), "ok");
  return name.charAt(0).toUpperCase();
}
