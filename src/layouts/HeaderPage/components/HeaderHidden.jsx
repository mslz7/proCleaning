export default function HeaderHidden({ open, setOpen }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] transition-all duration-500 ${
        open
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }`}
    >
      <div
        className={`absolute top-0 right-0 w-full h-screen bg-[#111D15]
        transition-transform duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <h2 className="text-white text-xl font-bold">
            ProCleaning
          </h2>

          <button
            onClick={() => setOpen(false)}
            className="text-white text-4xl"
          >
            ×
          </button>
        </div>
        <ul className="flex flex-col items-center gap-8 mt-20">
          <li>
            <a href="#" className="text-white text-2xl">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Why us
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Service
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Prices
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Feedback
            </a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-center mt-12">
          <button className="bg-[#36B864] text-white px-8 py-3 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}