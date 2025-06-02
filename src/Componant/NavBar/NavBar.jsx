import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {

    const links = <>
        <ul>
            <NavLink to='/' className='btn btn-soft font-bold text-white bg-[#3c65f5] hover:bg-transparent hover:text-[#05264e]'>Home</NavLink>
        </ul>
    </>

  return (
    <div className="navbar bg-base-100 drop-shadow-2xl text">
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
            {
                links
            }
          </ul>
        </div>
        <img src="https://i.ibb.co/d0yprQpM/Annotation-2025-06-03-003142-removebg-preview.png" alt="" className="w-20" />
        <a className="text-xl font-bold hover:cursor-pointer">Career<span className="font-extrabold text-red-600">Code</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            {
                links
            }
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/auth/register' className="underline font-bold text-[#05264e]">Register</Link>
        <Link to='/auth/login' className="btn btn-soft font-bold bg-[#3c65f5] text-white ml-5 hover:bg-transparent hover:text-[#05264e]">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;
