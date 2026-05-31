export default function HeaderNavbar() {
  const links = [
    "Home",
    "About us",
    "Service",
    "Blog",
    "Contact",
  ];

  return (
    <ul className="flex items-center gap-[40px]">
      {links.map((item, i) => (
        <li key={i} >
          <a
            href="#"
            className="text-[16px] font-medium text-[#4D4D4D] hover:text-[#36B864] transition duration-300 relative group"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#36B864] transition-all duration-300 group-hover:w-full"></span> 
          </a>
        </li>
      ))}
      <button className=" border border-b-emerald-700 bg-[#36B864] text-white px-[28px] py-[12px] rounded-[6px] hover:bg-green-600 transition ml-52">
        Get a quote
      </button>
    </ul>
    
  );
}
