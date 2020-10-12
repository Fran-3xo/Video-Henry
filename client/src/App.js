import React, {useEffect} from 'react';
import './App.css';
import {Route, Redirect, useHistory, } from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Admin from "./componentes/Admin/Admin";
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Login from "./componentes/Login/login";
import Home from "./componentes/Home/Home";
import Clases from "./componentes/Clase/Clases"
import {logIn} from "./store/actions/login";
import {useDispatch, useSelector} from "react-redux";
import ClaseDisplay from './componentes/Clase/ClaseDisplay';
import AboutUs from './componentes/AboutUs/Aboutus';
import Footer from "./componentes/Footer";
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
    dispatch(logIn()).then(() => history.push("/Home")) // eslint-disable-next-line
  },[])
  return(<></>)
}
function App() {
  const {user:{user}} = useSelector(store => store);
  useEffect(()=>{
    localStorage.setItem("user", !!user?JSON.stringify(user):JSON.stringify(""));
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
        <Route exact path="/Home">
            {!!user?<Home/>:<Redirect to="/"/>}
        </Route>
        <Route exact path="/categoria/:modulo">
           {!!user?<Clases/>:<Redirect to="/"/>}
        </Route>
        <Route path="/search/:query">
           {!!user?<Clases/>:<Redirect to="/"/>}
        </Route>
        <Route exact path="/video/:video_id">
           {!!user?<ClaseDisplay/>:<Redirect to="/"/>}
        </Route>
        <Route path="/About">
          <AboutUs/>
        </Route>
        <Route path="/">
          <Footer/>
        </Route>
      </ThemeProvider>
    </div>
  );
}

export default App;
