import React from "react";

const SingleProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-48 h-64 bg-green-600 rounded-md"></div>
      <div className=" mt-3">Title</div>
      <div className="my-3">Price</div>
    </div>
  );
};

export default SingleProduct;
