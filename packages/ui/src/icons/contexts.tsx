import React from "react";
import { IconProps } from "./icon";

interface Value extends IconProps {
  ref?: React.LegacyRef<SVGSVGElement> | undefined;
}

const IconContext = React.createContext<Value>({});

export default IconContext;
