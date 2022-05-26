import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { useStyle } from "style-tools";
import { SystemStyleFunction } from "@chakra-ui/theme-tools";

export interface DashLayoutAsideProps extends HTMLChakraProps<"aside"> {}

export const DashLayoutAside: React.FC<DashLayoutAsideProps> = (props) => {
  const style = useStyle(AsideStyle);

  return <chakra.aside __css={style} {...props}></chakra.aside>;
};

const AsideStyle: SystemStyleFunction = (props) => {
  const media = `@media screen and (max-width: ${props.theme.breakpoints.lg})`;
  return {
    gridArea: "aside",
    [media]: { display: "none" },
    borderRight: "1px",
    borderColor: "inherit",
    py: "6",
    px: "5",
  };
};
