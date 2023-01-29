import React from 'react';
import topban from '../../../images/topban.jpg';

const ImageCollection = () => {
     return (
          <div>
               <div className="hero h-60" style={{ backgroundImage: `url(${topban})` }}>
                    <div className="hero-overlay bg-opacity-60 "></div>
                    <div className=" text-center text-neutral-content ">
                         <div className="max-w-md ">
                              <h1 className="mb-5 text-5xl font-bold">Photo Album and Archive</h1>

                         </div>
                    </div>
               </div>
          </div>

     );
};

export default ImageCollection;