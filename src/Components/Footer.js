import React from "react";

const Footer = () => {
  return (
    <div className="main-footer-container border-y-2 border-gray-500 flex items-start justify-center">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 md:py-6 py-2 mx-auto flex items-center justify-between flex-col">
          <span className="ml-3 text-xl md:text-2xl">
            Department of Mechanical Engineering 
          </span>
          <span className="ml-3 text-lg md:text-xl">
           R V College of Engineering
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
