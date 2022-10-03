import React from 'react';
import { Link } from "react-router-dom";
import Pdf from  '../images/Resume.pdf'
import logo from '../images/logo.png'

import '../App.css'



const NavBar = () => {
    return(
      <>
    {/* <div className='nav-container'>
      CSL
      <div className='nav-links'>
        <Link className='link1' to='/'>home</Link>
        <Link className='link2' to='/aboutme'>about me</Link>
        <Link className='link3' to='/projects'>Projects</Link>
      </div>
    </div> */}
    <header className="bg-gray-800 md:relative top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <h2 href="#" className="ml-3 text-xl text-white">
            CSL
        </h2>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 text-white hover:text-green">
            Home
          </Link>
          <Link to="/aboutme" className="mr-5 text-white hover:text-green">
            About Me
          </Link>
          <Link to="/projects" className="mr-5 text-white hover:text-green">
            Projects
          </Link>
        </nav>
        <a href={Pdf} target="_blank" className="ml-4 inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out hover:text-blue">Resume</a>
        <button  className="ml-4 inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out hover:text-blue" onClick={() => window.location = 'mailto:caesarsl1904@gmail.com'}>Email</button>
        {/* <button type="button" className="ml-4 inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out hover:text-blue">Email</button> */}
      </div>
    </header>
      </>
    )
}

export default NavBar;