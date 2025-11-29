import React, { useContext } from "react";
import Product from "../Component/product";
import { ProductContext } from "../Context/productContext";
// import hero
import Hero from "../Component/Hero";

function Home() {
  const product = useContext(ProductContext);
  console.log(product, "prod");

  const filteredProduct = Array.isArray(product)
    ? product.filter((item) =>
        [
          "men's clothing",
          "women's clothing",
          "electronics",

          "jewelery",
        ].includes(item?.category?.toLowerCase())
      )
    : [];
  console.log(filteredProduct, "category");

  return (
    <div>
      <Hero/>
      
      <section className="py-16">
        <div className="Container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] ">
            {filteredProduct?.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
      
    </div>
  );
}
export default Home;
