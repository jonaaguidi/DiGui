import React from 'react'
import { styles } from '../styles'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import JonaIA from "../../public/JonaIA.jpg";

const Stack = () => {
    return (
        <div className='w-full overflow-hidden flex justify-center items-center flex-col mt-20 mb-24 px-10'>
            <p className={styles.sectionSubText}>¿Que Tecnologias utilizo?</p>
            <h2 className={styles.sectionHeadText}>Mis Herramientas</h2>

            <Marquee className='bg-whitesmoke p-5 mt-8' speed={80} delay={1} pauseOnHover={true} >
            <div className='flex gap-4' >
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                <Image src={JonaIA} alt='Jona' width={160} height={180} />
                </div>
            </Marquee>

        </div>
    )
}

export default Stack;