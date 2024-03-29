import React, { useState } from 'react';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../../public/assets';
import Image from 'next/image';

const Navbar = () => {
  // Estado para Links del NavBar
  const [active, setActive] = useState(``);
  // Estado Toggle para Abrir y Cerrar el Menú Responsive
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 bg-primary z-50`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <a href="/" className='flex items-center gap-2' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <Image src={logo} alt='logo' className='w-10 h-10 object-contain hover:btn-hover_scale' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>Jonathan Guidi &nbsp;</p>
        </a>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-[#DD1D43]" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
        </div>
        <div className={`${!toggle ? "hidden" : "flex"
          } p-6 bg-[#DD1D43] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-50 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                  }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.title);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

