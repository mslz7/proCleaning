import { Outlet } from "react-router-dom";
import FooterPage from "./layouts/FooterPage/FooterPage";
import HeaderPage from "./layouts/HeaderPage/HeaderPage";
import { useEffect, useState } from "react";

export default function App(){
   const [showScroll,setSowScroll]= useState(false);
  const moveTop = () => {
    window.scrollTo({top:0, behavior: "smooth"});
  };

  useEffect(() => {
  const handleScroll = () => {
    console.log(window.scrollY);
    setShowScroll(window.scrollY > 100);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  return(
    <>
    <main>
      <HeaderPage/>
      <Outlet/>
      <FooterPage/>
      <button onClick={moveTop}
  className={`scrollUp__button flex justify-center items-center
  ${showScroll ? "show-scroll" : ""}`}>
        <i 
        className="fa-solid fa-arrow-up fa-sm fa-beat-fade" 
        style= {{color: "rgb(0, 0, 0)"}}
        >
        </i>
      </button>
    </main>
    </>
  )
}