import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme, currentTheme } = useTheme();

  const menuItems = ["home", "about", "experience", "projects", "certificates", "contact"];

  return (
    <nav
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.textPrimary,
        borderBottom: `1px solid ${currentTheme.border}`,
      }}
      className="fixed top-0 w-full z-50 shadow-sm"
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold cursor-pointer select-none"
          style={{
            color: currentTheme.accent,
          }}
        >
          Jagadish
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item)}
                style={{ color: currentTheme.textSecondary }}
                className="capitalize font-medium hover:text-orange-500 transition"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            style={{
              color: currentTheme.textSecondary,
            }}
            className="p-2 rounded-full hover:bg-gray-200/40 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-200/30"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: currentTheme.cardBg,
            borderLeft: `1px solid ${currentTheme.border}`,
          }}
          className="md:hidden fixed top-0 right-0 h-full w-2/3 max-w-xs shadow-xl rounded-l-3xl z-50 p-8 animate-slideIn"
        >

          <ul className="flex flex-col items-start space-y-6 mt-8 pl-4">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    scrollToSection(item);
                    setMenuOpen(false); // close after selecting
                  }}
                  style={{ color: currentTheme.textPrimary }}
                  className="capitalize text-lg font-medium hover:text-orange-500 transition"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
