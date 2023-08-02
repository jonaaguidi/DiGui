import Image from "next/image";
import { styles } from "../styles";
import { projects } from "../constants/index.js";
import { BsLink, BsGithub } from "react-icons/bs";

const Works = () => {
  return (
    <div id="projects" className="w-full overflow-hidden flex justify-center items-center flex-col mt-20 mb-24 px-10">
      <p className={styles.sectionSubText}>¿Cuáles son mis Proyectos?</p>
      <h2 className={`${styles.sectionHeadText} border-b-2 border-[#DD1D43]`}>Mis Proyectos</h2>
      <div className="flex flex-col justify-center gap-8 mt-12 py-6  max-w-7xl xl:flex-row">
        {projects.map((project) => (

          <div key={project.name} className="h-[fit] flex flex-col items-center min-w-xs max-w-sm px-6 py-8 bg-[#DD1D43] rounded-2xl boxsh-cards">

            <Image
              src={project.image}
              alt={project.name}
              className="object-contain h-auto w-80 rounded-xl mb-4"
            />

            <div>
              <h3 className=" text-lg text-left font-semibold py-1">{project.name}</h3>
              <p className="text-xs">{project.description}</p>
            </div>

            <div className="flex gap-6 mt-6">
              <button className="bg-primary text-sm font-semibold text-white py-2 px-4 rounded-2xl cursor-pointer hover:btn-hover_color">
                <a className="flex items-center gap-2" target="no_blank" rel="noreferrer" href={project.source_code_link}>
                  <BsGithub className="text-lg" />Github</a>
              </button>
              <button className="bg-primary text-sm font-semibold text-white py-2 px-4 rounded-2xl cursor-pointer hover:btn-hover_color">
                <a target="no_blank" rel="noreferrer" className="flex items-center gap-2" href={project.deploy}>
                  <BsLink className="text-lg" />Deploy
                </a>
              </button>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
};

export default Works;
