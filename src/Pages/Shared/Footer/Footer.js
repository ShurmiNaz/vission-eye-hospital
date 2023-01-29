import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo1.PNG';

const Footer = () => {
     return (
          <div>
               <footer className="footer mt-5 p-10 bg-teal-900 text-white ">
                    <div className='w-80'>
                         <img src={logo} alt="" />
                         <p>Vision Eye Hospital' has been established with the slogan “Mission for Vision”. Its journey has been commenced to introduce advanced technologies in eye care field of Bangladesh at an affordable cost and ensure skillness, sincerity and devotion ...</p>
                    </div>
                    <div>
                         <span className="footer-title">Link</span>
                         <Link className="link link-hover">Our Doctors</Link>
                         <Link className="link link-hover">About us</Link>
                         <Link className="link link-hover">Gellary</Link>
                         <Link className="link link-hover">Review</Link>
                    </div>

                    <div>
                         <span className="footer-title">Contact Us</span>
                         <div className="form-control w-80">
                              <p>Phone : +44 7383 161500</p>
                              <p>Email : visioneyeint@gmail.com</p>
                              <p>Whatsapp : +44 7383 161500</p>
                         </div>
                    </div>
               </footer>
          </div>
     );
};

export default Footer;