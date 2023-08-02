import React from 'react'
import logov2 from "../../public/logo2.svg"
import { BsFillEnvelopeFill, BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bg-[#DD1D43] p-4'>
            <div className='flex justify-center items-center gap-4 pb-6 pt-2 border-b-2 '>
                <Image src={logov2} alt="logo" className='w-14 h-14' />
                <p className="text-white font-bold">Jonathan Guidi - Frontend Developer</p>
            </div>

            <div className='mt-8 flex items-center justify-center gap-4'>
                <a href='https://www.linkedin.com/in/jonathanguidi/' target='blank' rel='noreferrer'>
                    <BsLinkedin className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-primary hover:scale-110' />
                </a>
                <a href='https://github.com/jonaaguidi' target='blank' rel='noreferrer'>
                    <BsGithub className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-primary hover:scale-110' />
                </a>
                <a href='https://twitter.com/JonaaGuidi' target='blank' rel='noreferrer'>
                    <BsTwitter className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-primary hover:scale-110' />
                </a>
                <a id='contact' target='blank' rel='noreferrer'>
                    <BsFillEnvelopeFill className='text-white cursor-pointer w-8 h-8 hover:btn-hero hover:text-primary hover:scale-110' />
                </a>
            </div>
        </div>
    )
}

export default Footer