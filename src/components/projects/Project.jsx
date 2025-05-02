import React, { Component } from "react";
import Github from "../../assets/icons/github_but.png";
import Link from "../../assets/icons/link.png";

export class Project extends Component {
  render() {
    const { type, name, description, codeLink, viewLink, image, skills } =
      this.props;

    return (
      <div>
        <div className="flex flex-col-reverse lg:flex-row gap-5 mb-20 lg:w-[100%] ">
          {/* Información del proyecto */}
          <div className="lg:w-[50%]">
            <p className="text-[#5E17EB] md:text-[16px] text-[14px] font-bold mb-2">
              {type}
            </p>
            <h2 className="text-[30px] text-white md:text-3xl mb-5">{name}</h2>
            <p className="pb-2 text-[#FFFFFF99]">{description}</p>

            {/* Botones de Código y Vista */}
            <div className="flex gap-5 mt-5">
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#5E17EB] text-[15px] items-center text-white flex justify-center gap-2 cursor-pointer rounded-[5px] px-5 py-1">
                  <img className="w-5 h-5" src={Github} alt="Github Icon" />
                  Code
                </button>
              </a>
              <a href={viewLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#5E17EB] text-[15px] items-center text-white flex justify-center gap-2 cursor-pointer rounded-[5px] px-5 py-1">
                  <img className="w-5 h-5" src={Link} alt="View Icon" />
                  View
                </button>
              </a>
            </div>

            {/* Skills dinámicas */}
            <div className="mb-10 inline-flex flex-wrap gap-5 mt-10 px-4 py-2 text-white border-1 rounded-2xl text-[15px] font-semibold w-fit">
              {skills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>

          {/* Imagen del proyecto */}
          <div className="lg:w-[70%] flex justify-center ">
            <img className="rounded-[5px]" src={image} alt={name} />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
