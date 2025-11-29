import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Initialize default theme on page load
const savedTheme = localStorage.getItem('colorScheme') || 'default';
document.documentElement.classList.add(`theme-${savedTheme}`);

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

