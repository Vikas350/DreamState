import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="max-w-lg p-3 mx-auto">
      <h1 className="text-green-700 text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-xl"
          id="username"
        />
        <input
          type="text"
          placeholder="email"
          className="border p-3 rounded-xl"
          id="email"
        />
        <input
          type="text"
          placeholder="password"
          className="border p-3 rounded-xl"
          id="password"
        />
        <button className="bg-green-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-60">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Have an account?</p>
        <Link to={"/sign-in"} className="text-blue-700">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
