import React from "react";



// The Contact component in the App
const Contact = () => {

  /* Return the Contact component */
  return (

    /* CONTACT COMPONENT */
    /* The background is a gradient and text is white */
    <div name="contact" className="w-full h-fit bg-gradient-to-b from-gray-800 to-black p-4 text-white pt-40 pb-20">

      {/* Container for the Title, Description and Contact Form */}
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        
        {/* Title and Description Container */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Container for the Contact Form */}
        <div className="flex justify-center items-center">

          {/* Email Contact Form */}
          {/* Email submissions are handled by GetForm.io, you can log in */}
          <form action="https://getform.io/f/e669e0fd-d382-4753-8783-0a9c7b32cc1f" method="POST" className=" flex flex-col w-full md:w-1/2">

            {/* Name Text Input*/}
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none shadow-md shadow-gray-600 "
            />

            {/* Email Text Input */}
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none shadow-md shadow-gray-600"
            />

            {/* Message Text Area */}
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none shadow-md shadow-gray-600 "
            />

            {/* Submit Email Button */}
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};



export default Contact;