import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Socket } from "socket.io-client";

// theme //
import theme from './system/Theme'

// components //
import LoginForm from "./components/LoginForm";
import WaitingRoom from "./components/WaitingRoom/WaitingRoom";
import { ThemeProvider } from "@mui/system";

interface propsType {
  io: Socket
}

function App(props: propsType) {

  const [loginFormDisplayStatus, loginFormDisplay] = useState(true);
  const [waitingRoomDisplayStatus, waitingRoomDisplay] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <LoginForm io={props.io} displayStatus={loginFormDisplayStatus} handleComponentDisplay={loginFormDisplay} />
      <WaitingRoom io={props.io} displayStatus={waitingRoomDisplayStatus} handleComponentDisplay={loginFormDisplay} />
    </ThemeProvider>
  )
}

export default App;
