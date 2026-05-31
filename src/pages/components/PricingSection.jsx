import { useState } from "react";
export default function PricingSection() {
  const [plan, setPlan] = useState("monthly");
  const prices = {
    monthly: [59, 69, 99],
    yearly: [590, 690, 990],
  };
  return (
    <section
      className="w-full py-[100px] text-white bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Background.svg')",
      }}
    >
      <div className="container pricing__container mx-auto px-4 text-center">
        <p className="mb-2 text-[16px]">Our Pricing</p>
        <h2 className="text-[36px] font-bold mb-6">
          Choose From Our Lowest Plans and Prices
        </h2>
        <div className="flex justify-center mb-10">
          <div className="bg-white text-black rounded-full flex p-1">
            <button
              onClick={() => setPlan("monthly")}
              className={`px-6 py-2 rounded-full transition ${
                plan === "monthly"
                  ? "bg-[#36B864] text-white"
                  : "text-black"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setPlan("yearly")}
              className={`px-6 py-2 rounded-full transition ${
                plan === "yearly"
                  ? "bg-[#36B864] text-white "
                  : "text-black"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {["Basic", "Enterprise", "Premium"].map((title, i) => (
    <div
      key={i}
      className={`p-6 md:p-8 rounded-2xl transition duration-300 ${
        i === 1
          ? "bg-[#36B864] text-white scale-105 shadow-2xl"
          : "bg-white text-black shadow-lg hover:shadow-2xl"
      }`}
    >
      <h3 className="font-bold mb-4 text-lg md:text-xl">
        {title} Package
      </h3>

      <p className="text-2xl md:text-3xl font-bold mb-4">
        ${prices[plan][i]} / {plan}
      </p>

      <ul className="text-sm mb-6 space-y-2">
        <li>• Cleaning of all surfaces</li>
        <li>• Vacuuming carpets</li>
        <li>• Bathroom cleaning</li>
        <li>• Kitchen cleaning</li>
      </ul>

      <button
        className={`w-full py-3 rounded-lg transition ${
          i === 1
            ? "bg-white text-[#36B864] hover:bg-green-100"
            : "bg-[#36B864] text-white hover:bg-green-600"
        }`}
      >
        Book Now
      </button>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
