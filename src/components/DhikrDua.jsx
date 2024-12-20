import React from "react";
import { useNavigate } from "react-router-dom";
import categories from "../data/categories.json";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#F1F0E7] py-5 px-5 border-t border-b border-black">
      <div
        className="
          grid grid-cols-2       
          gap-5 max-w-[1200px] w-full
          md:grid-cols-3         
          lg:grid-cols-5         
          mt-2"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center p-4 w-full h-[100px] bg-[#759BDB99] rounded-lg cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => navigate(`/category/${category.name}`)} // Navigate to detailed interface
          >
            
            <div className="category-icon">
              <img
                className="w-[60px] h-[70px] object-contain mr-2 mt-1"
                src={category.icon}
                
              />
            </div>

            
            <div className="text-white text-[1.2rem] font-serif italic text-center">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;