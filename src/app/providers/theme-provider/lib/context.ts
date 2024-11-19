import { createContext } from "react";

export enum ThemeEnum {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContext {
  theme?: ThemeEnum;
  setTheme?: (theme: ThemeEnum) => void;
}

export const ThemeContext = createContext<ThemeContext>({});
