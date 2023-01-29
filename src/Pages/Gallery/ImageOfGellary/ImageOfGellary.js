import React from 'react';
import pic1 from '../../../gallary/g1.jpeg';
import pic2 from '../../../gallary/g2.jpeg';
import pic3 from '../../../gallary/g3.jpeg';
import pic4 from '../../../gallary/g4.jpeg';
import pic5 from '../../../gallary/g5.jpeg';
import pic6 from '../../../gallary/g6.jpeg';

const ImageOfGellary = () => {
     return (
          <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4 ml-0  md:ml-10 mt-10'>
               <div className=" w-96   bg-base-100 shadow-xl">
                    <figure className="p-10">
                         <img src={pic1} alt="hospital" className="rounded-xl w-80 h-48" />
                    </figure>
               </div>
               <div className=" w-96   bg-base-100 shadow-xl">
                    <figure className="p-10">
                         <img src={pic2} alt="hospital" className="rounded-xl w-80 h-48" />
                    </figure>
               </div>
               <div className=" w-96   bg-base-100 shadow-xl">
                    <figure className="p-10">
                         <img src={pic3} alt="hospital" className="rounded-xl w-80 h-48" />
                    </figure>
               </div>
               <div className=" w-96   bg-base-100 shadow-xl">
                    <figure className="p-10">
                         <img src={pic4} alt="hospital" className="rounded-xl w-80 h-48" />
                    </figure>
               </div>
               <div className=" w-96   bg-base-100 shadow-xl">
                    <figure className="p-10">
                         <img src={pic5} alt="hospital" className="rounded-xl w-80 h-48" />
                    </figure>
               </div>
               <div className=" w-96   bg-base-100 shadow-xl">
                    <figure className="p-10">
                         <img src={pic6} alt="hospital" className="rounded-xl w-80 h-48" />
                    </figure>
               </div>
          </div>
     );
};

export default ImageOfGellary;