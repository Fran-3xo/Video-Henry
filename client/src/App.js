import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Admin from "./componentes/Admin/Admin";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from "./componentes/Login/login";
import axios from "axios";
import {useDispatch} from "react-redux";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(86 85 85 1)',
    },
    secondary: {
      main: 'rgb(0 0 0)',
    },
    terceary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00'
    }
  }
});
function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        <Route path="/">
          <NavBar/>
        </Route>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/Admin">
          <Admin/>
        </Route>
        <Route exact path="/github_login">
          {
            
          }
        </Route>
      </ThemeProvider>
    </div>
  );
}

export default App;
