import React from 'react';
import BloodImg from '../../Assets/blood-drop.png'
import { MdBloodtype, MdDateRange } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import UseBloodReq from '../../Hooks/UseBloodReq';
const BloodReqShow = () => {
    const [bloodreq] = UseBloodReq()
    console.log(bloodreq);
    return (
        <div>
            <h1 className='text-2xl font-mono font-semibold text-center text-gray-700 mb-2'>To Join As a <span className='border-b-4 border-primary'>Blood Donor</span> </h1>
            <p className='text-lg text-center text-gray-700 mb-20'>Your Donation Can Make Someone’s Life Better</p>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3'>
                {
                    bloodreq?.map(item => <div class="max-w-sm p-6 rounded-sm bg-white border-primary border-l-[16px] shadow-xl font-mono mb-14">
                        <img src={BloodImg} alt="" />
                        <a href="bloodImg">
                            <h5 class="mb-2 text-2xl  font-semibold  text-gray-900 ">Need Emergency Blood</h5>
                        </a>
                        <p class=" text-lg flex items-center text-gray-900 "> <MdBloodtype className='text-xl text-primary mr-1' /> Blood Group : <span className='text-xl text-primary ml-1 font-bold'>{item?.bloodGrp}</span></p>
                        <p className='flex items-center text-lg '> <ImLocation className='text-xl text-blue-600 mr-1' /> District : {item?.district}</p>
                        <p className='flex items-center text-lg '> <BsPhoneVibrateFill className='text-xl text-purple-700 mr-1' /> Phone : {item?.phone}</p>
                        <p className='flex items-center text-lg'> < MdDateRange className='text-xl text-green-600 mr-1' />Date : {item.date}</p>
                    </div>)
                }

            </div>
        </div>
    );
};

export default BloodReqShow;