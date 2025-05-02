import React, { Component } from "react";
import Project from "../projects/Project";
import projectsData from "../projects/ProjectsData";

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "Todos",
    };
  }

  handleFilterChange = (type) => {
    this.setState({ selectedType: type });
  };

  render() {
    const { selectedType } = this.state;

    const filteredProjects =
      selectedType === "Todos"
        ? projectsData
        : projectsData.filter(
            (project) =>
              project.type.toLowerCase() === selectedType.toLowerCase()
          );

    const filters = ["Todos", "Fullstack", "Frontend", "Backend"];

    return (
      <section id="projects" className="py-10">
        <div className="mx-auto w-11/12 md:w-10/12 lg:max-w-[1000px]">
          <p className="text-[#5E17EB] md:text-[16px] text-[14px] font-bold mb-2">
            PROYECTOS
          </p>
          <h2 className="text-[30px] text-white md:text-3xl mb-2 font-bold">
            Mis proyectos destacados
          </h2>

          {/* Filtros */}
          <div className="inline-flex flex-wrap gap-5 mb-5 md:mb-20 mt-4 text-white border-1 px-5 py-2 text-[15px] rounded-2xl">
            {filters.map((type) => (
              <p
                key={type}
                className={`cursor-pointer hover:text-gray-400 ${
                  selectedType === type ? "text-gray-400 font-semibold" : ""
                }`}
                onClick={() => this.handleFilterChange(type)}
              >
                {type}
              </p>
            ))}
          </div>

          {filteredProjects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
