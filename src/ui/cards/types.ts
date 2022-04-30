import { Gender, BloodGroup } from "types";

export type CardData = {
  name: string;
  age: number;
  gender: Gender;
  bloodGroup: BloodGroup;
  location: string;
  quantity: {
    magnitude: number;
    unit: "ml";
  };
  timing: string;
  donor?: null | string;
};
