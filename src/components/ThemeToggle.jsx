import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <span className="text-yellow-300">☀️</span>
      ) : (
        <span className="text-gray-700">🌙</span>
      )}
    </button>
  );
};

export default ThemeToggle;