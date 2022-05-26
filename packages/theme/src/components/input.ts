import { mode, PartsStyleFunction } from "@chakra-ui/theme-tools";
import { inputAnatomy as parts } from "@chakra-ui/anatomy";

const variantOutline: PartsStyleFunction<typeof parts> = (props) => {
  const { theme } = props;
  return {
    field: {
      _focus: {
        boxShadow: "none",
        borderColor: mode("blue.500", "blue.200")(theme),
      },
      _invalid: {
        boxShadow: "none",
        borderColor: mode("red.500", "red.200")(theme),
        _focus: {
          borderColor: mode("red.500", "red.200")(theme),
        },
      },
    },
  };
};

export default {
  variants: {
    outline: variantOutline,
  },
};
