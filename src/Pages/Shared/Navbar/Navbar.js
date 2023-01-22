import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo1.PNG';

const Navbar = () => {
     const menuItems = <React.Fragment>
          <li className=" px-14 text-2xl"><Link to="/"> Home</Link></li>
          <li className=" px-14 text-2xl"><Link to="/doctors">Our Doctors </Link></li>
          <li className=" px-14 text-2xl"><Link to="/about">About us </Link></li>
          <li className=" px-14 text-2xl"><Link to="/appointment"> Appointment</Link></li>
          <li className=" px-14 text-2xl"><Link to="/reviews"> Reviews</Link></li>
     </React.Fragment>
     return (
          <div>
               <div className='flex items-center justify-evenly bg-[#24252A]'>
                    <img src={logo} alt="" />
                    <div className='py-4'>
                         <h1 className='text-4xl font-serif text-red-600 '> Vision Eye Hospital Dhaka </h1><span className='text-xl ml-12 mt-12 text-green-500'>International Patients Support Team</span>
                    </div>
                    <div className='text-white'>
                         <span>HOT LINE</span> <br />
                         <span>+44 7383 161500</span>
                    </div>
               </div>

               <div className="navbar bg-base-100 flex flex-col  ">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                                   {menuItems}
                              </ul>
                         </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                              {menuItems}
                         </ul>
                    </div>


               </div>
               <hr />

          </div>


     );
};

export default Navbar;