import React from 'react';
import sunset from '../images/sunset.JPG'
import hiking from '../images/hiking.jpg'
import outcast from "../images/outcast.jpg"
import { brandStatement } from '../assets/brand-statement';



const AboutMe = () => {
    return(
      <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto md:text-center sm:text-center ">
          My Story
        </h2>
        <p className="text-base text-gray-300 md:text-lg">
          I am a Latinx, first generation, individual who is excited to learn and improve along this journey. 
        </p>
      </div>
      <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
        <div className="grid grid-cols-2 gap-5">
          <img
            className="object-cover object-center w-full h-56 col-span-2 rounded shadow-lg border-2 border-red-300"
            src={sunset}
            alt="sunet"
          />
          <img
            className="object-cover object-top w-full h-48 rounded shadow-lg border-2 border-red-300"
            src={hiking}
            alt=""
          />
          <img
            className="object-cover object-center w-full h-48 rounded shadow-lg border-2 border-red-300"
            src={outcast}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="pb-4 mb-4 border-b">
            <h6 className="mb-2 font-semibold leading-5">
              I am a Business Owner
            </h6>
            <p className="text-sm text-gray-300">
              El Chavo Ice Cream truck is a business created by my family. This business was fully self sufficent within one month time.
              I learned how to make profitable product purchases by analyzing data recorded throughout each day. 
              Along with keeping a comprehensive inventory. Introduced access for wireless payment.
            </p>
          </div>
          <div className="pb-4 mb-4 border-b">
          <h6 className="mb-2 font-semibold leading-5">
              I am a product of my environment
            </h6>
            <p className="text-sm text-gray-300">
              Growing up I was taught very early that one must fight in order to get what they want. 
              Watching both my parents getting up early to prepare for another restless day to provide for their family. 
              I now carry this gene of working til I get what I want. 
            </p>
          </div>
          <div>
              <h6 className="mb-2 font-semibold leading-5">
                I am an adventurer
              </h6>
            <p className="text-sm text-gray-300">
              Growing up I always loved being outdoors and in nature.
              I love going on hikes, it is a great way for myself to get self care.
              Catch me chasing sunsets!
            </p>
          </div>
        </div>
      </div>
    </div>

      </>
    )
}

export default AboutMe;