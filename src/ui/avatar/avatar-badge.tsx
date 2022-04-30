import React from "react";
import {
  AvatarBadge as CAvatarBadge,
  AvatarBadgeProps as CAvatarBadgeProps,
  SystemStyleObject,
} from "@chakra-ui/react";
import { useStyles } from "@chakra-ui/system";
import { BloodGroup } from "types";
export interface AvatarBadgeProps extends CAvatarBadgeProps {
  bloodGroup: BloodGroup;
}

export const AvatarBadge = React.forwardRef<HTMLDivElement, AvatarBadgeProps>(
  (props, ref) => {
    const { bloodGroup, ...rest } = props;

    const styles = useStyles();

    const badgeStyles: SystemStyleObject = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      insetEnd: "0",
      bottom: "0",
      ...styles?.badge,
      right: "unset",
      border: "none",
      bg: "red.100",
      color: "red.700",
      fontSize: "0.5em",
      fontWeight: "bold",
      minW: "2.5em",
      px: "0.5em",
      py: "0.2em",
      transform: "translateY(35%)",
      borderRadius: "4px",
    };

    return (
      <CAvatarBadge ref={ref} sx={badgeStyles} {...rest}>
        {bloodGroup}
      </CAvatarBadge>
    );
  }
);
