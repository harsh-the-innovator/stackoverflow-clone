import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
