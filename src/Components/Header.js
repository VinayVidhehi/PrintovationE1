import React from "react";
import rvceLogo from './Images/rvlogonew.png';
import asmeLogo from './Images/asmelogo.png';

const Header = () => {
  return (
    <div className="main-header-container">
      <header className="flex flex-row items-center text-gray-600 body-font shadow-lg px-4">
        <div className="w-16 m-1"><img src={asmeLogo} alt="logo" /></div>
        <div className="container px-5 py-4 mx-auto flex items-center justify-center sm:flex-row flex-col">
          <span className="ml-3 md:text-3xl text-sm border-x-0 py-2 border-b-2">
            THE PRINTOVATION ENCHANTMENT
          </span>
        </div>
        <div className="w-16 m-1"><img src={rvceLogo} alt="logo" /></div>
      </header>
    </div>
  );
};

export default Header;
