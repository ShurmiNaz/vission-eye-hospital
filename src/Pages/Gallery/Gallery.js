import React from 'react';
import ImageCollection from './ImageCollection/ImageCollection';
import ImageOfGellary from './ImageOfGellary/ImageOfGellary';


const Gallery = () => {
     return (
          <div >
               <ImageCollection></ImageCollection>
               <ImageOfGellary></ImageOfGellary>
          </div>
     );
};

export default Gallery;