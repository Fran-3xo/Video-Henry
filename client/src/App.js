import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import NavBar from "./componentes/NavBar/NavBar";
import Admin from "./componentes/Admin/Admin";
function App() {
  return (
    <div className="App">
      <Route path="/">
        <NavBar/>
      </Route>
      <Route exact path="/Admin">
        <Admin/>
      </Route>
    </div>
  );
}

export default App;
