import React from "react";
import gitLogo from "../assets/fi_2111432.png";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/apps"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={"/installation"}>My Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          <img className="w-10" src={logo} alt="" />{" "}
          <span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">
            App Store
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to={"/"} className="font-bold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/apps"} className="font-bold">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to={"/installation"} className="font-bold">
              My Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"https://github.com/nasim-ferdous"}
          className="btn text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]"
        >
          <img src={gitLogo} alt="" />
          Contribute
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
