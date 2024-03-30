import React from "react";
import { FaSearch } from "react-icons/fa"; // icons from font awesomw website
import { Link } from "react-router-dom"; // link to other route without refresh the page

function Header() {
  return (
    <header className="bg-green-100 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-green-500">Dream</span>
            <span className="text-green-700">State</span>
          </h1>
        </Link>
        <form className="bg-green-50 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-green-600" />
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-green-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-green-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-green-700 hover:underline">SignIn</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}

export default Header;
