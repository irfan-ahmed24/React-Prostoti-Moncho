import React, { createContext } from "react";

export const DarkContext = createContext({
  isDark: false,
  handleIsDark: () => {},
});
