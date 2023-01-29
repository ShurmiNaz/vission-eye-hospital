import React from 'react';
import saimon1 from '../../../src/reviewImage/saimon1.jpg';
import saimon2 from '../../../src/reviewImage/317158596_925579655486576_1321837803847533838_n.jpg';

import saimon4 from '../../../src/reviewImage/325264609_840198977071746_7431176399101886657_n.jpg';
import saimon5 from '../../../src/reviewImage/325439424_834645807628139_854809230072363578_n.jpg';
import saimon6 from '../../../src/reviewImage/325601563_1322970988546686_8548792155597514159_n.jpg';

const Reviews = () => {
     return (
          <div >
               <div className=" bg-slate-500 flex justify-center py-5 p-3 ">
                    <div className=" text-center">
                         <div className="max-w-md">
                              <h1 className="text-5xl text-zinc-100 font-bold">Hello there I am <span className='text-pink-200'> saimon</span></h1>
                              <p className="py-6 text-zinc-100 text-2xl">I am totally pleased with the excellent ICL surgery at Vision Eye Hospital.Everyone was very caring and proffesional.
                                   I especially liked their personal counseling,it made me felt confident and comfortable.</p>
                         </div>
                    </div>
               </div>

               {/* ...... */}
               <div className='container mx-auto flex justify-evenly flex-wrap p-5 bg-stone-400'>
                    <img className='w-96 h-96 mt-5 ' src={saimon1} alt="" />
                    <img className='w-96 h-96  mt-5' src={saimon2} alt="" />
                    <img className='w-96 h-96  mt-5' src={saimon4} alt="" />
                    <img className='w-96 h-96  mt-5' src={saimon5} alt="" />
                    <img className='w-96 h-96  mt-5' src={saimon6} alt="" />

               </div>


          </div>
     );
};

export default Reviews;