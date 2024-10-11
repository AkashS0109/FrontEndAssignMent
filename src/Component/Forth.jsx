import React from 'react';
import Image from "../images/for.png";

function Forth() {
  return (
    <div className='p-10'>
      <div className='flex flex-col-reverse lg:flex-row justify-between gap-5 '>
        {/* Text section */}
        <div className='lg:w-1/2 '>
          <h1 className='2xl:text-8xl text-4xl font-black text-center  lg:text-4xl xl:text-8xl xl:pt-4 lg:pt-10  '>ROAD MAP</h1>
          <div className='2xl:mt-30 lg:w-full'>
            <h3 className='2xl:text-4xl 2xl:font-black font-bold sm:text-2xl  text-center  xl:text-4xl xl:pt-4 lg:pt-10 2xl:pt-40'>
              Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store.
            </h3>
            <h3 className='2xl:text-8xl sm:text-2xl text-yellow-500 font-extrabold mt-3 text-center xl:text-4xl'>
              Join us as we grow and achieve new heights.
            </h3>
          </div>
        </div>
        
        {/* Image section */}
        <div className='lg:w-1/2'>
          <img src={Image} alt="Roadmap" className='w-full h-auto  object-cover' />
        </div>
      </div>
    </div>
  );
}

export default Forth;
