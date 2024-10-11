import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bhood from "../images/AlabayMerch/blackhoodie.png";
import bhoodbc from "../images/AlabayMerch/blackhoodiebck.png";
import bCap from "../images/AlabayMerch/capmockup.png";
import blueBack from "../images/AlabayMerch/bluecapbck.png";
import pinks from "../images/AlabayMerch/pinkshirt.png";
import pinkshirtB from "../images/AlabayMerch/pinkteebck.png";
import YelloS from "../images/AlabayMerch/yellowtshirt.png";
import YelloB from "../images/AlabayMerch/yellowteebck.png";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-black p-3 rounded-full shadow-lg"
    onClick={onClick}
    style={{ border: "2px solid black" }}
  >
    <FaArrowRight size={30} color="white" />
  </div>
);

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 bg-black p-3 rounded-full shadow-lg"
    onClick={onClick}
    style={{ border: "2px solid black" }}
  >
    <FaArrowLeft size={30} color="white" />
  </div>
);

function Seventh() {
  const slides = [
    {
      image: bhood,
      background: bhoodbc,
    },
    {
      image: bCap,
      background: blueBack,
    },
    {
      image: pinks,
      background: pinkshirtB,
    },
    {
      image: YelloS,
      background: YelloB,
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Centered Square Container */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="relative w-[90%] md:w-[75%] lg:w-[60%] h-[400px] md:h-[500px] lg:h-[600px] bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${slides[activeSlide].background})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
          {/* Foreground Image */}
          <img
            src={slides[activeSlide].image}
            alt={`Slide ${activeSlide + 1}`}
            className="max-w-full max-h-full object-contain z-10"
          />
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute top-10 w-full text-center z-0">
        <div className="font-black text-4xl lg:text-6xl 2xl:text-8xl">
          <h1 className="text-orange-500">MERCHANDISE</h1>
        </div>
        <div className="w-11/12 md:w-3/4 mx-auto mt-5">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="relative flex justify-center items-center">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="max-w-sm h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Seventh;
