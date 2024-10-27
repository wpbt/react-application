import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./components/App.tsx";
import "./css/app.css";

const queryClient = new QueryClient();
const element = document.getElementById("root") as HTMLElement;
const app = (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);

createRoot(element).render(app);
