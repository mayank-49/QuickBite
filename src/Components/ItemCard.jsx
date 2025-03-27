import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import {removeFromCart} from "../redux/slices/CartSlice"
import { useDispatch } from "react-redux";
import { incrementQty,decrementQty } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const ItemCard = ({ id, name, price, qty, img }) => {
  const dispatch = useDispatch();
  function handleDelete(){
    dispatch(removeFromCart({id,name,price,qty,img}));
    toast.error(`${name} Removed!`);
  }
  function handleIncrement(){
    qty>=1 ? dispatch(incrementQty({id})) : (qty=0)
  }
  function handleDecrement(){
    qty>1 ? dispatch(decrementQty({id})) : (qty=0)
  }
  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete className="absolute right-7 text-gray-600 cursor-pointer" onClick={handleDelete} />
      <img
        src={img}
        alt=""
        className="w-[50px] h-[50px] "
      />
      <div className="w-full leading-5">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-red-500 font-bold">${price}</span>
          <div className="flex justify-center items-center gap-2">
            <AiOutlineMinus onClick={handleDecrement} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all duration-500 ease-linear cursor-pointer" />
            <span>{qty}</span>
            <AiOutlinePlus onClick={handleIncrement} className="border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-red-500 hover:border-none rounded-md p-1 text-xl transition-all duration-500 ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
