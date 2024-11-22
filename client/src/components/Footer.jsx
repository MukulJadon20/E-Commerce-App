/* eslint-disable no-unused-vars */
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto p-4 text-center flex flex-col lg:flex-row lg:justify-between gap-2">
        <p> © All Rights Reserved 2024.</p>

        <div className="flex item-center gap-4 justify-center text-2xl">
          <a href="" className="hover:text-primary-100">
            <FaFacebook />
          </a>

          <a href="" className="hover:text-primary-100">
            <FaInstagram />
          </a>

          <a href="" className="hover:text-primary-100">
            <FaLinkedin />
          </a>

          <a href="" className="hover:text-primary-100">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
