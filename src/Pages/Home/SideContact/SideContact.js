import React from 'react';
import { ChatBubbleOvalLeftEllipsisIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';


const SideContact = () => {
     return (
          <main className='mx-4 md:mx-0'>
               <div className="hero mb-5 mt-14  bg-slate-100">
                    <div className="hero-content ">
                         <div className="w-full">
                              <h1 className="text-3xl font-semibold text-left"> Contact Us</h1>
                              <div className='flex items-center justify-left py-3 '>
                                   <PhoneIcon className='h-6 w-6 text-amber-500'></PhoneIcon>
                                   <p className='pl-2  text-xl text-blue-700'>+44 7383 161500</p>
                              </div>
                              <div className='flex items-center justify-left py-3 '>

                                   <EnvelopeIcon className='h-6 w-6 text-amber-500'></EnvelopeIcon>
                                   <p className='pl-2  text-xl text-blue-700'>visioneyeint@gmail.com</p>
                              </div>
                              <div className='flex items-center justify-left py-3'>
                                   <ChatBubbleOvalLeftEllipsisIcon className='h-6 w-6 text-amber-500'></ChatBubbleOvalLeftEllipsisIcon>


                                   <p className='pl-2  text-xl text-blue-700'>+44 7383 161500</p>
                              </div>



                         </div>
                    </div>
               </div>
               {/* second section start */}
               <div className="hero   bg-slate-100">
                    <div className="hero-content ">

                         <div className='p-5'>
                              <h2 className='text-3xl mb-5 font-medium text-slate-700 '>Plan Your Visit</h2>
                              <div>
                                   <h2 className='text-3xl mb-5 font-medium text-slate-700 '>Step 1</h2>

                                   <p className='mt-6 text-lg text-justify'>Our international patient coordinator will contact you after you fill out our contact form within 24 hours. All of the contact information listed on the website can be used to reach us.</p>

                              </div>
                              <div className='pt-4'>
                                   <h2 className='text-3xl mb-5 font-medium text-slate-700 '>Step 2</h2>

                                   <p className='mt-6 text-lg text-justify'>You will talk with our International Patient Coordinator about your concerns. Depending on the type of medical assistance needed, the response might include contain a quote, a doctor's opinion, or recommendations for medical procedures. We will let you know if we need more information or to see recent reports.</p>

                              </div>
                              <div className='pt-4'>
                                   <h2 className='text-3xl mb-5 font-medium text-slate-700 '>Step 3</h2>

                                   <p className='mt-6 text-lg text-justify'>When the treatment plan is complete, we will assist you in making arrangements for visa invitations, travel and accommodation, language interpreters, etc.</p>

                              </div>
                              <div className='pt-4'>
                                   <h2 className='text-3xl mb-5 font-medium text-slate-700 '>Step 4</h2>

                                   <p className='mt-6 text-lg text-justify'>Up until the point at which you depart following treatment, we will provide you with all necessary security and upkeep.</p>

                              </div>

                         </div>
                    </div>
               </div>

          </main>
     );
};

export default SideContact;