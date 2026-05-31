import double__image from "../../../public/images/double__image.svg";
export default function QualitySection() {
  return (
    <section className="py-16 px-4 mb-[75px]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-500 text-sm font-medium mb-4">
            Affordable cleaning solutions
          </p>
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-6">
            High-Quality and Friendly Services at Fair Prices
          </h1>
          <p className="text-gray-600 text-sm md:text-lg mb-8">
            We provide comprehensive cleaning services tailored to your needs.
            From residential cleaning services.
          </p>
          <button className="bg-[#36B864] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
            Get a quote
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src={double__image}
            alt="quality"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}