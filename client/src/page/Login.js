import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 gap-7">
      <div className="font-bold text-6xl">Login</div>
      <div className="text-gray-700">
        Please enter your e-mail and password:
      </div>
      <form className="flex flex-col gap-7 mt-5">
        <input
          placeholder="E-mail"
          className="border border-black p-3 rounded-md w-96"
        />
        <input
          placeholder="Password"
          className="border border-black p-3 rounded-md w-96"
        />
        <button className="border border-black p-3 rounded-md w-96 bg-black text-white font-bold">
          Login
        </button>
        <div className="flex gap-2 justify-center items-center">
          <span>New customer?</span>
          <Link to="/register">
            <span>Create an account</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
