import { createContext } from "react";

export const DarkContext = createContext({
  theme: "light",
  handleTheme: () => {},
});
