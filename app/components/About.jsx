import React from 'react';
import { styles } from '../styles';
import Image from 'next/image';
import JonaIA from "../../public/JonaIA.jpg";
import { BsGithub, BsLinkedin, BsTwitter, BsFillEnvelopeFill } from "react-icons/bs";


const About = () => {
  return (
    <div id='about' className='w-full px-10 mt-18 mb-24 flex flex-col items-center gap-14 md:flex-row justify-center'>
      <div className="flex flex-col" >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
        <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>
      <div className='mt-6 flex gap-4'>
        <BsLinkedin href='https://www.linkedin.com/in/jonathanguidi/' className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43]' />
        <BsGithub href='https://github.com/jonaaguidi' className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43]'/>
        <BsTwitter href='https://twitter.com/JonaaGuidi' className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43]' />
        <BsFillEnvelopeFill id='contact' className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-[#DD1D43]' />
      </div>
      </div>

      <div className='animate-pulse2 bg-[#DD1D43] rounded-full p-6 flex justify-center items-center md:ml-6 md:order-first '>
        <div className='animate-pulse2 bg-tertiary rounded-full p-2   md:order-first '>
          <Image className='rounded-full' src={JonaIA} alt='Avatar' width={300} height={300} />
        </div>
      </div>


    </div>
  );
};

export default About;
