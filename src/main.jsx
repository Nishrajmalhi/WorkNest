import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { shadesOfPurple } from "@clerk/themes";

// Import your publishable key
const PUBLISHABLE_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: shadesOfPurple,
      }}
      navigate={(to) => {
        const baseUrl = "https://work-nest-two.vercel.app";
        window.location.href = to.startsWith("/") ? `${baseUrl}${to}` : to;
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
