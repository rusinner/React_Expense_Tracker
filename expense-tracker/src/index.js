import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SpeechProvider appId="0272ffcc-803e-449f-8b0c-d74f80eb8751" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>
);
