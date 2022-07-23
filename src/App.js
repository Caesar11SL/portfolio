import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <NavBar />
    {/* <Routes>
    <Route path="/" exact component={ <Homepage /> } />
    <Route path="/aboutme" exact component={ <AboutMe /> } />
    <Route path="/projects" exact component={ <Projects /> } />
    </Routes> */}
    </>
  );
}

export default App;
