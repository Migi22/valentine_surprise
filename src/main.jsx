import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// favicon
const link = document.createElement("link");
link.rel = "icon";
link.href = "/heart.ico";
document.head.appendChild(link);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
