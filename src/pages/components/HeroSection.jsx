import hero__image from "../../../public/images/hero__image.svg";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center mb-[75px]">
      <img
        src={hero__image}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 container mx-auto px-6 md:px-8 lg:px-4">
        <div className="max-w-xl text-center lg:text-left">
          <p className="text-sm md:text-base text-[#111D15] mb-3">
            Quality cleaning at a fair price.
          </p>
          <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-[#111D15] mb-6">
            Specialized, efficient, and thorough cleaning services
          </h2>
          <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-8">
            We provide performing cleaning tasks using the least amount of time,
            energy, and money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-[#36B864] text-white px-8 py-3 rounded-md font-medium 
            hover:bg-green-600 active:scale-95 transition-all duration-300 shadow-md 
            hover:shadow-green-300/50">
              Get Started
            </button>
            <button className="border border-black text-black px-8 py-3 rounded-md font-medium 
            hover:bg-black hover:text-white transition-all duration-300">
              View All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
