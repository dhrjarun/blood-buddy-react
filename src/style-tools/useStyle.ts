import { useChakra } from "@chakra-ui/react";
import { SystemStyleFunction, SystemStyleObject } from "@chakra-ui/theme-tools";

export function useStyle(
  style: SystemStyleFunction | SystemStyleObject,
  props: any = {}
) {
  const { theme, colorMode } = useChakra();
  const mergedProps = { theme, colorMode, ...props };

  if (typeof style === "function") {
    return style(mergedProps);
  }
  return style;
}
