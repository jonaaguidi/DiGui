import { styles } from '../styles'
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import { technologies } from '../constants';

const Stack = () => {
    return (
        <div className='w-full overflow-hidden flex justify-center items-center flex-col mt-20 mb-24 px-10'>
            <p className={styles.sectionSubText}>¿Que Tecnologias utilizo?</p>
            <h2 className={`${styles.sectionHeadText} border-b-2 border-[#DD1D43]`}>Mi Tech Stack</h2>
            <Marquee className='p-6 mt-8' speed={90} delay={1} pauseOnHover={true} >
                <div className='flex gap-8 cursor-pointer' >
                    {technologies.map((tech) => (
                        <div key={tech.name} className='flex flex-col justify-center align-middle'>
                            <Image src={tech.icon} alt={tech.name} width={120} height={120} />
                            <p className='text-center pt-2'>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </Marquee>

        </div>
    )
}

export default Stack;