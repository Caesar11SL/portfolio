import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MouseParticles from 'react-mouse-particles'



function App() {
  return (
    <>
    <div className="text-gray-400 bg-gray-900 body-font">
    {/* <MouseParticles g={1} color="random" cull="col,image-wrapper"/> */}
    <Router>
    <NavBar />
      <Routes>
        <Route exact path="/"  element={<Homepage />} />
        <Route exact path="/aboutme"  element={<AboutMe />} />
        <Route exact path="/projects"  element={<Projects />} />
      </Routes>
    </Router>
    </div>
    <Footer />
    </>
  );
}

export default App;
