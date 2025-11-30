import React, { useContext } from "react";
// import cartContext

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
const CartItem = ({ item }) => {
    const {removeFromCart, increaceAmount, decreaseAmount}=useContext(CartContext);
  // destructure item
  const { id, title, image, price, amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-grey-200 w-full font-light text-black-500  ">
      <div className=" w-full min-h-[150px] flex item-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className=" w-full flex flex-col">
          {/* title & remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link className="text-sm uppercase font-midium max-w-[240px] text-primary hover:underline">
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={()=>removeFromCart(id)}  className=" text-xl cursor-pointer">
              <IoMdClose className="text-grey-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] text-sm">
            {/* quantity */}
            <div className=" flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium ">
              <div onClick={()=>decreaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer bg-red-500">
                {/* minus icon */}
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2">{amount}</div>
              {/* plus icon */}
              <div onClick={()=>increaceAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>

            {/* Item price*/}
            <div className="flex-1 flex justify-around item-center text-primary ">$ {price} </div>
            {/* final price */}
            <div className="flex-1 flex justify-end item-center text-primary font-medium">{`$ ${parseFloat (price * amount).toFixed(2) }`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
