import {
  mode,
  SystemStyleFunction,
  SystemStyleObject,
  transparentize,
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleFunction = (props) => {
  return {
    _focus: { boxShadow: "none" },
    borderRadius: props.isRound ? "999" : "md",
    _focusVisible: { boxShadow: "outline" },
    _active: props.variant === "link" ? {} : { transform: "translateY(5%)" },
    _disabled: {
      boxShadow: "none",
      _active: {
        transform: "none",
      },
    },
  };
};

const variantLink: SystemStyleObject = {
  _focus: { boxShadow: "none" },
};

const variantSolid: SystemStyleFunction = (props) => {
  if (props.colorScheme !== "gray") return {};
  const bg = mode("gray.500", "gray.200")(props);
  return {
    color: mode("white", "gray.900")(props),
    bg,
    _hover: {
      bg: mode("gray.600", "gray.100")(props),
      _disabled: {
        bg,
      },
    },
    _active: {
      bg: mode("gray.700", "white")(props),
    },
  };
};

const variantOutline: SystemStyleFunction = (props) => {
  const { theme } = props;
  const { colorScheme: c } = props;
  if (c !== "gray") return {};
  return {
    borderColor: mode("gray.500", "gray.300")(props),
    color: mode(transparentize("gray.600", 0.8)(theme), "gray.300")(props),
  };
};

const variantLight: SystemStyleFunction = (props) => {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    const bg = mode(
      transparentize(`gray.200`, 0.5)(theme),
      `whiteAlpha.100`
    )(props);
    return {
      color: mode(
        transparentize("gray.600", 0.84)(theme),
        `whiteAlpha.900`
      )(props),
      bg,
      _hover: {
        bg: mode(`gray.200`, `whiteAlpha.200`)(props),
        _disabled: {
          bg,
        },
      },
      _active: { bg: mode(`gray.300`, `whiteAlpha.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  const bg = mode(`${c}.50`, darkHoverBg)(props);
  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg,
    _hover: {
      bg: mode(`${c}.100`, darkHoverBg)(props),
      _disabled: {
        bg,
      },
    },
    _active: {
      bg: mode(`${c}.200`, darkActiveBg)(props),
    },
  };
};

const ghostVariant: SystemStyleFunction = (props) => {
  const { theme } = props;
  if (props.colorScheme !== "gray") return {};
  return {
    color: mode(transparentize("gray.600", 0.8)(theme), "gray.300")(props),
  };
};

const Button = {
  baseStyle,
  variants: {
    solid: variantSolid,
    link: variantLink,
    outline: variantOutline,
    light: variantLight,
    ghost: ghostVariant,
  },
};

export default Button;
