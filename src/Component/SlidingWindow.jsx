import React, { useState } from 'react';
import FirstWindow from './FirstWindow';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';
import Fifth from './Fifth';
import Sixth from './Sixth'
import Seventh from './Seventh';

const SlidingWindow = () => {
    const [isOpen, setIsOpen] = useState(false); // Track if the window is open or closed

    // Toggle open/close state
    const toggleWindow = () => {
        setIsOpen(!isOpen); // Toggle between true and false
    };

    return (
        <div className="relative">
            {/* Sliding Panel */}
            <div
                className={`fixed inset-x-0 bottom-0 mx-auto transition-transform duration-300`}
                style={{
                    height: '80vh',
                    maxWidth: '80%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
                    zIndex: 50,
                }}
            >
                <div className="relative rounded-md bg-white h-full overflow-y-auto ">
                    <FirstWindow />
                    <div>
                    <Second/>
                    <Third/>
                    <Forth/>
                    <Fifth/>
                    <Sixth/>
                    <Seventh/>
                </div>
                </div>
                

                {/* Toggle Button (Now inside the sliding panel and moves with it) */}
                <div
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full"
                    style={{ cursor: 'pointer', zIndex: 1000 }}
                >
                    <button
                        onClick={toggleWindow}
                        className="bg-white w-20 h-5 rounded shadow-lg"
                    >
                        {isOpen ? 'Close' : 'Open'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SlidingWindow;
