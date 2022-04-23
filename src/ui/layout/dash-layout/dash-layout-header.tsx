import { HTMLChakraProps, chakra } from "@chakra-ui/react";
import { useStyle } from "style-tools";
import { SystemStyleFunction } from "@chakra-ui/theme-tools";

export interface DashLayoutHeaderProps extends HTMLChakraProps<"header"> {}

export const DashLayoutHeader: React.FC<DashLayoutHeaderProps> = (props) => {
  const style = useStyle(HeaderStyle);
  return <chakra.header __css={style} {...props}></chakra.header>;
};

const HeaderStyle: SystemStyleFunction = (props) => {
  return {
    gridArea: "header",
    minH: "40px",
    borderBottom: "1px",
    borderColor: "inherit",
    py: "3",
    px: "2",
    display: "flex",
  };
};
