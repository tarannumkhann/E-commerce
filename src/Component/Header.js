import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../Context/SidebarContext";
// import cartContext
import { CartContext } from "../Context/CartContext";
// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../img/logo.svg.png";
import { BsBag } from "react-icons/bs";

const Header = () => {
    // header state 
    const [isActive, setIsActive]=useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
//   event listener
useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
});
  return (
    <header className={`${isActive? 'bg-white py-4 shadow-md': 'bg-none py-6'} fixed w-full z-10 transition-all `}>
      <div className="container mx-auto -left-2 flex item-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px] mx-5" src={Logo} alt="" />
          </div>
        </Link>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px] mx-7 "
        >
          <BsBag className=" text-3xl  " />
          <div className="bg-red-500   absolute -right-5   -bottom-0 text-white text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center mx-4">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;

