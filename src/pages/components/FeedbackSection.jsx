import marlon from "../../../public/images/marlon.jpg";
import Image from "../../../public/images/Image.jpg";
import human2 from "../../../public/images/human2.jpg";
import { useEffect, useState } from "react";
export default function SliderSection() {
  const data = [
    {
      name: "Robert Fox",
      role: "Business Man",
      text: "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service",
      img: marlon,
    },
    {
      name: "John Smith",
      role: "Entrepreneur",
      text: "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.",
      img: Image,
    },
    {
      name: "Notah Wavatam",
      role: "WEB Programmer",
      text: "Excellent service! The team was punctual, thorough, and left my home sparkling clean. Highly recommend for anyone needing a reliable and detailed cleaning service.",
      img: human2,
    },
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 pt-[100px] px-4 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center mt-[77px] mb-[75px]">
      <div className="max-w-md text-center lg:text-left">
        <h2 className="text-2xl md:text-4xl font-semibold">
          Feedback About Their Experience With Us
        </h2>
        <p className="text-gray-500 mt-4">
          Read testimonials from our satisfied clients.
        </p>

        <div className="flex gap-3 mt-6 justify-center lg:justify-start">
          <button
            onClick={prev}
            className="w-10 h-10 border rounded-lg flex items-center justify-center"
          >
            ←
          </button>
          <button
            onClick={next}
            className="w-10 h-10 bg-[#36B864] text-white rounded-lg flex items-center justify-center"
          >
            →
          </button>
        </div>
      </div>
      <div className="w-full max-w-xl">
        <div className="bg-white p-6 rounded-2xl shadow relative transition-all transition-all duration-50">
          <div className="flex gap-4 items-center">
            <img
              src={data[index].img}
              className="w-20 h-20 rounded-xl object-cover"
            />

            <div>
              <h4 className="font-semibold">{data[index].name}</h4>
              <p className="text-sm text-gray-500">{data[index].role}</p>
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm">{data[index].text}</p>
          <div className="absolute top-4 right-4 bg-[#36B864] text-white w-10 h-10 flex items-center justify-center rounded-lg">
            ❝
          </div>
        </div>
      </div>
    </section>
  );
}