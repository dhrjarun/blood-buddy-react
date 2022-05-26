import { createUseContext } from "./create-use-context";

export const [StylesProvider, useStylesCtx, StylesCtx] =
  createUseContext<object>({});
