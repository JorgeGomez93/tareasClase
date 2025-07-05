import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./components/TarjetaContacto.css";
import "./components/ListaContactos.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
