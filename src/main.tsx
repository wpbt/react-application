import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import App from "./components/App.tsx";
import "./css/app.css";

const queryClient = new QueryClient();
const element = document.getElementById("root") as HTMLElement;
const app = (
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
);

createRoot(element).render(app);
