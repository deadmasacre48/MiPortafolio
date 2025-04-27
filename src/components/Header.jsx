import React from "react";

const Header = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-center px-4 sm:px-8 md:px-16 lg:px-28 relative">
      <div className="w-full mx-auto">
        <div className="relative">
          <h1 className="flex flex-row items-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold py-10 md:py-20">
            <span className="break-words">{title}</span>
          </h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Header;
