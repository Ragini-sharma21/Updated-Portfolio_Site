import React from "react";

// Import the GitHub, LinkedIn, Mail and Person icons from React Icons
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";



// The SocialLinks component in the app
const SocialLinks = () => {

  // Links for the Social Media Bar
  // Each link has an ID, text, link, and style (optional)
  // The resume link downloads a resume to the user's computer
  const links = [                   //array so that i dont need to copy paste code for every icon
    {
      id: 1,
      child: (
        <>                                                
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/ragini-sharma-996118200/",
      style: "rounded-tr-md"               //tr is topright md is medium
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Ragini-sharma21",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:raginisharma6006845094@gmail.com",
    },
    {
        id: 4,
        child: (
          <>
            LeetCode <SiLeetcode size={30} />
          </>
        ),
        href: "https://leetcode.com/Ragini-Sharma/",
      },
      {
        id: 5,
        child: (
          <>
            GFG <SiGeeksforgeeks size={30} />
          </>
        ),
        href: "https://auth.geeksforgeeks.org/user/b120062/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",
      },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];



  // Return the SocialLinks component
  return (

    /* SOCIAL MEDIA BAR */
    /* It is added to the left side of the screen and hidden on small screens */
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      
      {/* Unordered list of links */}
      <ul>

        {/* Display links in JSX using the links array */}
        {links.map(( {id, child, href, style, download} ) => (   //loop on array

          /* Set the id, link, style, download and text for each list item */
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 " + style}>   {/*if we want to add custom css for just one specific link we can do it by adding + sign*/}
            <a href={href} className="flex justify-between items-center w-full text-white" download={download} target="_blank" rel="noopener noreferrer">  {/*target allows you to open new tab*/}
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
};



export default SocialLinks;