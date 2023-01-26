import React from 'react';
import FixedContact from '../FixedContact/FixedContact';
import SpecialtiesBox from '../Specialties/SpecialtiesBox/SpecialtiesBox';
import Topheader from '../TopHeader/Topheader';
import TopHomePart from '../TopHomePart/TopHomePart';

const Home = () => {
     return (
          <div className='container mx-auto  '>
               <FixedContact></FixedContact>
               <Topheader></Topheader>
               <TopHomePart></TopHomePart>
               <SpecialtiesBox></SpecialtiesBox>

          </div>
     );
};

export default Home;