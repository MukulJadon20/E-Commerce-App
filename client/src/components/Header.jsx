/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../assets/logo.png";
import Search from "./Search";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from "../hooks/useMobile";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
const navigate=useNavigate()
  const isSearchPage = location.pathname === "/search";

  const redirectToLoginPage=()=>{
    navigate("/login")
  }
  return (
    <header className="h-24 lg:h-20 lg:shadow-md sticky top-0  flex flex-col justify-center gap-1 bg-white">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center  px-2 justify-between">
          {/* logo */}
          <div className="h-full">
            <Link to={"/"} className="h-full  flex justfy-center items-center">
              <img
                src={logo}
                width={170}
                height={60}
                alt="logo"
                className="hidden lg:block"
              />
              <img
                src={logo}
                width={120}
                height={60}
                alt="logo"
                className="lg:hidden"
              />
            </Link>
          </div>

          {/* search */}

          <div className="hidden lg:block">
            <Search />
          </div>

          {/* add cart */}

          <div className="">
           {/* user icon display in only mobile version */}
              <button className="text-neutral-600 lg:hidden">
                <FaRegCircleUser size={26} />
              </button>
           {/* desktop */}
            <div className="hidden lg:flex items-center gap-10">
              <button onClick={redirectToLoginPage} className="text-lg px-2">Login</button>
              <button className="flex item-center gap-2 bg-green-700 hover:bg-green-800 px-3  rounded text-white ">
                {/* add to cart */}
                <div className="animate-bounce">
                <GiShoppingCart size={26} />
                </div>
                <div className="font-semibold">
                 <p>my cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-2 lg:hidden ">
        <Search />
      </div>
    </header>
  );
};

export default Header;
