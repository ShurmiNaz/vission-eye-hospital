import React from 'react';
import SideContact from '../SideContact/SideContact';
import TophomeLeft from '../TophomeLeft/TophomeLeft';

const TopHomePart = () => {
     return (
          <main className='md:grid grid-cols-8 gap-5'>
               <section className='col-span-5'>
                    <TophomeLeft></TophomeLeft>
               </section>
               {/* side section start */}
               <section className='col-span-2'>
                    <SideContact></SideContact>
               </section>
          </main>
     );
};

export default TopHomePart;