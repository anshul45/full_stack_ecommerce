import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col gap-2 bg-red-400">
      <div className="flex justify-between py-3 px-1">
        <div>
          <h1>Hemburger</h1>
        </div>
        <div>
          <img src="../../assets/logo.png" />
        </div>
        <div className="flex gap-2 ">
          <h1>user</h1>
          <h1>cart</h1>
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="w-[82%] shadow-2xl" />
      </div>
      <div className="flex justify-center gap-5 pb-3">
        <h1>Home</h1>
        <h1>Shop All</h1>
        <h1>Category1</h1>
        <h1>Category2</h1>
      </div>
    </div>
  );
};

export default Header;
