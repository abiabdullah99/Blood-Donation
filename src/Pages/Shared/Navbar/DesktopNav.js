import React from "react";
import { Link } from "react-router-dom";
const DesktopNav = () => {
    const navigation = <>
        <li className=' text-white  cursor-pointer'><Link to='/'
            className='transition-all duration-300 uppercase font-semibold'> Home</Link></li>
        <li className=' text-white  cursor-pointer uppercase'><Link to='/donars'
            className='transition-all duration-300 font-semibold'> Donors</Link></li>
        <li className=' text-white  cursor-pointer uppercase'><Link to='/blog'
            className='transition-all duration-300 font-semibold'>Blogs</Link></li>
        <li className=' text-white  cursor-pointer uppercase'><Link to='/about'
            className='transition-all duration-300 font-semibold'>Blood Request</Link></li>
        <li className=' text-white  cursor-pointer uppercase'> <Link to='/contact'
            className='transition-all duration-300 font-semibold'>CONTACT</Link></li>
    </>

    return (
        <nav>
            <ul className='flex space-x-8  capitalize text-md'>
                {navigation}
            </ul>
        </nav>
    );
};

export default DesktopNav;
