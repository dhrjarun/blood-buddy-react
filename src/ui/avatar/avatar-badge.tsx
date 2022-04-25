import {
  AvatarBadge as CAvatarBadge,
  forwardRef,
  HTMLChakraProps,
  useStyles,
  SystemStyleObject,
} from "@chakra-ui/react";

export interface AvatarBadgeProps extends HTMLChakraProps<"div"> {
  bloodGroup: "AB+" | "AB-" | "B+" | "B-" | "A+" | "A-" | "O+" | "O-";
}

export const AvatarBadge = forwardRef<AvatarBadgeProps, "div">((props, ref) => {
  const { bloodGroup, ...rest } = props;

  const styles = useStyles();

  const badgeStyles: SystemStyleObject = {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    insetEnd: "0",
    bottom: "0",
    ...styles.badge,
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
    <CAvatarBadge sx={badgeStyles} {...rest}>
      {bloodGroup}
    </CAvatarBadge>
  );
});
