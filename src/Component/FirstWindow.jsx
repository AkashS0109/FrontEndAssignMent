import React from 'react';
import f1 from '../images/f1.png';

function FirstWindow() {
    return (
        <div className='bg-yellow-500 p-4'>
            <div className='flex flex-wrap justify-between '>
                {/* Image Section */}
                <div className='w-full md:w-1/2 p-2'>
                    <img
                        src={f1}
                        alt="Image description"
                        className='w-full h-auto'
                    />
                </div>
                
                {/* Text Section */}
                <div className='w-full md:w-1/2 p-4 text-center md:text-left'>
                    <h3 className='text-4xl lg:text-6xl md:text-4xl font-bold 2xl:mt-10 2xl:text-8xl text-orange-600'>
                        History Of
                    </h3>
                    <h1 className='text-4xl  lg:text-6xl  2xl:text-6xl font-black text-white mt-2'>
                        ALABAY
                    </h1>
                    <p className='mt-4 text-xl sm:text-xl md:text-xl  xl:text-4xl 2xl:text-4xl  font-bold'>
                        The Central Asian Shepherd Dog, also known as Alabay, has been
                        a guardian of livestock and property for centuries. Originating from Central Asia,
                        these dogs are renowned for their courage, strength, and loyalty.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FirstWindow;
