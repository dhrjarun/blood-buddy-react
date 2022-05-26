import React from "react";

export function createUseContext<T>(defaultValue: T) {
  const Context = React.createContext<T>(defaultValue);

  const useContext = function () {
    const value = React.useContext(Context);

    if (!value) throw new Error("No such context is wrapped");

    return value;
  };

  return [Context.Provider, useContext, Context];
}
