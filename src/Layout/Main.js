import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import BottomFooter from '../Pages/Shared/BottomFooter/BottomFooter';

const main = () => {
     return (
          <div className='relative'>
               <Header></Header>
               <Navbar></Navbar>
               <Outlet></Outlet>
               <Footer></Footer>
               <BottomFooter></BottomFooter>
          </div>
     );
};

export default main;