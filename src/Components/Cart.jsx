import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);

  const totalQty = cartItems.reduce((totalQty,item)=> totalQty + item.qty , 0)

  const totalPrice = cartItems.reduce((total,item)=> total + item.qty * item.price , 0)
  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-500 hover:border-red-500 cursor-pointer"
          />
        </div>
        {cartItems.length > 0 ? cartItems.map((food) => {
          return (
            <ItemCard
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              qty={food.qty}
            />
          );
        }): <h2 className="text-center text-xl font-bold text-gray-800 ">Your cart is empty</h2>}
        {/* <ItemCard/> */}
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">Total Amount : {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button onClick={()=>{navigate("/success")}} className="bg-red-500 font-bold px-3 py-2 w-[90vw] lg:w-[18vw] text-white rounded-lg mb-5 cursor-pointer">
            Checkout
          </button>
        </div>
      </div>
      <FaCartShopping
        className={`rounded-full bg-black text-white shadow-md text-5xl p-3 fixed bottom-4 right-4 cursor-pointer ${totalQty>0 && 'animate-bounce delay-500 transition-all '}`}
        onClick={() => setActiveCart(!activeCart)}
      />
    </>
  );
};

export default Cart;
