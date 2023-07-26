import React from 'react';
import { styles } from '../styles';
import Image from 'next/image';
import JonaIA from "../../public/JonaIA.jpg";
import { BsGithub, BsLinkedin, BsTwitter, BsFillEnvelopeFill } from "react-icons/bs";


const About = () => {
  return (
    <div id='about' className='w-full px-10 mt-18 mb-24 flex flex-col items-center gap-14 md:flex-row justify-center'>
      <div className="flex flex-col" >
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Sobre Mi</h2>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
        <div className='mt-8 flex gap-4'>
          <a href='https://www.linkedin.com/in/jonathanguidi/' target='blank' rel='noreferrer'>
            <BsLinkedin className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43] hover:scale-110' />
          </a>
          <a href='https://github.com/jonaaguidi' target='blank' rel='noreferrer'>
            <BsGithub className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43] hover:scale-110' />
          </a>
          <a href='https://twitter.com/JonaaGuidi' target='blank' rel='noreferrer'>
            <BsTwitter className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43] hover:scale-110' />
          </a>
          <a id='contact' target='blank' rel='noreferrer'>
            <BsFillEnvelopeFill className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43] hover:scale-110' />
          </a>
        </div>
      </div>

      <div className='animate-pulse2 bg-[#DD1D43] rounded-full p-6 flex justify-center items-center md:ml-6 md:order-first '>
        <div className='animate-pulse2 bg-tertiary rounded-full p-2  md:order-first '>
          <Image className='rounded-full' src={JonaIA} alt='Avatar' width={300} height={300} />
        </div>
      </div>


    </div>
  );
};

export default About;
