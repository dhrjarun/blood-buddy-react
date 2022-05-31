import { useChakra } from "@chakra-ui/system";
import { SystemStyleFunction, SystemStyleObject } from "@chakra-ui/theme-tools";

export function useStyles(
  style: SystemStyleFunction | SystemStyleObject,
  props: any = {}
): SystemStyleObject {
  const { theme, colorMode } = useChakra();
  const mergedProps = { theme, colorMode, ...props };

  if (typeof style === "function") {
    return style(mergedProps);
  }
  return style;
}

export function useMultiStyles(
  style: { [Key: string]: SystemStyleFunction | SystemStyleObject },
  props: any = {}
): { [Key in keyof typeof style]: SystemStyleObject } {
  const { theme, colorMode } = useChakra();
  const mergedProps = { theme, colorMode, ...props };

  let output = {} as { [Key in keyof typeof style]: SystemStyleObject };

  Object.keys(style).forEach((key) => {
    if (typeof style[key] === "function") {
      const fn = style[key] as SystemStyleFunction;
      output[key] = fn(mergedProps);
    } else {
      output[key] = style[key] as SystemStyleObject;
    }
  });

  return output;
}
