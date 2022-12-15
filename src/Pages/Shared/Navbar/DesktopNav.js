import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
const DesktopNav = () => {

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
            className='transition-all duration-300 font-semibold'> Donors</Link></li>
        <li className=' text-white  cursor-pointer uppercase'><Link to='/blog'
            className='transition-all duration-300 font-semibold'>Blogs</Link></li>
        <li className=' text-white  cursor-pointer uppercase'><Link to='/about'
            className='transition-all duration-300 font-semibold'>Blood Request</Link></li>
        <li className=' text-white  cursor-pointer uppercase'> <Link to='/contact'
            className='transition-all duration-300 font-semibold'>CONTACT</Link></li>
        {
            user ? <li className=' text-white  cursor-pointer uppercase'> <Link to='/login'
                onClick={logout} className='transition-all duration-300 font-semibold'>Log Out</Link></li> :
                <li className=' text-white  cursor-pointer uppercase'> <Link to='/login'
                    className='transition-all duration-300 font-semibold'>login</Link></li>
        }
    </>

    return (
        <nav>
            <ul className='flex space-x-8  capitalize text-md font-mono'>
                {navigation}
            </ul>
        </nav>
    );
};

export default DesktopNav;
