import React from "react";
import logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center px-[8.75rem] py-[1.38rem]">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul
        className="flex @apply text-[#1E1E1E] gap-[2.56rem] text-lg not-italic font-normal leading-[normal] default-font;
  "
      >
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About Us</li>
        </NavLink>
        <NavLink to="/services">
          <li>Services</li>
        </NavLink>
      </ul>
      <button className="rounded-[1.875rem] default-font bg-[#3956f0] text-white p-2.5 w-[8.75rem]">
        Contact Us
      </button>
    </div>
  );
};

export default Navbar;
