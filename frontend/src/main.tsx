import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { StyledEngineProvider } from "@mui/joy/styles";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <StyledEngineProvider injectFirst>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </StyledEngineProvider>
);
