import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../../../Component/CustomLink";
import auth from "../../../firebase.init";
const DesktopNav = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const logout = () => {
        signOut(auth);
        navigate('/login')
    }
    const navigation = <>
        <li className=' text-white text-lg cursor-pointer'><CustomLink to='/'
            className='transition-all duration-300 uppercase font-semibold'> Home</CustomLink></li>
        <li className=' text-white text-lg cursor-pointer uppercase'><CustomLink to='/donars'
            className='transition-all duration-300 font-semibold'> Donars</CustomLink></li>
        <li className=' text-white text-lg cursor-pointer uppercase'><CustomLink to='/blog'
            className='transition-all duration-300 font-semibold'>Blogs</CustomLink></li>
        <li className=' text-white  cursor-pointer uppercase'><CustomLink to='/BloodReq'
            className='transition-all text-lg duration-300 font-semibold'>Blood Request</CustomLink></li>
        <li>
            {user ? <li className=' text-white  cursor-pointer -mt-2'>
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
                                <CustomLink className="flex items-center px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md" to="/myProfile"> My Profile</CustomLink>
                                <CustomLink className="flex items-center px-3 py-3 cursor-pointer text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md" to="/myRequest"> My Request </CustomLink>
                            </>
                            <button className="flex w-full items-center px-3 py-3 cursor-pointer  text-white text-sm focus:outline-none hover:bg-primary hover:text-white rounded-md" onClick={logout} >LOGOUT</button>
                        </div>
                    </ul>
                </div>

            </li> : <CustomLink
                to="/login"
                className="text-white  cursor-pointer uppercase"
            >
                Login
            </CustomLink>}
        </li>
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
