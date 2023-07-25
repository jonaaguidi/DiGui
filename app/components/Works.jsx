import Image from "next/image";
import { styles } from "../styles";
import { projects } from "../constants/index.js";
import { BsLink, BsGithub } from "react-icons/bs";

const Works = () => {
  return (
    <div id="work" className="w-full overflow-hidden flex justify-center items-center flex-col mt-20 mb-24 px-10">
      <p className={styles.sectionSubText}>¿Cuáles son mis Proyectos?</p>
      <h2 className={`${styles.sectionHeadText} border-b-2 border-[#DD1D43]`}>Mis Proyectos</h2>
      <div className="flex gap-8 mt-12 px-8 max-w-7xl">
        {projects.map((project) => (
          <div key={project.name} className="h-fit flex flex-col items-center min-w-xs max-w-sm px-4  py-6 bg-[#DD1D43] rounded-2xl">

            <Image
              src={project.image}
              alt={project.name}
              className="object-contain h-auto w-80 rounded-xl mb-4"
            />

            <div>
              <h3 className=" text-lg text-left font-semibold">{project.name}</h3>
              <p className="text-xs">{project.description}</p>
            </div>

            <div className="flex gap-5 mt-6">
              <button class="bg-primary text-sm font-semibold text-white py-2 px-4 rounded-2xl cursor-pointer">
                <a className="flex items-center gap-2" target="no_blank" rel="noreferrer" href="https://drive.google.com/file/d/1vaBDm4RDSsao1hSIUsI9kKupRUT4AUjy/view?usp=drive_link">
                <BsGithub className="text-lg"/>Github</a>
              </button>
              <button class="bg-primary text-sm font-semibold text-white py-2 px-4 rounded-2xl cursor-pointer">
                <a className="flex items-center gap-2" href="#contact">
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
