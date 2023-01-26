import React from 'react';
import topbanner from '../../../images/aboutsaimonbanner.jpeg';


const AboutTopBanner = () => {
     return (
          <main>
               <section>
                    <div className="hero h-[450PX]" style={{ backgroundImage: `url(${topbanner})` }}>
                         <div className="hero-overlay bg-opacity-70"></div>
                         <div className="hero-content text-center text-neutral-content">
                              <div className="max-w-xl">
                                   <h1 className="mb-5 text-2xl font-semibold sm:text-5xl sm:font-bold">Best Eye Hospital In World</h1>
                                   <p className="mb-5 text-base sm:text-2xl ">Vision Eye Hospital is one of the best eye hospital in Bangladesh. We provide advanced eye care. We have experienced team members .If you want to find out Best Eye doctors in Bangladesh, chose Vision Eye Hospital. Our doctors are experienced in Glaucoma, Vitro-Retina, Oculoplastic, Uvea, Laser DCR, Phaco, ROP, LASIK, ICL Refractive Surgery, Ocular Oncology, Low Vision, Vision Therapy, and Pediatric Ophthalmology. Vision Eye Hospital-"Mission For Vision".</p>

                              </div>
                         </div>
                    </div>
               </section>
               <section>
                    <section className='bg-yellow-300 h-44 sm:h-40 px-2 sm:px-0  flex items-center justify-evenly flex-wrap' >
                         <h2 className="text-3xl font-sans font-bold text-slate-900">Looking for a First-Class <span className="text-rose-900"> ABROAD EYE HOSPITAL</span> ?</h2>
                         <button className="bg-rose-700 hover:bg-white font-sans font-semibold text-xl py-4 px-8 rounded text-white hover:text-red-700 ease-in duration-300">Contact us
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 w-6 h-6 font inline">
                                   <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                              </svg>

                         </button>
                    </section>

               </section>
          </main>
     );
};

export default AboutTopBanner;