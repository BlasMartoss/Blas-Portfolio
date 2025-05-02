import React from "react";
import LinkIcon from "../../assets/icons/link.png";
import certificationsData from "../certifications/CertificationsData";

function Certifications() {
  return (
    <section id="certifications" className="py-5 pb-10 ">
      <div className="mx-auto w-11/12 md:w-10/12 lg:max-w-[1000px] flex justify-content-center flex-col">
        <h2 className="text-white text-[30px]">Certificaciones</h2>
        <p className="text-[#FFFFFF99] mb-5">
          Aquí puedes encontrar mis logros y certificaciones
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
          {certificationsData.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="border-1 border-gray-50 p-5 rounded-2 rounded block hover:bg-white/5 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-2">
                <div className=" w-[95%]">
                  <h3 className="text-white text-[18px]">{cert.title}</h3>
                  <p className="text-[#FFFFFF99] text-[15px]">
                    {cert.description}
                  </p>
                </div>

                <img
                  className="h-5 min-w-5 w-auto object-contain"
                  src={LinkIcon}
                  alt="Link icon"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
