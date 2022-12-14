import React from 'react';
import donorsImg from '../../Assets/donors-bg.jpg'
import BloodGrp from '../../Component/BloodGrp';
import Location from '../../Component/Location';
const Donars = () => {
    return (
        <div className='font-mono banner-img'>
            <div className="tilte mt-60">
                <h1 className='text-3xl text-center font-bold text-primary'>Search a Donors</h1>
                <p className='text-xl text-center font-bold text-white'>Your Donation Can Make Someone’s Life Better</p>
            </div>
            <div>
                <div>
                    <div className='flex items-center justify-between w-7/12 mx-auto mt-10'>
                        <div className='flex items-center gap-10'>
                            <BloodGrp />
                            <Location />
                            <div className="form-control bg-transparent w-full max-w-xs">
                                <select className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary">
                                    <option className='text-md text-white bg-primary' selected>Donor Type
                                    </option>
                                    <option className='text-lg text-white' >All</option>
                                    <option className='text-lg text-white' >Eligible</option>
                                </select>
                            </div>
                            <div className='flex items-center'>
                                    <button className='text-md font-mono px-10 exploreBtn text-white' >Search</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <img className='w-full absolute top-0 -z-10' src={donorsImg} alt="" />
            <div className='img-background'></div>
        </div>
    );
};

export default Donars;