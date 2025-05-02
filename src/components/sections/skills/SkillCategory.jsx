import React from "react";

function SkillCategory({ title, skills, mainIcon }) {
  return (
    <div
      id="skills_container"
      className=" bg-white flex flex-col  items-center  rounded-2xl border-1 border-gray-200  p-5"
    >
      <img src={mainIcon} className="w-10 h-10" />
      <h2 className="text-[22px] pb-10 text-white">{title}</h2>

      <div className="grid grid-cols-3 gap-3 items-center justify-items-center mx-auto ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition transform hover:-translate-y-1 duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10   object-contain"
            />
            <span className="text-[15px] mt-2 pb-5 text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCategory;
