import React, { useState } from 'react';
import BloodReqImg from '../../Assets/reques.jpg'
import Navbar from '../Shared/Navbar/Navbar';
import BloodReqShow from './BloodReqShow';
import PostReqFrom from './PostReqFrom';
const BloodReq = () => {

    const [cancle, setCancle] = useState(false);
    const crossHandle = () => {
        setCancle(false)
    }
    return (
        <div className='font-mono'>
            <Navbar />
            <div className="mt-52">
                <h1 className='text-3xl text-center font-bold mb-2 text-white'>Emergency <span className='text-primary'> Blood </span> Request!</h1>
                <p className='text-xl text-center font-bold text-white'>Donate Blood & Save a Life, All types of blood are needed to help patients</p>
                <div className="w-full flex justify-center mt-6">
                    <button className='donateBtn'><label htmlFor="my-modal-3" className=" uppercase cursor-pointer">Post a Request </label></button>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal pt-10 w-full">
                        <div className="relative sm:w-96 rounded-lg md:w-[400px] lg:w-[700px] ModalBg">
                            <label htmlFor="my-modal-3" onClick={crossHandle} className=" btn-sm text-white btn-circle absolute right-0 top-3 text-2xl font-bold">✕</label>
                            <PostReqFrom />
                        </div>
                    </div>
                </div>
            </div>
            <img className='w-full absolute top-0 -z-10' src={BloodReqImg} alt="" />
            <div className='RequesBgImg'></div>

            <div className='mt-60'>
                <BloodReqShow />
            </div>
        </div>
    );
};

export default BloodReq;