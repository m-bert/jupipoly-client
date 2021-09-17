import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createTheme } from '@mui/material';
import { purple, blue } from '@mui/material/colors';

import LoginForm from './components/LoginForm';

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: blue
  }
})

function App() {
  return (
    <LoginForm theme={theme}/>
  );
}

export default App;
