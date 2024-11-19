import { useContext } from "react";
import { ThemeContext, ThemeEnum } from "./context";

interface UseThemeResult {
  theme: ThemeEnum;
  toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme =
      theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return { theme: theme || ThemeEnum.LIGHT, toggleTheme };
};
