import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/productContext";
// import cartcontext
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  const product = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  if (!product.length) return <div>Loading products...</div>;

  console.log(product, "product");

  const products = product.filter((item) => {
    return item.id === parseInt(id);
  }, []);


if(!products){
  <section>
Loading...
  </section>;
}

const {title, price, description, image}= products[0];
console.log(products);

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex item-center" >
    <div  className="flex flex-col bg:flex-row container max-auto h-[500px]   mb-4 m-10 text-center relative overflow-hidden group tranition ">
    <div className=" flex flex-1 justify-center item-center lg:mb-0 mb-8 "> 
      <img className='max-h-[200px]   ' src={image} alt="" />
    </div>
    <div className="font-bold text-center">title: {title}</div>
    <div  className="font-midium text-center text-red-600  "> $ {price}</div>
    <p className="mb-4">{description}</p>
    <button onClick={()=>addToCart(products[0], products.id)} className="font-bold bg-black text-white flex justify-center item-center uppercase  px-6 py-4">
      add to cart
    </button>
   
    </div>
  </section>
  );
};
export default ProductDetails;
