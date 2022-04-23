import Icon from "./icon";
import { IconProps } from "./icon";
import { IconType } from "react-icons";
import { BsCheck, BsGearFill, BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { AiFillBell } from "react-icons/ai";
import IconContext from "./contexts";

export default Icon;

export const IconProvider = IconContext.Provider;

export function createIcon(as: IconType) {
  return (props: Omit<IconProps, "as">) => {
    return <Icon as={as} {...props} />;
  };
}

export const CheckIcon = createIcon(BsCheck);
export const GearFillIcon = createIcon(BsGearFill);
export const EyeFillIcon = createIcon(BsEyeFill);
export const EyeSlashFillIcon = createIcon(BsEyeSlashFill);
export const BellFillIcon = createIcon(AiFillBell);
