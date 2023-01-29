import React from 'react';
import { Link } from 'react-router-dom';

const LinkNav = ({ route, setOpen }) => {
     return (
          <div className='text-xl  '>
               <li className='ml-5 mb-3 sm:mb-0  ' onClick={() => setOpen(false)}  > <Link to={route.path}>{route.name}</Link></li>
               <hr className='sm:hidden' />


          </div>
     );
};

export default LinkNav;