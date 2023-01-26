import React from 'react';


const Specialty = (props) => {
     const { name, description, type1, type2, type3, type4, type5, type6, type7 } = props.specialty;
     return (
          <div>
               <div tabIndex={0} className="collapse collapse-arrow border bg-white  rounded-box mt-2">
                    <div className="collapse-title text-xl font-medium">
                         {name}
                    </div>
                    <div className="collapse-content">
                         <p>{description}</p>
                         <ul className='mt-4  list-disc text-semibold ml-7'>
                              <li>{type1}</li>
                              <li>{type2}</li>
                              <li>{type3}</li>
                              <li>{type4}</li>
                              <li>{type5}</li>
                              <li>{type6}</li>
                              <li>{type7}</li>
                         </ul>
                    </div>

               </div>

          </div>
     );
};

export default Specialty;