import React from 'react';
import logo from '../../../images/logo1.PNG';

const Header = () => {
     return (
          <div>
               <div className='  sm:flex items-center justify-evenly bg-slate-100 px:3 sm:px-5 '>
                    <img className=' w-10 sm:w-24' src={logo} alt="" />
                    <div className='py-4 pl-4'>
                         <h1 className='text-2xl text-center sm:text-4xl font-bold font-serif text-teal-600 '> Vision Eye Hospital Dhaka </h1>
                         <p className='text-xl  sm:text-2xl sm:text-center font-semibold text-cyan-900'>International Patients Support Team</p>
                    </div>
                    <div className='text-black text-xl font-semibold hidden  sm:inline'>
                         <span>Whatsapp</span> <br />
                         <span>+44 7383 161500</span>
                    </div>
               </div>

          </div>
     );
};

export default Header;