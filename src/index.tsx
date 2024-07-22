import { createRoot } from "react-dom/client";

import App from "./App";

import StoreProvider from "@components/StoreProvider/StoreProvider";

import "./index.scss";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root element not found");
}

const container = createRoot(root);

container.render(<StoreProvider><App /></StoreProvider>);