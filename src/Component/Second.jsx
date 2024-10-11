import React, { useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s22 from "../images/s22.png";
import s23 from "../images/s23.png"; // Sample image for demonstration

function Second() {
    const [selectedType, setSelectedType] = useState("all");

    const data = [
        { id: 1, type: "photo", file: s23 },
        { id: 2, type: "photo", file: s22 },
        { id: 3, type: "video", file: s23 },
        { id: 4, type: "photo", file: s23 },
        { id: 5, type: "video", file: s23 },
    ];

    const handleCategoryClick = (type) => {
        setSelectedType(type);
    };

    const filteredData = selectedType === "all"
        ? data
        : data.filter(item => item.type === selectedType);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    // Custom arrow components with adjusted positioning
    const CustomLeftArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="carousel-button carousel-button-left absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black font-bold  xl:text-4xl p-3  b rounded-full"
        >
            &lt;
        </button>
    );

    const CustomRightArrow = ({ onClick }) => (
        <button
            onClick={onClick}
            className="carousel-button carousel-button-right absolute right-1 top-1/2 transform -translate-y-1/2 z-10 b bg-white text-black font-bold xl:text-4xl p-3 rounded-full"
        >
            &gt;
        </button>
    );

    return (
        <div className="bg-white">
            {/* Category selection buttons */}
            <div className='flex justify-center gap-20 2xl:py-12 py-6'>
                <h2 className='font-bold text-xl 2xl:text-2xl cursor-pointer' onClick={() => handleCategoryClick("all")}>All</h2>
                <h2 className='font-bold text-xl 2xl:text-2xl cursor-pointer' onClick={() => handleCategoryClick("photo")}>Photos</h2>
                <h2 className='font-bold text-xl 2xl:text-2xl cursor-pointer' onClick={() => handleCategoryClick("video")}>Videos</h2>
            </div>

            {/* Carousel */}
            <div className='relative flex justify-center w-full'>
                <Carousel
                    className='w-2/3 p-5'
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                >
                    {filteredData.length > 0 ? (
                        filteredData.map(item => (
                            <div key={item.id} className='flex justify-center w-7/8 m-3 h-48 bg-black  overflow-hidden'>
                                {item.type === "video" ? (
                                    <video src={item.file} alt={`Video ${item.id}`} className='w-full h-full object-cover' controls />
                                ) : (
                                    <img src={item.file} alt={`Slide ${item.id}`} className='w-full h-full border-black-2 object-cover' />
                                )}
                            </div>
                        ))
                    ) : (
                        <div className='flex justify-center items-center text-gray-500'>No media available</div>
                    )}
                </Carousel>
            </div>
        </div>
    );
}

export default Second;
