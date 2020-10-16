import React, {useEffect} from 'react';
import './App.css';
import {Route, Redirect} from "react-router-dom";
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
const PrivateRoute = (props) =>{
  const {user:{logged, user}} = useSelector(store => store);
  const dispatch = useDispatch();
  const status = typeof logged;
  useEffect(()=>{
    dispatch(logIn())
    // eslint-disable-next-line
  },[])
  if(status === "number") return (<h1 style={{marginTop:"10rem"}}>Logging...</h1>)
  if(status === "boolean"){
    if(props.Admin && user.rol==="director") return(props.children)
    if(!props.Admin) return(props.children)
    return(<Redirect to={props.redirect}/>)
  }
  if(status === "string") return (<Redirect to={props.redirect}/>)
  return (<Redirect to={props.redirect}/>)

}
function App() {
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
          <PrivateRoute Admin redirect="/">
            <Admin/>
          </PrivateRoute>
        </Route>
        <Route exact path="/Home">
            <PrivateRoute redirect="/">
              <Home/>
            </PrivateRoute>
        </Route>
        <Route exact path="/categoria/:modulo">
           <PrivateRoute redirect="/">
              <Clases/>
            </PrivateRoute>
        </Route>
        <Route path="/search/:query">
           <PrivateRoute redirect="/">
              <Clases/>
            </PrivateRoute>
        </Route>
        <Route exact path="/video/:video_id">
           <PrivateRoute redirect="/">
              <ClaseDisplay/>
            </PrivateRoute>
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
