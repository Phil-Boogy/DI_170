import { useTheme } from './context/ThemeContext';
import ToggleTheme from './Components/ToggleTheme';
import './App.css';

function App() {
  const { theme } = useTheme();

  const styles = {
    background: theme === "dark" ? "#111" : "#fff",
    color: theme === "dark" ? "#fff" : "#111",
    minHeight: "100vh",
  };

  return (
    <>
      <div style={styles}>
        <p>I'm baby brainrot deschooling artisan aesthetic crudo before they sold out. Baffler tilde kettlebell, lomo seitan cred jonas mekas cold plunge af dream pop cold-pressed air plant. Iykyk woke umami mullet. Disrupt bicycle rights gatekeep, brainrot third place I think you should leave grailed dembow. No wave wabi-sabi bluesky flannel. Art party tousled jean shorts lynch yuzu poutine la jetée fernet hyperpop raclette monstera.</p>

        <ToggleTheme />
      </div>
    </>
  )
}

export default App
