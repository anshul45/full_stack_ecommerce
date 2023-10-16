import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../assets/logo.png";
import React from "react";
const Header = () => {
  return (
    <div className="flex flex-col gap-2  shadow-md">
      <div className="flex justify-between items-center py-3 px-5">
        <div className="flex gap-5 items-center">
          <MenuIcon className="hover:bg-gray-100 cursor-pointer" />
          <div>
            <SearchIcon className="hover:bg-gray-100 cursor-pointer" />
            <input
              className="w-56 p-1 outline-none hover:bg-gray-50"
              placeholder=" What are you looking for?"
            />
          </div>
        </div>

        <div className="pr-60">
          <img src={Logo} alt="Logo" className="w-16 h-16 cursor-pointer" />
        </div>

        <div className="flex gap-5">
          <AccountCircleIcon className="hover:bg-gray-100 cursor-pointer" />
          <ShoppingCartIcon className="hover:bg-gray-100  cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center ">
        <hr className="w-[82%]" />
      </div>
      <div className="flex justify-center  gap-5 pt-2  pb-5">
        <h1 className=" cursor-pointer">Home</h1>
        <h1 className="  cursor-pointer">Shop All</h1>
        <h1 className="  cursor-pointer">Category1</h1>
        <h1 className="  cursor-pointer">Category2</h1>
      </div>
    </div>
  );
};

export default Header;
