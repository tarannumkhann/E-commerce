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
        <div>
            <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group tranition'>
                <div  className='w-full h-full flex justify-center item-center'>
                    {/* image */}
                    <div className='w-[200px] mx-auto flex justify-center  item-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
                    </div>
                </div>
                <div className='absolute top-0 right-0 bg-red-500 p-2'>
                    <button onClick={()=>addToCart(product, id)}>                        
                        <div className=' flex justify-center item-center text-white w-5 h-5'>
                            <BsPlus className='text-3xl'/>
                        </div>
                        </button>
                        {/* link */}
                        <Link to={`/product/${id}`} className='w-8 h-8 bg-white  flex justify-center item-center text-primary drop-shadow-xl '>
                        <BsEyeFill/>
                        </Link>

                    </div>
            </div>
 {/* category & title & price */}

            <div className=' text-sm capitalize text-grey-500 mb-1'>{category}</div>
       <Link to={`/product/${id}`}>
       <h2 className='font-semibold mb-1'>{title}</h2>
       </Link>
            <div className='font-semibold '> $ {price}</div>
        </div>

    )
}
export default Product;