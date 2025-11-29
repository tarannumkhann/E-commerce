import React, { createContext, useEffect, useState } from "react";

// Create the product context
export const ProductContext = createContext();

function ProductProvider({ children }) {
  const [product, setProduct] = useState([]);

  console.log(product, "product");


  // Fetch data from the API
  async function getData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }


  // Call getData on component mount
  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
