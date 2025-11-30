import React from "react";
import Logo from "../img/buty.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div>
     <section className="bg-pink-100 min-h-screen bg-no-repeat bg-cover bg-center py-24">
  <div className="container mx-auto h-full flex flex-col-reverse lg:flex-row items-center justify-between px-4">

    {/* Text Section */}
    <div className="flex flex-col justify-center text-center lg:text-left mt-10 lg:mt-0">
      <div className="font-semibold flex items-center uppercase justify-center lg:justify-start">
        <div className="w-10 h-[2px] bg-red-500 mr-4"></div>
        New Trend
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-[80px] leading-tight font-light mb-4">
        TARANNUM SALE STYLISH <br />
        <span className="font-semibold">WOMENS</span>
      </h1>
      <Link
        to={"/"}
        className="self-center lg:self-start uppercase font-semibold border-b-2 border-black"
      >
        Discover more
      </Link>
    </div>

    {/* Image Section */}
    <div className="">
      <img className="h-[600px] lg:h-[704px]" src={Logo} alt="" />
    </div>

  </div>
</section>

    </div>
  );
};
export default Hero;
