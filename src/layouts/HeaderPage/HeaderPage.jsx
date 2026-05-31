import { useState, useEffect } from "react";
import HeaderLogo from "./components/HeaderLogo";
import HeaderNavbar from "./components/HeaderNavbar";
import HeaderButton from "./components/HeaderButton";
import HeaderHidden from "./components/HeaderHidden";
export default function HeaderPage() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md 
      transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex justify-between items-center px-6 py-3 md:px-8 xl:px-4">
        <HeaderLogo />
        <div className="hidden lg:flex">
          <HeaderNavbar />
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <HeaderButton />
          </div>
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>
      <HeaderHidden open={open} setOpen={setOpen} />
    </header>
  );
}