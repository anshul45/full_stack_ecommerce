import React from "react";
import Image from "../assets/error.png";

const Error = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-16 ">
      <img src={Image} alt="error image" className="w-72 h-72" />
      <div>Page not found</div>
      <div>Sorry, this page does not exist.</div>
      <button>BACK TO HOME</button>
    </div>
  );
};

export default Error;
