import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// theme //
import { createTheme } from "@mui/material";
import { purple, blue } from "@mui/material/colors";

// components //
import LoginForm from "./components/LoginForm";
import WaitingRoom from "./components/WaitingRoom/WaitingRoom";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: blue,
  },
});

function App(props: any) {
  return (
    <>
      <LoginForm theme={theme} io={props.io} />
      <WaitingRoom />
    </>
  )
}

export default App;
