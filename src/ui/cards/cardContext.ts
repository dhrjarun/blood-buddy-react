import { CardData } from "./types";
import React, { useContext } from "react";

export type CardContextProps = {
  isHover: boolean;
} & CardData;

const Card = React.createContext<CardContextProps | null>(null);
export const CardProvider = Card.Provider;
export const useCardContext = () => {
  return useContext(Card);
};
