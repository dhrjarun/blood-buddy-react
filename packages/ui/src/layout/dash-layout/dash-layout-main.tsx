import { HTMLChakraProps, chakra } from "@chakra-ui/react";
import { SystemStyleObject } from "@chakra-ui/theme-tools";

export interface DashLayoutMainprops extends HTMLChakraProps<"main"> {}

export const DashLayoutMain: React.FC<DashLayoutMainprops> = (props) => {
  return <chakra.main __css={MainStyle} {...props}></chakra.main>;
};

const MainStyle: SystemStyleObject = {
  gridArea: "main",
};
