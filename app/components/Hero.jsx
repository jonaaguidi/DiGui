import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"
import Scroll from "./Scroll"

const Hero = () => {
  return (
    <>
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#DD1D43]' />
          <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
         Hola, Soy <span className='text-[#DD1D43]'>Jonathan🤝</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Desarrollo Interfaces de usuario 📲 <br className="sm:block hidden" />y Aplicaciones Web💻 siguiendo las mejores practicas✔️
          </p>
          <div className="flex gap-5 mt-6">
            <button class="bg-[#DD1D43] text-white py-2 px-4 rounded-2xl cursor-pointer hover:btn-hero z-40">
              <a target="no_blank" rel="noreferrer" href="https://drive.google.com/file/d/1vaBDm4RDSsao1hSIUsI9kKupRUT4AUjy/view?usp=drive_link">CV 📄</a>
            </button>
            <button class="bg-[#DD1D43] text-white py-2 px-4 rounded-2xl cursor-pointer hover:btn-hero z-40">
              <a href="#contact">Contact 📩</a>
            </button>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <Scroll />
    </section>
    </>
  )
}

export default Hero