// Backend Icons
import Backend from "../../../assets/icons/Backend_icon.png";
import CSharpIcon from "../../../assets/icons/Csharp_icon.png";
import JavaIcon from "../../../assets/icons/Java_icon.png";
import PythonIcon from "../../../assets/icons/Python_icon.png";
import Net from "../../../assets/icons/Net_icon.png";
import SQLServerIcon from "../../../assets/icons/SQLServer_icon.png";

// Frontend Icons
import Frontend from "../../../assets/icons/Frontend_icon.png";

import JavaScript from "../../../assets/icons/JavaScript_icon.png";
import React from "../../../assets/icons/React_icon.png";
import Bootstrap from "../../../assets/icons/Bootstrap_icon.png";
import Tailwind from "../../../assets/icons/Tailwind_icon.png";
import Html from "../../../assets/icons/HTML_icon.png";
import Css from "../../../assets/icons/CSS_icon.png";

// Tools Icons

import Tools from "../../../assets/icons/Herramientas_Icon.png";
import Windows from "../../../assets/icons/Windows_icon.png";
import Linux from "../../../assets/icons/Linux_icon.png";
import Wordpress from "../../../assets/icons/Wordpress_icon.png";
import VisualStudio from "../../../assets/icons/VS_icon.png";
import VisualStudioCode from "../../../assets/icons/VSC_icon.png";



const SkillsData = [
  {
    mainIcon: Backend,
    title: "Backend",
    skills: [
      { name: "C#", icon: CSharpIcon },
      { name: "Java", icon: JavaIcon },
      { name: "Python", icon: PythonIcon },
      { name: ".NET", icon: Net },
      { name: "SQL Server", icon: SQLServerIcon },
    ],
  },
  {
    mainIcon: Frontend,
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: JavaScript },
      { name: "HTML", icon: Html },
      { name: "CSS", icon: Css },
      { name: "Tailwind", icon: Tailwind },
      { name: "Bootstrap", icon: Bootstrap },
      { name: "React", icon: React },
    ],
  },
  {
    mainIcon: Tools,
    title: "Herramientas",
    skills: [
      { name: "Windows", icon: Windows },
      { name: "Linux", icon: Linux },
      { name: "Wordpress", icon: Wordpress },
      { name: "VS", icon: VisualStudio },
      { name: "VSC", icon: VisualStudioCode },
    ],
  },
];

export default SkillsData;
