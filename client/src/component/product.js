import React from "react";
import { product } from "../../assets/products";

const Product = () => {
  return (
    <div>
      <img />
      <div>
        <h1>{product[0].name}</h1>
        <h1>{product[0].price}</h1>
      </div>
    </div>
  );
};

export default Product;
