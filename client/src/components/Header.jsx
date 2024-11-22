/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 bg-red-500 flex flex-col justify-center gap-1">
      <div className="container mx-auto flex items-center  px-2 justify-between">
        {/* logo */}
        <div className="h-full">
          <Link to={"/"} className="h-full  flex justfy-center items-center">
            <img src={logo} width={170} height={60} alt="logo" className="hidden lg:block" />
            <img src={logo} width={120} height={60} alt="logo" className="lg:hidden" />
          </Link>
        </div>

       {/* search */}

       <div className="hidden lg:block">
        <Search/>
       </div>

       {/* add cart */}

      <div className="">
        <div>
            <button className="text-neutral-600 lg:hidden">
            <FaRegCircleUser size={26}/>
            </button>
        </div>
        <div className="hidden lg:block">
       Login and cart
        </div>
      </div>
      </div>

      <div className="container mx-auto px-2 lg:hidden">
        <Search/>
      </div>
    </header>
  );
};

export default Header;
