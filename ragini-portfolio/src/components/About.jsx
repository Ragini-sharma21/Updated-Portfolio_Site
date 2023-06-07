import React from "react";



// The About component in the app
const About = () => {

  // Return the About component
  return (

    /* ABOUT COMPONENT */
    /* The background is a gradient and text is white */
    <div name="about" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white pt-40">   {/*w-width h-height}
      
      {/* Title and Paragraph Container */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        
        {/* About Header container*/}
        <div>

          {/* About Header */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        {/* Paragraph 1 */}
        <p className="text-xl mt-20">
        Hello, I'm Ragini Sharma, a full-stack developer currently in my 4th year of studies in the Computer Science branch at IIIT Bhubaneswar. I have a strong passion for coding and enjoy creating web applications that are both functional and visually appealing. Throughout my academic journey, I have gained a solid foundation in various programming languages and frameworks. My goal is to leverage my skills and knowledge to build innovative and efficient solutions for real-world problems. I am constantly learning and exploring new technologies to stay up-to-date with the ever-evolving field of web development. Feel free to explore my portfolio and get in touch with me to discuss any potential collaboration or projects. 
        </p>

        <br />

        {/* Paragraph 2 */}
        <p className="text-xl">
         THANK YOU FOR VISITING !
        </p>
      </div>
    </div>
  )
}



export default About;
