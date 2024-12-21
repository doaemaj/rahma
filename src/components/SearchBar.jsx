
/*import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";


const SearchBar = ({ categories, onSearch }) => {
  const [search, setSearch] = useState("");

  // Function to handle search
  const handleSearch = () => {
    const filteredCategories = categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );
    onSearch(filteredCategories);
  };


  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto mt-10 mb-10 bg-customBlue bg-opacity-50 px-4">
      <div className="flex items-center w-full max-w-lg">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search for a category..."
          className="w-full p-2 text-gray-600 placeholder-gray-400 border shadow-sm focus:outline-none focus:ring-2 focus:ring-grey-500"
        />
    <button className="p-3 ml-2  rounded-full hover:bg-gray-200">
          <IoSearchSharp className="text-gray-500 w-6 h-6" /> 
        </button>
      </div>

      
    </div>
  );
};

export default SearchBar;*/
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput]  = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value); // Pass the search term to the parent component
  };

  return (
    <div className="flex items-center justify-center w-full max-w-4xl mx-auto mt-10 mb-10 bg-customBlue bg-opacity-50 px-4">
      <div className="flex items-center w-full max-w-lg">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          
          placeholder="Search for a category..."
          className="w-full p-2 text-gray-600 placeholder-gray-400 border shadow-sm focus:outline-none focus:ring-2 focus:ring-grey-500"
        />
        <button
          className="p-3 ml-1 rounded-full hover:bg-gray-200"
          onClick={handleInputChange}
        >
          <IoSearchSharp className="text-gray-500 w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

