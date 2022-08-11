import React from 'react';
import {projects} from '../projectData'

const Projects = () => {
    return(
        <div>
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            This a collections of projects I have been working on, this page will be updated continuously throughout my career. Hope you enjoy!
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative border-2 border-red-300">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-fill object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  <br/>
                  <h3 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">{project.tech}</h3>
                  <br/>
                  <a href={project.link} target="_blank" className="ml-4 inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out hover:text-blue">Live link</a>
                  <a href={project.github} target="_blank" className="ml-4 inline-block px-6 py-2.5 bg-green-500 text-white font-large text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out hover:text-blue">Github</a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      </div>
    )
}

export default Projects;