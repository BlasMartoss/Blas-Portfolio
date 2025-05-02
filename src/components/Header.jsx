import { useState } from "react";
import MenuLogo from "../assets/images/logo.png";
import "../styles/Style.css";
const Header = () => {
  const [cross, setCross] = useState(false);

  const display_cross = () => {
    setCross(!cross);
  };

  return (
    <header id="hero" className="mx-auto w-11/12 md:w-10/12 lg:max-w-[1000px]">
      <div className="bg-[#0E141B] min-h-16 py-1 flex  justify-between items-center w-full">
        <div className="px-4 w-20 flex justify-center">
          <img
            className="w-20 min-w-[80px] cursor-pointer"
            src={MenuLogo}
            alt="Logo"
          />
        </div>
        <nav className="text-white hidden md:flex lg:flex  items-center font-serif  ">
          <ul className="flex items-center gap-7 h-full text-[18px] px-2.5">
            <a href="#hero">
              <li className="hover:text-gray-500">Inicio</li>
            </a>
            <a href="#skills">
              <li className="hover:text-gray-500">Habilidades</li>
            </a>
            <a href="#projects">
              <li className="hover:text-gray-500">Proyectos</li>
            </a>
            <a href="#certifications">
              <li className="hover:text-gray-500">Certificaciones</li>
            </a>
          </ul>
        </nav>
        <div className="lg:hidden md:hidden absolute right-0 sm:right-4 mr-4  cursor-pointer ">
          <button
            id="burger_button"
            className="bg-red-400"
            onClick={display_cross}
          >
            <div
              id="first_burger_div"
              style={{
                transform: cross ? "rotate(38deg)" : "rotate(0)",
              }}
            ></div>
            <div
              id="second_burger_div"
              style={{
                opacity: cross ? "0" : "1",
              }}
            ></div>
            <div
              id="third_burger_div"
              style={{
                transform: cross ? "rotate(-38deg)" : "rotate(0)",
              }}
            ></div>
          </button>
        </div>
      </div>

      <div
        className={`${
          cross ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
        } transition-all duration-300 ease-in-out absolute z-50 w-11/12 md:w-10/12 lg:max-w-[1000px] bg-[#0E141B] py-5 md:hidden lg:hidden font-serif`}
      >
        <nav className="">
          <ul className="text-white text-[20px] ">
            <a href="#hero">
              <li className="border-b border-white pb-1 mb-5 hover:text-gray-500 hover:border-gray-500">
                Inicio
              </li>
            </a>
            <a href="#skills">
              <li className="border-b border-white pb-1 mb-5 hover:text-gray-500 hover:border-gray-500">
                Habilidades
              </li>
            </a>
            <a href="#projects">
              <li className="border-b border-white pb-1 mb-5 hover:text-gray-500 hover:border-gray-500">
                Proyectos
              </li>
            </a>
            <a href="#certifications">
              <li className="border-b border-white pb-1 mb-5 hover:text-gray-500 hover:border-gray-500">
                Certificaciones
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
