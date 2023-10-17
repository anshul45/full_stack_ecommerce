import React from "react";
import Image from "../assets/error.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 ">
      <img src={Image} alt="error image" className="w-72 h-60" />
      <div className="font-bold text-6xl">Page not found</div>
      <div className="text-lg">Sorry, this page does not exist.</div>
      <Link to="/">
        <button className="p-5 bg-black text-white font-bold rounded-md">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
};

export default Error;
