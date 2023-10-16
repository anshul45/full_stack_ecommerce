import React from "react";
import Logo from "../assets/shopping_cart.png";

const Banner = () => {
  return (
    <div className="flex justify-center items-center mt-40">
      <div className="pl-4">
        <h1 className="text-9xl font-bold flex-wrap"> Online Shop</h1>
        <h3 className="text-5xl mt-5">shop online</h3>
      </div>
      <div className="pl-10">
        <img src={Logo} alt="logo" className="w-52" />
      </div>
    </div>
  );
};

export default Banner;
