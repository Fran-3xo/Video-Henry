import React, {useEffect} from 'react';
import './App.css';
import {Route, Redirect, useHistory} from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Admin from "./componentes/Admin/Admin";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from "./componentes/Login/login";
import {logIn} from "./store/actions/login";
import {useDispatch, useSelector} from "react-redux";
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
const GithubLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(()=>{
    dispatch(logIn())
      .then(() => history.push("/Home"))
      .catch(() => history.push("/"))
  },[])
  return(<></>)
}
function App() {
  const {user:{user}} = useSelector(store => store);
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user));
  },[user])
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
          {!!user && user.rol==="director"?<Admin/>:<Redirect to="/"/>}
        </Route>
        <Route exact path="/github_login">
          <GithubLogin/>
        </Route>
        <Route exact path="/failure_login">
          <h1>Usuario NO autarizado</h1>
        </Route>
        <Route exact path="/Home">
          <h1>Home</h1>  
        </Route>
      </ThemeProvider>
    </div>
  );
}

export default App;
