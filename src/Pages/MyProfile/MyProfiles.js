import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { HiPencilAlt } from 'react-icons/hi';
import { FaFacebookSquare, FaUserGraduate, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { MdBloodtype } from 'react-icons/md';
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { format } from 'date-fns';
import Navbar from '../Shared/Navbar/Navbar';
import UpdateProfile from './UpdateProfile';
const MyProfiles = () => {
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, "PP");
    useEffect(() => {
        setInterval(() => setDate(new Date()), 30000);
    }, []);

    const [user] = useAuthState(auth)
    const [cancle, setCancle] = useState(false);
    const crossHandle = () => {
        setCancle(false)
    }
    const [userData, setUserData] = useState([])

    useEffect(() => {
        const email = user?.email;
        console.log(email);
        const url = `https://blood-ai-abiabdullah99.vercel.app/user/${email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [userData])
    console.log(userData)

    return (
        <div>
            <div className='nav-bg h-24'>
                <Navbar />
            </div>
            <div className='w-10/12 mx-auto mt-0 mb-20 font-mono'>
                <div className='z-10'>
                    <div className='md:w-11/12 w-full mx-auto md:mb-[-80px] mb-[-120px] relative'>
                        <div>
                            <img src="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/curved-images/curved0.jpg" className='rounded-xl mx-auto mt-10 h-40 md:h-full' alt="" />
                        </div>
                    </div>
                    <div className="Profile-bg rounded-lg relative shadow-lg overflow-hidden w-9/12 md:w-8/12 mx-auto py-10 pl-10 mb-5">
                        <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center'>
                            <div className='flex items-center flex-wrap'>
                                <img className='w-28 h-24 rounded-xl' src={userData?.image || user?.photoURL} alt="" />
                                <div>
                                    <h1 className='md:ml-10 ml-0 mt-2 text-white text-xl font-semibold'>{user?.displayName}</h1>
                                    <h1 className='md:ml-10 ml-0 text-white text-sm '>Member</h1>
                                </div>
                            </div>
                            <div className='mr-10 w-48 md:ml-auto ml-0 mt-5 md:mt-0'>
                                <label htmlFor="my-modal-3" className=" uppercase cursor-pointer"><h1 className="flex items-center full text-white py-2 px-3 border-white border-2">
                                    <HiPencilAlt className="mr-3 text-xl" />
                                    Edit Profile
                                </h1></label>
                                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                                <div className="modal md:pt-10 pt-40 w-full overflow-scroll">
                                    <div className="relative w-full rounded-lg md:w-9/12 lg:w-7/12 ModalBg h-auto">
                                        <label htmlFor="my-modal-3" onClick={crossHandle} className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold">✕</label>
                                        <UpdateProfile />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-white shadow-xl py-4 pl-10 rounded-xl'>
                    <div className='flex flex-wrap md:flex-nowrap items-center justify-between'>
                        <div>
                            <p className="text-base font-medium leading-6 pb-5 text-secondary">{formattedDate} at {date.toLocaleString('en-US', {
                                hour: 'numeric',
                                minute: 'numeric',
                                hour12: true,
                            })}</p>
                            <h1 className='text-xl font-bold text-secondary'>Bio -</h1>
                            <p className='text-secondary text-sm my-2 w-8/12'>{userData?.describe}</p>
                        </div>
                        <div className='flex gap-2 pr-12'>
                            <h1 className='bg-primary p-4 text-primary bg-opacity-5 text-2xl rounded-lg'>< FaFacebookSquare /></h1>
                            <h1 className='bg-primary p-4 text-primary bg-opacity-5 text-2xl rounded-lg'>< FaTwitterSquare /></h1>
                            <h1 className='bg-primary p-4 text-primary bg-opacity-5 text-2xl rounded-lg'>< FaInstagramSquare /></h1>
                            <h1 className='bg-primary p-4 text-primary bg-opacity-5 text-2xl rounded-lg'>< IoLogoLinkedin /></h1>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center justify-between'>
                        <div>
                            <h1 className='text-xl text-secondary mt-10'>Email -</h1>
                            <h1 className='text-lg my-2 gap-2 flex items-center text-secondary'> < AiOutlineMail />{user?.email} </h1>
                            <h1 className='text-xl mt-3 text-secondary'>Location -</h1>
                            <h1 className='text-lg my-2 gap-2 flex items-center text-secondary'> < AiOutlineHome /> {userData?.district}</h1>
                            <h1 className='text-xl mt-3 text-secondary'>Phone -</h1>
                            <h1 className='text-lg my-2 gap-2 flex items-center text-secondary'> < AiOutlinePhone /> {userData?.phone}</h1>
                        </div>
                        <div className='mr-10'>
                            <h1 className='text-xl text-secondary mt-10'>Education -</h1>
                            <h1 className='text-lg my-2 gap-2 flex items-center text-secondary'> < FaUserGraduate /> {userData?.education}</h1><h1 className='text-xl text-secondary mt-2'>Blood Group -</h1>
                            <h1 className='text-lg my-2 gap-2 flex items-center text-secondary'> < MdBloodtype /> {userData?.bloodGrp}</h1>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default MyProfiles;