import React from "react";

// Import the Portfolio Image
import heroImage from "../assets/heroImage.jpg"

// Import the Right Arrow icon from React Icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";     //arrow in home
 
// Import the React Scroll library
import { Link } from "react-scroll";



// The Home component in the App
const Home = () => {

  /* Return the Home component */
  return (

    /* HOME COMPONENT */
    /* Gradient Background on Home Page */
    /* On small screens, add 96px of padding */
    /* On medium screens and up, add 240px of padding */
    <div name="home" className="h-fit w-full bg-gradient-to-b from-black via-black to-gray-800 pt-24 md:pt-60">  {/*add gradient from top to bottom}

      {/* Container for Home Page Words and Images */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        
        {/* Container for Title, Bio and Button */}
        <div className="flex flex-col justify-center h-full">

          {/* Title Text */}
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>

          {/* Paragraph Bio */}
          <p className="text-gray-500 py-4 max-w-md">
            I have 2 years of experience building and designing software.
            Currently, I love to work on web application using technologies like React, Tailwind, Next JS ,Node ,Express.
          </p>

          {/* Button Container */}
          <div>

            {/* Portfolio Button */}
            {/* Use the React Scroll library to scroll to the Portfolio section */}
            <Link to ="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
              Portfolio
              
              {/* Arrow Icon */}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

        {/* Image Container */}
        <div>
          {/* Image with Media Query */}
          <img src={heroImage} alt="my profile" className="rounded-3xl mx-auto w-2/3 md:w-full shadow-md shadow-yellow-400"/>
        </div>
      </div>
    </div>
  )
};



export default Home;