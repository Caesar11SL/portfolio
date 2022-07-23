import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";




const NavBar = () => {
    return(
    <div>nav-bar
      <Link to='/'>home</Link>
      <Link to='/aboutme'>about me</Link>
      <Link to='/projects'>Projects</Link>
    </div>
    )
}

export default NavBar;