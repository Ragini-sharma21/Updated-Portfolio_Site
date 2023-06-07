import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="text-center">
          <p className="mb-4 text-lg">&copy; {new Date().getFullYear()} All rights reserved @Ragini Sharma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

