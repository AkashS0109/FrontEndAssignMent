import React from 'react';
import s1 from '../images/s2.png';

const HeroSection = () => {
    return (
        <div className="h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${s1})` }}>
            <div>
                <h1 className="text-green-500 font-black text-center 2xl:text-8xl text-6xl  md:text-6xl lg:text-6xl 
                   drop-shadow-[4px_8px_8px_rgba(0,0,0,4)] pt-16 pb-16">
                    WELCOME TO ALABAY WORLD
                </h1>
            </div>
            {/* Lower Section */}
            <div className='bg-black w-screen h-30 absolute bottom-20 flex items-center text-center justify-center 2xl:h-40'>
                <h3 className='text-center text-white lg:text-xl md:text-xl sm:text-sm font-black xl:text-xl 2xl:text-2xl text-base w-3/4'>
                    WHERE THE <span className='text-yellow-500'>LEGENDARY CENTRAL ASIAN SNEPHERD DOG</span> MEETS A NEW-AGE ADVENTURE.
                    <span className='text-yellow-500'> JOIN US </span> IN CELEBRATING THE <span className='text-yellow-500'>STRENGTH, LOYALTY,</span> AND HERITAGE OF THE ALABAY BREED.
                </h3>
            </div>
        </div>
    );
};

export default HeroSection;
