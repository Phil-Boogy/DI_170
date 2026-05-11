import { useTheme } from "../context/ThemeContext";

export default function ToggleTheme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
    );
}