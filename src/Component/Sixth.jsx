import React from 'react';
import six from "../images/sixth.png";

function Sixth() {
  return (
    <div>
      <div className="p-10  bg-yellow-500">
        {/* Heading Section */}
        <div className="2xl:text-left 2xl:text-8xl md:text-left sm:text-6xl font-black w-full text-center text-4xl lg:text-8xl pb-10 text-white">
          <h1>TOKENOMICS</h1>
        </div>
        <div className="flex flex-wrap md:flex-row flex-col ">
          {/* Button Container for 2xl and Above */}
          <div className="w-full md:w-1/2 2xl:w-1/2 p-2 flex flex-col justify-center items-start">
            {/* First Button */}
            <div className="w-full flex justify-center sm:w-3/4  md:w-full">
              <button className="w-full md:w-4/5 rounded-lg 2xl:w-3/4 p-3 text-lg text-left bg-black font-bold text-white">
                LIDUIDITY<br />
                <span className='text-yellow-400 text-4xl'>LOCKED</span>
              </button>
            </div>

            {/* Second Button */}
            <div className="w-full text-center mt-10 sm:w-3/4 md:w-full">
              <button className="w-full md:w-5/6 rounded-lg 2xl:w-3/4 text-left text-lg bg-black font-bold p-3 text-white">
                CONTRACT <br/>
                <span className='text-yellow-400 text-4xl'>RENOUNCED</span>
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-auto p-5 2xl:w-1/2">
            <img className="w-full h-auto  2xl:h-xl  2xl:w-100" src={six} alt="Sixth" />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Sixth;
