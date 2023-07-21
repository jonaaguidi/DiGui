import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';
import Image from 'next/image';
import JonaIA from "../../public/JonaIA.jpg";

const About = () => {
  return (
    <motion.div id='about' className='w-full px-10 mt-4 flex flex-col items-center gap-12 md:flex-row justify-center'>
      <motion.div className="flex flex-col" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </motion.p>
      </motion.div>

      <div className='animate-pulse2 bg-[#DD1D43] rounded-full p-6 flex justify-center items-center md:ml-6 md:order-first '>
        <Image className='rounded-full' src={JonaIA} alt='Avatar' width={300} height={300} />
      </div>
    </motion.div>
  );
};

export default About;
