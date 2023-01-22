import React from 'react';
import SpecialtiesBox from '../Specialties/SpecialtiesBox/SpecialtiesBox';
import Topheader from '../TopHeader/Topheader';
import TopHomePart from '../TopHomePart/TopHomePart';

const Home = () => {
     return (
          <div className='mx-5'>
               <Topheader></Topheader>
               <TopHomePart></TopHomePart>
               <SpecialtiesBox></SpecialtiesBox>




          </div>
     );
};

export default Home;