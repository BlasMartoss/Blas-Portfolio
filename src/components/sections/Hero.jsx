import React from "react";

import Image from "../../assets/images/moon.png";
import Linkedin from "../../assets/icons/Linkedin_icon.png";
import Github from "../../assets/icons/Github_icon.png";
import Email from "../../assets/icons/Email_icon.png";
import Arrow from "../../assets/icons/right-arrow.png";
function Hero() {
  return (
    <section className="py-[7%] ">
      <div className="mx-auto w-11/12 md:w-10/12 lg:max-w-[1000px] flex flex-col-reverse  lg:flex-row">
        <div className=" lg:w-[60%] mt-[30px] md:mt-[0]">
          <p className="text-[#5E17EB] text-[18px] xl:text-[20px]">
            Bienvenido{" "}
            <span class="wave" style={{ fontSize: "20px" }}>
              👋
            </span>
          </p>
          <div class="container-text">
            <h1 className="text-white text-[35px] xl:text-[45px]">
              Adaptando <span id="gradientText">Conceptos</span> en <br />
              <span class="sec-text">Experiencias Impactantes</span>
            </h1>
          </div>
          <p className=" mt-2 text-[15px] xl:text-[18px] text-[#FFFFFF99]">
            ¡Hola! Soy
            <span className="text-[#874dfc] font-semibold"> Blas Martos</span>,
            desarrollador Full Stack Junior con pasión por la creación de
            soluciones web. Mi experiencia abarca múltiples{" "}
            <span className="text-[#874dfc] font-semibold">
              lenguajes y frameworks
            </span>
            , y estoy enfocado en desarrollar aplicaciones eficientes y de{" "}
            <span className="text-[#874dfc] font-semibold">alta calidad</span>.
            Siempre busco nuevos retos para seguir creciendo como profesional.
          </p>
          <div className="flex flex-rwo gap-5 my-3">
            <a
              href="#projects"
              className="text-[18px] text-white bg-[#6109efe3] px-5 py-1 rounded rounded-2 cursor-pointer flex gap-2 items-center hover:bg-[#6109eff4]"
            >
              <p className="text-[14px] md:text-[18px]">Mis Proyectos</p>
              <img className="h-5" src={Arrow} alt="Right arrow" />
            </a>
            <a
              href="/cv/CV_BlasMartos.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] text-white border border-gray px-5 py-1 rounded rounded-2 cursor-pointer hover:border-gray-300 hover:text-gray-300"
            >
              <p className="text-[14px] md:text-[18px]">Descargar CV</p>
            </a>
          </div>
          <div className="flex gap-5 py-2">
            <a
              href="https://www.linkedin.com/in/blas-martos-ortega/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 transition transform hover:-translate-y-1 duration-300"
                src={Linkedin}
                alt="Icono Linkedin"
              />
            </a>
            <a
              href="https://github.com/BlasMartoss"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-8 transition transform hover:-translate-y-1 duration-300"
                src={Github}
                alt="Icono Github"
              />
            </a>
            <a href="mailto:bmartosortega@gmail.com">
              <img
                className="h-8  transition transform hover:-translate-y-1 duration-300"
                src={Email}
                alt="Icono Email"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center  lg:w-[50%]">
          <img
            className="animate-float  min-w-[300px] w-[300px] h-[300px] "
            src={Image}
            alt="Imagen"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
