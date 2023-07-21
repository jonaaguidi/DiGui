import { motion } from "framer-motion"
import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#DD1D43]' />
          <div className='w-1 sm:h-80 h-40 red-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, Im <span className='text-[#DD1D43]'>Jonathan🤝</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop User Interfaces📲 <br className="sm:block hidden" />and Web Applications💻 following the best practices✔️
          </p>
          <div className="flex gap-5 mt-6">
            <button class="bg-[#DD1D43] text-white py-2 px-4 rounded-2xl cursor-pointer hover:btn-hero z-50">
              <a target="no_blank" rel="noreferrer" href="https://drive.google.com/file/d/1hJge5a3NNa_Eg18tOPuIlOvBf0h2wZ4C/view?usp=drive_link">Ver CV 📄</a>
            </button>
            <button class="bg-[#DD1D43] text-white py-2 px-4 rounded-2xl cursor-pointer hover:btn-hero z-50">
              <a href="#contact">Contacto 📩</a>
            </button>
          </div>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero