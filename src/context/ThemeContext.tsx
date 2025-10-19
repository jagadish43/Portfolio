import  { createContext, useContext, useState, type ReactNode } from "react";
import { lightTheme, darkTheme } from "../theme";

type ThemeType = "light" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  currentTheme: typeof lightTheme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, toggleTheme }}>
      <div
        style={{
          backgroundColor: currentTheme.background,
          color: currentTheme.textPrimary,
          transition: "background-color 0.5s ease, color 0.5s ease",
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
