import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, rating, img, handleToast}) => {
  const dispatch = useDispatch();

  function handleAddToCart() {
    dispatch(addToCart({ id, name, price,img, rating, qty: 1 }));
    handleToast(name);
  }

  return (
    <div className="font-bold w-full bg-white p-8 flex flex-col gap-2 rounded-lg">
      <img
        src={img}
        alt=""
        className="w-auto h-[230px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out mb-2"
      />
      <div className="flex text-sm justify-between">
        <h2>{name}</h2>
        <span className="text-red-500">${price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 180)}.....</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-500" /> {rating}
        </span>
        <button
          className="px-3 py-2 text-white bg-red-600 hover:bg-red-700 cursor-pointer rounded-lg text-sm"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
