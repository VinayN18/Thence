import React, { useState, useEffect } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      text: "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      id: 2,
      text: "Drive innovation through data-driven decision-making strategies",
    },
    {
      id: 3,
      text: "Optimize business processes with actionable insights",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-3/4">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`w-full max-w-full ${
            index === currentSlide ? "" : "hidden"
          }`}
        >
          <p className="text-4xl font-medium text-manrope py-8">{slide.text}</p>
        </div>
      ))}
      <div className="flex mt-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-2 h-2 mx-1 rounded-full cursor-pointer ${
              index === currentSlide
                ? "bg-[#2DA950]"
                : "bg-[#E4E3E3] hover:bg-[#CAD0CB]"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
