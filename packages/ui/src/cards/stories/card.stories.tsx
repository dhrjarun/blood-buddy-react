import { ComponentMeta } from "@storybook/react";
import { CardDonate } from "../card-donate";
import { CardRequest, CardRequestProps } from "../card-request";

export default {
  title: "ui/data-display/card",
  component: CardRequest,
} as ComponentMeta<typeof CardRequest>;

export const RequestCard = () => {
  return <CardRequest request={requestData} />;
};

export const DonateCard = () => {
  return <CardDonate donate={requestData} />;
};

const requestData: CardRequestProps["request"] = {
  name: "Dhiraj Arun",
  age: 18,
  gender: "Male",
  bloodGroup: "AB+",
  location: "Tetarbad Chandpura, 851204, Khagaria, Bihar, India",
  timing: "01/05/2003 | sun | 11:30 PM",
  donor: null,

  quantity: { magnitude: 200, unit: "ml" },
};
