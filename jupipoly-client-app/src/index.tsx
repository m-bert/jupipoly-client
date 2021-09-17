import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// other imports
import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:3300");
socket.on("connection", () => {});

ReactDOM.render(
  <React.StrictMode>
    <App io={socket} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
