import React, { useState } from "react";

// Import the React icons for the top navigation bar in mobile view
// FaBars is the Hamburger Menu icon and FaTimes is the close (X) icon
import { FaBars, FaTimes } from "react-icons/fa";  //4 dash wala icon

//Import the React Scroll library
import { Link } from "react-scroll";



// The NavBar component in the App
const NavBar = () => {

  // The state hook (variable) for the hamburger menu in the navigation bar (on mobile)
  // It is set to false (closed) by default
  // When it is false, display the Hamburger Menu icon
  // When it is true, display the the Close (x) icon
  const [nav, setNav] = useState(false);

  // Links for the Navigation Bar
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'portfolio'
    },
    {
      id: 4,
      link: 'experience'
    },
    {
      id: 5,
      link: 'contact'
    },
  ];



  // Return the NavBar component
  return (

    /* NAVIGATION BAR */
    /* The navigation bar appears at the top with a height of 20 pixels */
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">   {/*px is padding on left and right and py is padding on top and bottom}

      {/* TOP LEFT LOGO */}
      {/* Add a logo in the top left of the Navigation Bar */}
      <div>
        <h1 className="text-5xl font-signature ml-2">Ragini Sharma</h1>
      </div>


      {/* NAVIGATION BAR LINKS */}
      {/* Create an unordered list of Navigation Bar links */}
      <ul className="hidden md:flex">

        {/* Display links in JSX using the links array */}
        {links.map(({ id, link }) => (

          /* Each list item will be styled in CSS and display the link name */
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">  {/*key works as id and react knows from key that i need to chnage that element}
            
            {/* Use the React Scroll library to scroll to the appropriate section */}
            
          <Link to={link} smooth duration={500}>{link}</Link> 
          </li>
        ))}
      </ul>


      {/* HAMBURGER MENU ICON */}
      {/* Create the hamburger navigation bar icon in mobile view */}
      {/* When it is clicked, change it from the Hamburger icon to the Close (x) icon */}
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">   {/*md means if screen reaches medium hide 4 dash icon}

        {/* Conditional Rendering: */}
        {/* If the nav variable is true, display the Close (x) icon */}
        {/* If the nav variable is false, display the Hamburger icon */}
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
        
      
      {/* DROPDOWN MENU FOR MOBILE */}          
      {/* If the nav variable is true, display the dropdown menu */}
      {nav && (

        /* Create the drop down hamburger menu in mobile view */
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          
          {/* Display dropdown links in JSX using the links array */}
          {links.map(({ id, link }) => (

            /* Each list item will be styled in CSS and display the link name */
            <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
              
              {/* Use the React Scroll library to scroll to the appropriate section and close the menu */}
            <ink onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</ink> 
              
            </li>
          ))}
        </ul>
      )}

    </div>
  )
}



export default NavBar;