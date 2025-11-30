import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../Context/productContext";
import { CartContext } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  if (!products.length) return <div className="pt-32 text-center">Loading...</div>;

  const item = products.find((p) => p.id === parseInt(id));

  if (!item) return <div className="pt-32 text-center">Product not found</div>;

  const { title, price, description, image } = item;

  return (
    <section className="pt-32 pb-12 lg:py-32">
      <div className="container mx-auto px-4">

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">

          {/* Product Image */}
          <div className="flex-1 flex justify-center">
            <img 
              className="max-h-[300px] lg:max-h-[400px] object-contain" 
              src={image} 
              alt={title} 
            />
          </div>

          {/* Product Content */}
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <h2 className="text-2xl font-bold">{title}</h2>

            <h3 className="text-xl font-semibold text-red-600">$ {price}</h3>

            <p className="text-gray-700 leading-relaxed">
              {description}
            </p>

            <button
              onClick={() => addToCart(item, item.id)}
              className="bg-black text-white uppercase font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
