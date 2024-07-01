import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // Elimina el antiguo tag de link si existe
    const existingLink = document.getElementById("sweetalert2-theme");
    if (existingLink) {
      document.head.removeChild(existingLink);
    }

    // Crea un nuevo tag de link sólo si el tema es oscuro
    if (theme === "dark") {
      const link = document.createElement("link");
      link.id = "sweetalert2-theme";
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css";

      // Agrega el nuevo tag de link al head
      document.head.appendChild(link);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
