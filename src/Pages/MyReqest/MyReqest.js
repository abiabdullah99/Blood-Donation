import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Navbar from '../Shared/Navbar/Navbar';
import BloodImg from '../../Assets/blood-drop.png'
import { MdBloodtype, MdDateRange } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
const MyReqest = () => {
    const [myReqest, setMyRequest] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
        const email = user?.email
        const url = `https://blood-donation-ai.onrender.com/myRequest?email=${email}`;
        fetch(url, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => setMyRequest(data));
    }, [user]);
    console.log(myReqest)

    // Delete a Single Message 

    const handleDeleteMessage = (id) => {
        const proced = window.confirm("Are Your Sure Delete This Message");
        if (proced) {
            const url = `https://blood-donation-ai.onrender.com/bloodReq/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const reamingData = myReqest.filter((item) => item._id !== id);
                    setMyRequest(reamingData);
                    toast.success("Your Message Succesfully deleted");
                });
        }
    };
    return (
        <div>
            <div className='nav-bg h-20'>
                <Navbar />
            </div>
            <h1 className='text-xl font-bold text-center mt-20 font-mono'>Your Blood <span className='border-b-4 border-primary'>Request Message</span></h1>
            <div className='w-9/12 mx-auto grid grid-cols-1 md:grid-cols-3 mt-10 gap-5'>
                {
                    myReqest.map(items => <div class="max-w-sm p-6 rounded-sm bg-white border-primary border-l-[16px] shadow-xl font-mono mb-14">
                        <img src={BloodImg} alt="" />
                        <a href="bloodImg">
                            <h5 class="mb-2 text-2xl  font-semibold  text-gray-900 ">Need Emergency Blood</h5>
                        </a>
                        <p class=" text-lg flex items-center text-gray-900 "> <MdBloodtype className='text-xl text-primary mr-1' /> Blood Group : <span className='text-xl text-primary ml-1 font-bold'>{items?.bloodGrp}</span></p>
                        <p className='flex items-center text-lg '> <ImLocation className='text-xl text-blue-600 mr-1' /> District : {items?.district}</p>
                        <p className='flex items-center text-lg '> <BsPhoneVibrateFill className='text-xl text-purple-700 mr-1' /> Phone : {items?.phone}</p>
                        <p className='flex items-center text-lg'> < MdDateRange className='text-xl text-green-600 mr-1' />Date : {items.date}</p>
                        <div className='mt-4'>
                            <button onClick={() => handleDeleteMessage(items._id)} className='text-md bg-primary px-4 py-3 font-bold text-white rounded-md'>Delete Message</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyReqest;