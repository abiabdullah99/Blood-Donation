import React, { useEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import logo from '../../../Assets/logo.png'

const Navbar = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <>
      <header
        className={`${bg ? 'bg-gradient-to-r from-[#722ab5e4] via-[#16264ac1] to-[#6d1851eb] h-20' : 'h-24'
          } flex items-center fixed top-0 w-full px-5 text-white z-10 transition-all duration-300`}
      >
        <div className='w-9/12 mx-auto h-full flex items-center justify-between'>
          <div className="flex items-center  -mt-6">
            <img src={logo} className="w-14" alt="" />
            <h1 className="text-2xl text-white font-bold font-mono">BLOOD <span className='text-primary'>AI</span></h1>
          </div>
          <div className='hidden lg:block'>
            <DesktopNav ></DesktopNav>
          </div>
          <div className='lg:hidden'>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;