import React from 'react';
import succulents from '../images/succulents.JPG'
import logan from '../images/logan.webp'
import heights from '../images/city-heights.jpeg'
import { skills } from '../assets/skills';

function Homepage () {
  

  
  return (
      <>
      <div className="px-4 py-16 w-full mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2 justify-center">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
          </div>
          <div className="max-w-xl mb-7">
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl sm:leading-none">
             Welcome friends!
            <br/>
            ¡Bienvenidos amigos!
            </h2>
              <p className='text-sm text-white font-bold'>My name is </p>
            <h2 className='text-4xl font-bold text-green-600'>
            Caesar Solano Lagunas
            </h2>
            <br/>
            <h2 className='text-2xl font-bold text-white'>
               I am a {' '}
              <span className="inline-block text-red-500">
                Software Engineer
              </span>
            </h2>

            <h2 className='text-2xl font-bold text-white'>
              Based in San Diego, California ☀️
            </h2>
                
                <br/>

            <p className="text-base text-gray-300 md:text-lg">
              This portfolio was created to give a glimpse of my life and my journey to becoming a software engineer.
              
              Feel free to connect or reach out via LinkedIn, Github or email!
            </p>
            <br/>
            <p>links below:</p>
            {/* <br/> */}
            <div>
              
            <a href='https://www.linkedin.com/in/caesar-solano-lagunas/' target="_blank" class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
              </svg>
            </a>

            <a href="https://github.com/Caesar11SL" target="_blank" class="bg-gray-700 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                <g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" fill="currentColor" /></g>
              </svg>
            </a>

            <button onClick={() => window.location = 'mailto:cesarsolano007@gmail.com'} class="bg-red-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class="w-5" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor"/></g></svg>
            </button>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mx-auto lg:pl-8">
          <div className="flex flex-col items-end px-8">
            <img
              className="border-2 border-red-300 object-cover object-left mb-8 rounded shadow-lg w-40 h-28 sm:h-68 sm:w-68 md:h-68 xl:h-56 w-28 sm:w-48 xl:w-56"
              src={logan}
              alt="image1"
            />
            <img
              className="border-2 border-red-300 object-cover w-30 h-20 rounded shadow-lg sm:h-60 xl:h-40 sm:w-62 xl:w-40"
              src={heights}
              alt="image2"
            />
          </div>
          <div className="px-4">
            <img
              className="border-2 border-red-300 object-cover object-bottom w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src={succulents}
              alt="image3"
            />
          </div>
        </div>
      </div>
    </div>
      
      <div className='flex items-center justify-center'>
        <h1 className='content-center text-4xl font-bold text-white' >Tech Skills</h1>
      </div>
      <br/>
      
      <div className='flex justify-around'>
        <div className='grid grid-cols-5 gap-5 justify-center'>
          {skills.map((skill) => (
            <span className=" min-w-0 flex text-gray-300 items-center justify-center ">{skill}</span>
            ))}
        </div>
      </div>
      
        <br/>
      </>
    )
}

export default Homepage;