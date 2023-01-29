import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import LinkNav from '../LinkNav/LinkNav';




const Navbar = () => {
     const [open, setOpen] = useState(false);
     const routes = [
          { id: 1, name: 'Home', path: '/' },
          { id: 2, name: 'Our Doctors', path: '/doctors' },
          { id: 3, name: 'About Us', path: '/about' },
          { id: 4, name: 'Gallery', path: '/gallery' },
          { id: 5, name: 'Reviews', path: '/reviews' },
     ];

     return (
          <div >

               <nav className='bg-teal-700 py-1 z-50'>
                    <div onClick={() => setOpen(!open)} className="h-8 w-8 m-2 text-white md:hidden">
                         {
                              open ? <XMarkIcon ></XMarkIcon>
                                   : <Bars3Icon></Bars3Icon>
                         }
                    </div>


                    <ul className={`md:flex  py-3 text-center text-white justify-evenly absolute  sm:static bg-teal-700 w-full md:h-16 items-center duration-700 ease-in ${open ? 'top-44' : 'top-[-220px]'}`}>
                         {routes.map(route => <LinkNav key={route.id}
                              setOpen={setOpen}
                              route={route}></LinkNav>)}
                    </ul>
               </nav>


               <hr />

          </div>


     );
};

export default Navbar;