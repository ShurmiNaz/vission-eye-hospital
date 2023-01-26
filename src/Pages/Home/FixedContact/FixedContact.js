import React from 'react';
import { PhoneIcon, EnvelopeIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';

const FixedContact = () => {
     return (
          <div className='w-[200px] absolute right-0 bottom-[-400px]   md:fixed md:right-0 md:bottom-auto'>
               <div className='bg-slate-600 text-white mb-1 h-24 p-3 leading-6 rounded-lg  '>
                    <div className='flex justify-center'>
                         <PhoneIcon className='w-8 h-7 bg-white text-black p-1 rounded-lg '></PhoneIcon>
                    </div>
                    <div >
                         <p className='text-center'>Call Now</p>
                         <p className='text-center'>+44 7383 161500</p>
                    </div>

               </div>
               <div className='bg-slate-600 text-white mb-1 h-24 p-3 leading-6 rounded-lg  '>
                    <div className='flex justify-center'>
                         <EnvelopeIcon className='w-8 h-7 bg-white text-black p-1 rounded-lg '></EnvelopeIcon>
                    </div>
                    <div >
                         <p className='text-center'>Email</p>
                         <p className='text-center'>visioneyeint@gmail.com</p>
                    </div>

               </div>
               <div className='bg-slate-600 text-white mb-1 h-24 p-3 leading-6 rounded-lg  '>
                    <div className='flex justify-center'>
                         <ChatBubbleOvalLeftEllipsisIcon className='w-8 h-7 bg-white text-black p-1 rounded-lg '></ChatBubbleOvalLeftEllipsisIcon>
                    </div>
                    <div >
                         <p className='text-center'>Whatsapp</p>
                         <p className='text-center'>+44 7383 161500</p>
                    </div>

               </div>

          </div>
     );
};

export default FixedContact;