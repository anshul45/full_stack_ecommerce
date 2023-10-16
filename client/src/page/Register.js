import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-14 gap-7">
      <div className="font-bold text-6xl">Register</div>
      <div className="text-gray-700">Please fill in the fields below:</div>
      <form className="flex flex-col gap-7 mt-2">
        <input
          placeholder="Name"
          className="border border-black p-3 rounded-md w-96"
        />
        <input
          placeholder="E-mail"
          className="border border-black p-3 rounded-md w-96"
        />
        <input
          placeholder="Password"
          className="border border-black p-3 rounded-md w-96"
        />
        <button className="border border-black p-3 rounded-md w-96 bg-black text-white font-bold">
          Register
        </button>
        <div className="flex gap-2 justify-center items-center">
          <span>Already have an account?</span>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
