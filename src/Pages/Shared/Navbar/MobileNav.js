import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsMenuButtonWide } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';

const MobileNav = () => {

  const navigation = <>
    <li className=' text-black  cursor-pointer uppercase'>
    </li> : <li className=' text-secondary  cursor-pointer uppercase'><Link to='/login'
      className='transition-all duration-300 '> Login</Link></li>
    <li className=' text-black  cursor-pointer'>
      <Link to='/home' className='transition-all duration-300 uppercase'> Home</Link></li>
    <li className=' text-black transition-all duration-300 cursor-pointer uppercase'>
      <div className="dropdown dropdown-hover">
        <label id="0" className=" m-1">Portfolio</label>
        <ul id="0" className="dropdown-content rounded menu p-2 shadow drop-bg     text-black w-52">
          <li className=' text-secondary cursor-pointer uppercase'><Link to='/gallery'
            className='transition-all duration-300 hover:bg-primary hover:text-black'>Event Gallery</Link></li>
          <li className=' text-secondary cursor-pointer uppercase'><Link to='/blogslike'
            className='transition-all duration-300 hover:bg-primary hover:text-black'>Blogs</Link></li>
          <li className=' text-secondary cursor-pointer uppercase'><Link to='/donate'
            className='transition-all duration-300 hover:bg-primary hover:text-black'>Donation</Link></li>
          <li className=' hover:bg-primary text-secondary hover:text-black  cursor-pointer uppercase'><Link to='/ourstory'
            className='transition-all duration-300'> Our Story</Link></li>
        </ul>
      </div>
    </li>

    <li className=' text-black  cursor-pointer uppercase'><Link to='/corporate'
      className='transition-all duration-300'> Corporate</Link></li>
    <li className=' text-black  cursor-pointer uppercase'><Link to='/nonprofit'
      className='transition-all duration-300'> Non-Profit</Link></li>
    <li className=' text-black  cursor-pointer'><Link to='/weddings'
      className='transition-all duration-300 uppercase'> Weddings</Link></li>

    <li className=' text-black  cursor-pointer uppercase'><Link to='/social'
      className='transition-all duration-300'> Social</Link></li>

    <li className=' text-black cursor-pointer uppercase'><Link to='/articles' className='transition-all duration-300'>Article</Link></li>


    <li className=' text-black  cursor-pointer uppercase'><Link to='/contactus'
      className='transition-all duration-300'> Contact Us</Link></li>


  </>
  const [isOpen, setIsOpen] = useState(false);

  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: 'spring',
        stiffness: 160,
        damping: 60,
      },
    },
  };

  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative'>
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer '
      >
        <BsMenuButtonWide className='w-8 h-8 text-black' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-primary fixed top-0 right-0'
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${isOpen ? 'right-0' : '-right-full'
          } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8'
        >
          <ImCross className='w-8 h-8 text-black' />
        </div>
        {navigation}
      </motion.ul>
    </nav>
  );
};

export default MobileNav;