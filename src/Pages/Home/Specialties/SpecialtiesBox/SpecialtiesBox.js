import React, { useEffect, useState } from 'react';
import Specialty from '../Specialty/Specialty';

const SpecialtiesBox = () => {
     const [specialties, setSpecialties] = useState([]);
     useEffect(() => {
          fetch('data.json')
               .then(res => res.json())
               .then(data => setSpecialties(data))
     }, []);
     return (
          <div className='my-10 mx-4 md:mx-0' >

               <h1 className='text-2xl  sm:text-3xl mb-6 sm:font-bold text-slate-500 '>Eye Treatments and Specialties</h1>
               <div className='md:grid md:grid-cols-6'>
                    <div className=' bg-gray-100 col-span-4 p-6'>
                         {
                              specialties.map(specialty => <Specialty
                                   key={specialty.id}
                                   specialty={specialty}
                              ></Specialty>)
                         }

                    </div>
               </div>
          </div>
     );
};

export default SpecialtiesBox;