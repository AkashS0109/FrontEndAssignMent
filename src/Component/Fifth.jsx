import React from 'react';
import s23 from "../images/s23.png";
import s22 from "../images/s22.png";
import f5 from "../images/f5.png";
import f3 from "../images/f3.png";

function Fifth() {
  return (
    <div className="w-full dis">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-2 lg:p-20 2xl:p-10 md:p-5 xl:p-10">
        {/* First Image */}
        <div className="p-5  bg-yellow-500 ">
         <div className='text-center font-bold'>
          <h2 className='text-white text-4xl'>Community Building and Initial Launch</h2>
          </div>
           <div className='flex justify-center'>
          <img src={s23} alt="S23" className="w-3/4 sm:w-1/2 md:w-full lg:w-full h-auto" />
        </div></div>
        {/* Second Image */}
        <div className="p-5 bg-blue-400 border-2">
        <div className='text-center  font-bold'>
        <h2 className='text-white text-4xl'>Merchandise Store Launch</h2>
        </div>
         <div className='flex justify-center'>
          <img src={s22} alt="S22" className="w-3/4 sm:w-1/2 md:w-full lg:w-full h-auto" />
        </div></div>
        {/* Third Image */}
        <div className="p-5 bg-violet-400">
        <div className='text-center  font-bold'>
        <h2 className='text-white text-4xl'>Community Events and Contests</h2>
        </div>
        <div className='flex justify-center'>
          <img src={f3} alt="F3" className="w-3/4 sm:w-1/2 md:w-full lg:w-full h-auto" />
        </div></div>
        {/* Fourth Image */}
        <div className="p-5 bg-red-900" >
        <div className='text-center  font-bold'>
        <h2 className='text-white text-4xl'>Expansions and New Features</h2>
        </div>
        <div className='flex justify-center'>
          <img src={f5} alt="F5" className="w-3/4 sm:w-1/2 md:w-full lg:w-full h-auto" />
        </div></div>
      </div>
    </div>
  );
}

export default Fifth;
