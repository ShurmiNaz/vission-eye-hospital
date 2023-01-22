import React from 'react';

const Specialty = (props) => {
     const { name, description } = props.specialty;
     return (
          <div>
               <div tabIndex={0} className="collapse collapse-arrow border bg-white  rounded-box mt-2">
                    <div className="collapse-title text-xl font-medium">
                         {name}
                    </div>
                    <div className="collapse-content">
                         <p>{description}</p>
                    </div>
               </div>

          </div>
     );
};

export default Specialty;