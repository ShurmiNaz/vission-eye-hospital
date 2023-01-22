import React, { useEffect, useState } from 'react';
import Doctor from './Doctor/Doctor';


const Doctors = () => {
     const [doctors, setDoctors] = useState([]);
     useEffect(() => {
          fetch('doctorData.json')
               .then(res => res.json())
               .then(data => setDoctors(data))
     }, []);
     return (
          <div className='my-12'>
               <div>
                    <div className='p-12 bg-gradient-to-r from-teal-500 to-emerald-500 text-white '>
                         <h1 className='text-3xl mb-5 text-center '> Leading Eye Doctors</h1>
                         <p className='text-justify'>To find the best doctors at your closest Vision Eye Hospital will a fine choice. We are an accredited eye hospital with a wonderful team of experienced doctors comprising of specialist surgeons, ophthalmologists, optometrists and paramedic team with renowned standings from overseas.</p>
                    </div>
                    <h1 className='py-12 text-2xl text-semibold px-5'>Below is the list of our eye specialists with their respective specializations :</h1>
               </div>
               <div className='grid m-5 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8 '>
                    {
                         doctors.map(doctor => <Doctor
                              key={doctor.id}
                              doctor={doctor}

                         ></Doctor>)
                    }

               </div>

          </div>
     );
};

export default Doctors;