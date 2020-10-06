import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Admin from "./componentes/Admin/Admin";
import Modulos from "./componentes/Modulos/modulos";
function App() {
  return (
    <div className="App">
      <Route path="/">
        <NavBar/>
      </Route>
      <Route path="/Admin">
        <Admin/>
      </Route>
      <Route exact path="/Home">
        {/* <Modulos/> */}
      </Route>
    </div>
  );
}

export default App;
