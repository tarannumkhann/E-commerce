import React, {useContext} from 'react'
// import link
import { Link } from 'react-router-dom';
// import icons
import {BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../Context/CartContext';

const Product=({product})=>{
    //add to cart
    const {addToCart}=useContext(CartContext);
  
    //destructure product
    const {id, image, category, title, price} =product;
    
    return(
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 hover:shadow-md transition">

        {/* Product Image Card */}
        <div className="rounded-lg overflow-hidden 
            h-[220px] sm:h-[240px] md:h-[260px] 
            flex items-center justify-center 
            relative group bg-gray-50">
      
          {/* Product Image */}
          <img
            className="max-h-[130px] sm:max-h-[150px] transition-transform duration-300 group-hover:scale-110"
            src={image}
            alt=""
          />
      
          {/* Buttons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-100">
  {/* Add to cart */}
  <button
    onClick={() => addToCart(product, id)}
    className="bg-red-500 text-white 
      w-8 h-8 sm:w-9 sm:h-9 
      rounded-lg flex items-center justify-center 
      hover:bg-red-600"
  >
    <BsPlus className="text-xl sm:text-2xl" />
  </button>

  {/* View Item */}
  <Link
    to={`/product/${id}`}
    className="bg-white 
      w-8 h-8 sm:w-9 sm:h-9 
      rounded-lg flex items-center justify-center 
      shadow hover:shadow-md"
  >
    <BsEyeFill className="text-gray-700 text-lg" />
  </Link>
</div>

        </div>
      
        {/* Text Section */}
        <div className="mt-3 space-y-1">
          <div className="text-xs capitalize text-gray-500">{category}</div>
      
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold text-sm hover:underline">{title}</h2>
          </Link>
      
          <div className="font-semibold text-gray-800">$ {price}</div>
        </div>
      </div>
      
      

    )
}
export default Product;