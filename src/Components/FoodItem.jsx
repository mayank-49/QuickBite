import React from "react";
import FoodData from "../Data/FoodData";
import FoodCard from "./FoodCard";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const handleToast = (name) => {
    toast.success(`Added ${name}`);
  };

  const category = useSelector((state) => state.category.category);

  const search = useSelector((state)=>state.search.search);
  console.log(search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return category === food.category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItem;
// FoodData.map((food) => (
//   <FoodCard
//     key={food.id}
//     id={food.id}
//     name={food.name}
//     price={food.price}
//     desc={food.desc}
//     rating={food.rating}
//     img={food.img}
//     handleToast={handleToast}
//   />
// ))
