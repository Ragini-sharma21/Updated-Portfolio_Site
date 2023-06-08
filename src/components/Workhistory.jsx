import React from "react";

const WorkExperience = () => {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-black text-white pt-40">
      {/* Container for portfolio title, description, and thumbnails */}
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        {/* Container for title and description */}
        <div className="pb-8">
          {/* Portfolio title */}
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Work History
          </p>
          {/* Portfolio description */}
          <p className="py-6">Check out my work history right here</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Experience 1 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md shadow-pink-600 hover:scale-105 duration-500">
            <h3 className="text-2xl font-bold mb-4">Bussiness Analyst and Technical Lead</h3>
            <p className="text-lg mb-4">Movsta Technology Private Limited</p>
            <p className="text-gray-300">June 2022 - April 2023 </p>
            <p className="mt-4">
            &bull; Led the development and implementation of data-driven strategies to optimize business processes and conduct space programs.<br/>
            &bull; Implemented best practices for code quality, performance, and security, ensuring a robust and scalable website infrastructure.
            
            </p>
          </div>
          {/* Experience 2 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md shadow-blue-600  hover:scale-105 duration-500">
            <h3 className="text-2xl font-bold mb-4">Contributer</h3>
            <p className="text-lg mb-4">GirlScript Winter Of Code</p>
            <p className="text-gray-300">Sept 2021 - Dec 2021</p>
            <p className="mt-4">
            &bull; Collaborated with a diverse team of developers and mentors to contribute to open-source projects during the program. <br/>
            &bull; Resolved bugs by writing documentation, submitting bug reports, and providing feedback for continuous improvement and optimized code to enhance the functionality, performance, and user experience .
            </p>
          </div>
          {/* Experience 3 */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-md shadow-yellow-600 hover:scale-105 duration-500 ">
            <h3 className="text-2xl font-bold mb-4">JavaScript Developer</h3>
            <p className="text-lg mb-4">CollAction</p>
            <p className="text-gray-300">Aug 2022 - Oct 2022</p>
            <p className="mt-4">
           &bull; Collaborated with cross-functional teams of backend developers to translate business requirements into technical solutions, contributing to the full software development lifecycle.<br/>
           &bull; Utilized Docker to containerize applications, enabling efficient deployment, scalability, and consistency across different environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
