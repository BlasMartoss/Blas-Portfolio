import React from "react";
import SkillCategory from "./SkillCategory";
import SkillsData from "./SkillsData";
const SkillsSection = () => {
  return (
    <section id="skills" className=" flex items-center text-center justify-center flex-col p-8 md:pt-5  ">
      <div className="mx-auto w-11/12 md:w-10/12 lg:max-w-[1000px]">
        <h2 className="text-[30px] text-white md:text-[30px] font-bold pt-8">
          Habilidades
        </h2>
        <p className="text-[20px] text-[#FFFFFF99] md:text-[20px] pt-4 pb-15">
          Estas son las tecnologías con las que tengo experiencia y
          conocimiento.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10">
          {SkillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              mainIcon={category.mainIcon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
