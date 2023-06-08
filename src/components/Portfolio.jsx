import React from "react";

// Import the thumbnail images for all of the items in our portfolio
import webimg1 from "../assets/portfolio/webimg1.png";
import webimg2 from "../assets/portfolio/webimg2.png";
import webimg3 from "../assets/portfolio/webimg3.jpeg";
import webimg4 from "../assets/portfolio/webimg4.jpeg";
import webimg5 from "../assets/portfolio/webimg5.jpeg";
import webimg6 from "../assets/portfolio/webimg6.png";



// The Portfolio component in the App
const Portfolio = () => {

  // Array of Portfolio Items
  // Each portfolio item has an id and src to display the image
  const portfolios = [
    {
      id: 1,
      src: webimg1,
      demoLink: "https://joyous-worm-lingerie.cyclic.app/",
      codeLink: "https://github.com/Ragini-sharma21/HomeSpun-Store-Ecommerce-Site",
      
    },
    {
      id: 2,
      src: webimg2,
      demoLink:"https://joyous-worm-lingerie.cyclic.app/",
      codeLink: "https://github.com/Ragini-sharma21/HomeSpun-Store-Ecommerce-Site",

    },
    {
      id: 3,
      src: webimg5,
      demoLink: "https://github.com/Ragini-sharma21/News-Adda-Latest-news-",
      codeLink: "https://github.com/Ragini-sharma21/News-Adda-Latest-news-",
    },
    {
      id: 4,
      src: webimg4,
      demoLink: "https://github.com/Ragini-sharma21/Text-Utils-text-convertor-and-analyzer",
      codeLink: "https://github.com/Ragini-sharma21/Text-Utils-text-convertor-and-analyzer",
    },
    {
      id: 5,
      src: webimg3,
      demoLink: "https://github.com/Ragini-sharma21/Action-Adventure-Game-Project",
      codeLink: "https://github.com/Ragini-sharma21/Action-Adventure-Game-Project",
    },
    {
      id: 6,
      src: webimg6,
      demoLink: "",
      codeLink: "",
    },
  ];



  // Return the Portfolio component
  return (

    /* PORTFOLIO COMPONENT */
    /* A gradient is added to the background and the text is changed to white*/
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-40">

      {/* Container for portfolio title, description and thumbnails */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* Container for title and description */}
        <div className="pb-8">

          {/* Portfolio title */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>

          {/* Portfolio description */}
          <p className="py-6">
            Check out some of my projects right here
          </p>
        </div>

        {/* Container of Portfolio Thumbnails */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

          {/* Display portfolio items in JSX using the portfolios array */}
          {portfolios.map(({id, src, href, demoLink, codeLink }) => (

              /* Container for the individual thumbnail and text */
              /* Set the id and src for the thumbnail image */
              <div key={id} className="shadow-md shadow-blue-600 rounded-lg">
                
                {/* Thumbnail image */}
                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                {/* Container for the 'Demo' and 'Code' text */}
                <div className="flex items-center justify-center">

                  {/* Buttons */}
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  </a>
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                  </a>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
};



export default Portfolio;


