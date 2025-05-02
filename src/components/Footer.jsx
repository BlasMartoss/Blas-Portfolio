import React, { Component } from "react";
import MenuLogo from "../assets/images/logo.png";
import Linkedin from "../assets/icons/Linkedin_white.png";
import Github from "../assets/icons/Github_white.png";
import Email from "../assets/icons/Email_white.png";

export class Footer extends Component {
  render() {
    return (
      <section className="bg-[#0E141B] px-[10%] flex flex-col items-center pb-5">
        <div className="flex flex-col md:flex-row justify-between border-b-1 border-white items-center w-11/12 md:w-10/12 lg:max-w-[1000px] pb-10 md:pb-0">
          <div>
            <img
              className="min-w-[200px] h-[200px]"
              src={MenuLogo}
              alt="Icono Blas Martos"
            />
          </div>
          <div>
            <p className="text-[20px] mb-5 text-white">Contacta conmigo.</p>
            <div className="flex gap-5 ">
              <a
                href="https://www.linkedin.com/in/blas-martos-ortega/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 transition transform hover:-translate-y-1 duration-300  cursor-pointer"
                  src={Linkedin}
                  alt=""
                />
              </a>

              <a
                href="https://github.com/BlasMartoss"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 transition transform hover:-translate-y-1 duration-300  cursor-pointer"
                  src={Github}
                  alt=""
                />
              </a>
              <a
                href="mailto:bmartosortega@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-10 transition transform hover:-translate-y-1 duration-300  cursor-pointer"
                  src={Email}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-[20px] mt-5 text-white ">Made by Blas Martos</p>
      </section>
    );
  }
}

export default Footer;
