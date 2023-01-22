import React from 'react';

const Doctor = (props) => {
     console.log(props)

     const { name, description, position, picture } = props.doctor;
     return (
          <div >
               <div className="card card-compact w-auto  bg-base-100 shadow-xl">
                    <figure><img className='p-2 w-96 rounded h-[410px]' src={picture} alt="doctor pic" /></figure>
                    <div className="card-body">
                         <h2 className="card-title">{name}</h2>
                         <p>{position}</p>
                         <div className="card-actions justify-end">
                              <button className="btn btn-primary  bg-gradient-to-r from-sky-500 to-indigo-500 w-full">Detail</button>
                         </div>
                    </div>
               </div>


          </div>
     );
};

export default Doctor;