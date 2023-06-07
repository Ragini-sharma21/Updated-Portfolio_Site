import React from "react";

// Import all of the thumbnails for the technologies we use
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.jpeg";
import cplus from "../assets/cplus.jpeg";
import express from "../assets/express.jpeg";
import java from "../assets/java.jpeg";
import mongodb from "../assets/mongodb.jpeg";
import mysql from "../assets/mysql.jpeg";
import node from "../assets/node.png";




// The Experience component in the app
const Experience = () => {

  // Array of Technologies in the Experience section
  // Each technology item has an id, image, title and html color style
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-sky-400",
    },
    {
      id: 10,
      src: node,
      title: "Node",
      style: "shadow-white",
    },
    {
      id: 11,
      src: mysql,
      title: "MySQL",
      style: "shadow-pink-400",
    },
    {
      id: 12,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-gray-400",
    },
     {
      id: 13,
      src: express,
      title: "Express",
      style: "shadow-sky-400",
    },
    {
      id: 14,
      src: java,
      title: "Java",
      style: "shadow-white",
    },
    {
      id: 15,
      src: cplus,
      title: "C++",
      style: "shadow-pink-400",
    },
   
  ];



  // Return the Experience component
  return (

    /* EXPERIENCE COMPONENT */
    /* A gradient is added to the background */
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 w-full h-fit pt-40">

      {/* Container for experience title, description and icons */}
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        {/* Container for title and description */}
        <div>

          {/* Experience title */}
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience

          {/* Experience description */}
          </p>
          <p className="py-6">
            These are the technologies I've worked with
          </p>
        </div>

        {/* Container of Experience Thumbnails */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">   {/*for mobile devices we have 2 col and for laptops we have 3 col*/}
          
          {/* Display experience thumbnails */}
          {/* Set the id and src for the thumbnail image */}
          {techs.map(({ id, src, title, style }) => (
            
            /* Container for the individual thumbnail image and text */
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              
              {/* Image */}
              <img src={src} alt="" className="w-20 mx-auto" />
             
              {/* Title */}
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Experience;