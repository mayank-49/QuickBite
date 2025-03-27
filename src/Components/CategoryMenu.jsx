import React, { useEffect, useState } from "react";
import FoodData from "../Data/FoodData";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/slices/categoryslice";
import { useSelector } from "react-redux";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="ml-6">
      <h3 className="text-2xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-auto lg:overflow-x-hidden scroll-smooth scrollbar-hidden">
        <button onClick={()=>dispatch(setCategory("All"))} className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white cursor-pointer ${selectedCategory === "All" && "bg-red-600 text-white"}`}>
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 text-center bg-gray-200 font-bold rounded-lg hover:bg-red-600 hover:text-white cursor-pointer ${selectedCategory === category && "bg-red-600 text-white"}`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
