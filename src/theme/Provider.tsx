import { FC, useState } from "react";
import { ThemeContext, ThemeEnum } from "./context";

const defaultTheme =
  (localStorage.getItem("theme") as ThemeEnum) || ThemeEnum.LIGHT;

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeEnum>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
