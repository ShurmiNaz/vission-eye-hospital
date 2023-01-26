import React from 'react';
import { Link } from 'react-router-dom';

const LinkNav = ({ route }) => {
     return (
          <div className='text-xl '>
               <li className='ml-5'  > <Link to={route.path}>{route.name}</Link></li>


          </div>
     );
};

export default LinkNav;