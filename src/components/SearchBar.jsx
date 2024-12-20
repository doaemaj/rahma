/*import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
  <div className="flex items-center w-full max-w-md mx-auto mt-10 mb-10 bg-customBlue bg-opacity-50">
  
  <span className=" text-lg font-semibold text-gray-700 whitespace-nowrap">
    Choose your category
  </span>
  
  
  <div className="flex items-center w-full">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search ......"
      className="w-full p-2 text-gray-600 placeholder-gray-400 border shadow-sm focus:outline-none focus:ring-2 focus:ring-grey-500"
    />
    <button className="ml-2 p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l4 4"
        />
      </svg>
    </button>
  </div>
</div>

  );
};

export default SearchBar;*/
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto mt-10 mb-10 bg-customBlue bg-opacity-50 px-4">
      {/* Search bar aligned to the left */}
      <span className="font-Crimson text-2xl font-semibold text-gray-700 whitespace-nowrap ml-0">
        Choose your category
      </span>
      <div className="flex items-center w-full max-w-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search ......"
          className="w-full p-2 text-gray-600 placeholder-gray-400 border shadow-sm focus:outline-none focus:ring-2 focus:ring-grey-500"
        />
        <button className="ml-2 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 17a6 6 0 100-12 6 6 0 000 12zm0 0l4 4"
            />
          </svg>
        </button>
      </div>

      
    </div>
  );
};

export default SearchBar;
