import React from 'react';
import SideContact from '../SideContact/SideContact';
import TophomeLeft from '../TophomeLeft/TophomeLeft';

const TopHomePart = () => {
     return (
          <main className='grid grid-cols-5 gap-4'>
               <section className='col-span-3'>
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