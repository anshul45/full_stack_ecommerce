import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-7">
      <img src={Logo} alt="logo" className="w-36 h-36"></img>
      <div className="flex mt-2 gap-14">
        <div>Home</div>
        <div>Category</div>
        <div>Shop</div>
        <div>Services</div>
      </div>
      <hr className="bg-gray-300 h-0.5 w-10/12 mt-5" />
      <div className="flex justify-between w-full px-16 py-5">
        <div>Copyright © 2023</div>
        <div>Made with ❤ by Anshul Garwal</div>
      </div>
    </div>
  );
};

export default Footer;
