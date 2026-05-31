import double2__image from "../../../public/images/double2__image.svg"
export default function CompanySection() {
  return (
    <section className="w-full py-16 px-4 mb-[75px]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img
            src={double2__image}
            alt="cleaning"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Welcome To Our Pro-cleaning Company!
          </h2>
          <p className="text-gray-600 mb-6">
            We make your space shine! Professional and reliable cleaning service company providing top-notch solutions for homes and businesses.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {[
              "Vetted professionals",
              "Affordable Prices",
              "Next day availability",
              "Best Quality",
              "Standard cleaning tasks",
              "Affordable Prices",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#36B864] text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
              Book Now
            </button>
            <button className="border px-6 py-3 rounded-lg hover:bg-gray-200 transition">
              Know More
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}