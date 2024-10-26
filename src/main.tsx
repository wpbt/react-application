import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.tsx";

const element = document.getElementById("root") as HTMLElement;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(element).render(app);
