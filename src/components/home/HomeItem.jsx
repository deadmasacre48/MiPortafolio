import React, { useState } from "react";

const HomeItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
        className="
                  bg-white/5 hover:bg-purpletoy2
                  rounded-full p-3 
                  flex items-center 
                  justify-center 
                  text-3xl 
                  text-purpletoy2 hover:text-white 
                  transition-all 
                  duration-300
                  w-12 h-12 
                  sm:w-14 sm:h-14 
                  md:w-16 md:h-16"
      >
        {item.Icon}
      </div>
      {dropdown && (
        <div
          className="
          absolute top-auto
          bg-white text-purpletoy3
          text-center
          rounded-lg p-2
          shadow-lg
          w-40 sm:w-48
          z-10"
        >
          <p className="font-bold">{item.text}</p>
          <p className="text-sm">{item.description}</p>
        </div>
      )}
    </div>
  );
};

export default HomeItem;
