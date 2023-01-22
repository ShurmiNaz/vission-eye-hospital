import React from 'react';
import saimon1 from '../../../src/reviewImage/saimon1.jpg';
import saimon2 from '../../../src/reviewImage/317158596_925579655486576_1321837803847533838_n.jpg';

import saimon4 from '../../../src/reviewImage/325264609_840198977071746_7431176399101886657_n.jpg';
import saimon5 from '../../../src/reviewImage/325439424_834645807628139_854809230072363578_n.jpg';
import saimon6 from '../../../src/reviewImage/325601563_1322970988546686_8548792155597514159_n.jpg';

const Reviews = () => {
     return (
          <div >
               <div className="hero  bg-cyan-700">
                    <div className="hero-content text-center">
                         <div className="max-w-md">
                              <h1 className="text-5xl text-zinc-100 font-bold">Hello there I am <span className='text-amber-600'> saimon</span></h1>
                              <p className="py-6 text-zinc-100 text-2xl">One of the most wonderful things in nature is a glance of the eye; it transcends speech; it is the bodily symbol of identity.</p>

                         </div>
                    </div>
               </div>

               {/* ...... */}
               <div className='grid grid-cols-3 gap-4 p-4'>
                    <img className='' src={saimon1} alt="" />
                    <img src={saimon2} alt="" />

                    <img src={saimon4} alt="" />
                    <img src={saimon5} alt="" />
                    <img src={saimon6} alt="" />

               </div>


          </div>
     );
};

export default Reviews;