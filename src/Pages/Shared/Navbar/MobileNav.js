import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { BsMenuButtonWide } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const MobileNav = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()
  const logout = () => {
    signOut(auth);
    navigate('/login')
  }
  const navigation = <>
    <li className=' text-white  cursor-pointer'><Link to='/'
      className='transition-all duration-300 uppercase font-semibold'> Home</Link></li>
    <li className=' text-white  cursor-pointer uppercase'><Link to='/donars'
      className='transition-all duration-300 font-semibold'> Donars</Link></li>
    <li className=' text-white  cursor-pointer uppercase'><Link to='/blog'
      className='transition-all duration-300 font-semibold'>Blogs</Link></li>
    <li className=' text-white  cursor-pointer uppercase'><Link to='/BloodReq'
      className='transition-all duration-300 font-semibold mb-2'>Blood Request</Link></li>
    <li>
      {user ? <li className=' text-white  cursor-pointer md:-mt-2 mt-2'>
        {/* Start */}
        <div className="dropdown dropdown-end">
          <button className=" transition-all duration-300 uppercase"  >
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {
                  user?.photoURL ? <img src={user?.photoURL} alt={user?.displayName} className="w-12 p-0 text-primary" /> : <img src="https://i.ibb.co/rwGPsQ9/profile.jpg" alt={user?.displayName} className="w-14 text-primary" />}
              </div>
            </div></button>
          <ul id="0" className="dropdown-content menu shadow drop-bg rounded">
            <div className="uppercase w-48 max-w-screen origin-center appear-done enter-done bg-[#6a30608e] pl-4 rounded-md"
            >
              <>
                <Link className="flex items-center px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md" to="/myProfile"> My Profile</Link>
                <Link className="flex items-center px-3 py-3 cursor-pointer text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md" to="/myRequest"> My Request </Link>
              </>
              <button className="flex w-full items-center px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md" onClick={logout} >LOGOUT</button>
            </div>
          </ul>
        </div>

      </li> : <Link
        to="/login"
        className="text-white  cursor-pointer uppercase"
      >
        Login
      </Link>}
    </li>
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
        <BsMenuButtonWide className='w-8 h-8 text-white -mt-4' />
      </div>

      {/* circle */}
      <motion.div
        variants={circleVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : 'hidden'}
        className='w-4 h-4 rounded-full bg-gradient-to-b from-[#722ab5] via-[#16264a] to-[#6d1851] fixed top-0 right-0'
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
          <ImCross className='w-8 h-8 text-white' />
        </div>
        {navigation}
      </motion.ul>
    </nav>
  );
};

export default MobileNav;