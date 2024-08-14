import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
//import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Navebare from "./NaveBar/Navebare";
function App() {
  return (
    <Router>
      <Navebare />
      <Routes >
        <Route path="/" Component={Home}></Route>
        <Route path="/projects" Component={Project}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/contact" Component={Contact}></Route>
      </Routes >
    </Router>
  );
}

export default App;
