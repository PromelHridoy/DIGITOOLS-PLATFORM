import React from 'react';
import { MdOutlineLocalGroceryStore } from 'react-icons/md';

const Navbar = () => {
    return (
<div className=" bg-base-100 shadow-sm px-4 lg:px-8 sticky top-0 z-50">
    <div className="navbar container mx-auto">
        <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow-lg text-lg font-medium border border-base-200"
          >
            <li><a>Products</a></li>
            <li><a>Features</a></li>
            <li><a>Pricing</a></li>
            <li><a>Testimonials</a></li>
            <li><a>FAQ</a></li>
          </ul>
        </div>
        <h2 className="lg:text-3xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#4F39F6] to-[#9514FA] cursor-pointer">
          DigiTools
        </h2>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base font-semibold gap-2">
          <li><a className="hover:text-purple-600 transition">Products</a></li>
          <li><a className="hover:text-purple-600 transition">Features</a></li>
          <li><a className="hover:text-purple-600 transition">Pricing</a></li>
          <li><a className="hover:text-purple-600 transition">Testimonials</a></li>
          <li><a className="hover:text-purple-600 transition">FAQ</a></li>
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3 lg:gap-6">
        <div className="indicator cursor-pointer group">
        <span className="indicator-item badge badge-secondary badge-sm scale-90 bg-[#9514FA] border-none text-white font-bold">
         3
      </span> 
        <MdOutlineLocalGroceryStore 
        className="text-2xl text-purple-600 group-hover:scale-110 transition-transform" 
    />
  </div>
        
        <a className="hidden sm:block font-semibold cursor-pointer hover:text-purple-600 transition">
          Login
        </a>
        
        <button className="btn btn-sm lg:btn-md border-none bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 text-white rounded-full px-6">
          Get Started
        </button>
      </div>
    </div>
      
    </div> 

    

    );
};


export default Navbar;