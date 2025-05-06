import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { VesmirnaStanice } from "./components/VesmirnaStanice.jsx";
import { Quote } from "./citaty_api/Quote.jsx";
import { BetterApi } from "./components/BetterApi.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/vesmirna-stanice", element: <VesmirnaStanice /> },
  { path: "/citaty", element: <Quote /> },
  { path: "/better-api", element: <BetterApi /> }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
