import React from "react";
import Logo from "../img/buty.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
      <section className="bg-pink-100 h-[800px]  bg-no-repeat bg-cover bg-center py-24">
        <div className="container mx-auto flex justify-around h-full">
          <div className="flex flex-col justify-center m-6">
            <div className="font-semibold flex items-center uppercase mr-5">
              
              <div className=" w-10 h-[2px] bg-red-500 mr-4 i "></div>
              New Trend
            </div>
            <h1 className="text-[80px] leading-[1.1] font-light mb-4">
              TARANNUM SALE STYLISH <br />
              <span className="font-semibold">WOMENS</span>
            </h1>
            <Link to={'/'} className="self-start uppercase font-semibold border-b-2 border-black">
            Discover more
            </Link>
          </div>

          <div className=" hidden lg:block flex justify-end  -right-2 -bottom-4  ">
            <img className=" h-[704px] " src={Logo} alt="" />
          </div>

        </div>
      </section>
    </div>
  );
};
export default Hero;
