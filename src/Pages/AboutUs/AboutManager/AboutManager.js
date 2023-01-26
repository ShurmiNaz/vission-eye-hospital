import React from 'react';
import aboutsaimon from '../../../images/saimonint.png';
import zakia from '../../../images/images.jpg';

const AboutManager = () => {
     return (
          <div>
               <div className=' sm:py-12 sm:px-16 sm:mt-8  bg-slate-50'>
                    <div className='sm:grid sm:grid-cols-5 '>
                         <div className='px-2 sm:px-0 pt-2 sm:pt-0 flex justify-end col-span-2 '><img className='w-full' src={aboutsaimon} alt="managerpic" /></div>
                         <div className='p-3 m-2  sm:m-0 space-y-4 col-span-3 text-white bg-gradient-to-r from-yellow-600 to-amber-700 sm:p-20 '>
                              <h1 className='text-4xl font-bold'>International Relation Manager</h1>
                              <h3 className='text-2xl font-semibold'>M.K.A Saimon</h3>
                              <p className='text-xl text-justify leading-loose '>Our cherished International Patients coordinator M.K.A. Simon has helped us deliver the services at the highest level of quality control. From the patient's initial query to the end of the service, he remained a point of contact for all examines and answers to questions from users and facilitators. He plays a significant part in the conversion process, closely collaborating with the info line, people, facilitators, and medical professionals as well as coordinates and distributes information on transfers, accommodations, travel, and visas. </p>
                         </div>
                    </div>
               </div>

               {/* about doctor */}
               <div className=' sm:py-12 sm:px-16 sm:mt-8   bg-slate-50'>
                    <div className='flex flex-col-reverse sm:grid sm:grid-cols-5 '>

                         <div className='p-3 m-2  sm:m-0 space-y-4 col-span-3 text-white bg-gradient-to-r from-amber-700 to-yellow-700 sm:p-20 '>
                              <h1 className='text-4xl font-bold'>Vision EYE Doctor</h1>
                              <h3 className='text-2xl font-semibold'>Dr. Zakia </h3>
                              <p className='text-xl text-justify leading-loose '>Doctor Zakia Farhana our Senior International patients’ coordinator has made it possible for us to deliver our best as she manages the patient's requirements within the hospital, coordinating all required aspects. She supervises patients' post-operative care. Organizes and oversees post-discharge home care and any necessary medical follow-up and provides and gathers patient satisfaction surveys, then analyzes the data to make changes. creates and manages patient care initiatives and ready’s patient information and communication tools. A strong personal who manages the balance between the hospital's and the patient's needs as well as collaborates with the entire hospital staff to guarantee patient safety and high-quality care. She acts as a competent team player of the entire Vision Eye Hospital Team.  </p>
                         </div>
                         <div className=' px-2 sm:px-0 pt-2 sm:pt-0 flex justify-end col-span-2 '><img className='w-full' src={zakia} alt="managerpic" /></div>
                    </div>
               </div>
          </div>
     );
};

export default AboutManager;