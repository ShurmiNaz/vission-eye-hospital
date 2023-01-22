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
          <div className='my-10' >

               <h1 className='text-3xl mb-6 font-medium text-slate-500 '>Eye Treatments and Specialties</h1>
               <div className='grid grid-cols-6'>
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