import React, { useEffect, useState } from 'react';
import donorsImg from '../../Assets/donors-bg.jpg'
import BloodGrp from '../../Component/BloodGrp';
import Location from '../../Component/Location';
import Navbar from '../Shared/Navbar/Navbar';
const Donars = () => {

    const [donars, setDonars] = useState([])
    const [filterItem, setFilterItem] = useState([])

    const [filterBlood, setFilterBloodGrp] = useState([])
    useEffect(() => {
        const url = 'https://blood-ai-abiabdullah99.vercel.app/user';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDonars(data)
                setFilterItem(data)
                setFilterBloodGrp(data)
            })
    }, [])

    console.log(filterItem);

    const filterItemData = (categItem) => {
        const updatedItems = donars?.filter((item) => {
            return item?.district === categItem;
        });

        setFilterItem(updatedItems);
    }

    const filterBloodGrp = (blood) => {
        const filterBlood = donars?.filter((item) => {
            return item?.bloodGrp === blood;
        });

        setFilterBloodGrp(filterBlood);
    }

    console.log(filterBlood);
    return (
        <div className='font-mono'>
            <Navbar />
            <div className="mt-60">
                <h1 className='text-3xl text-center font-bold text-primary'>Search a Donors</h1>
                <p className='text-xl text-center font-bold text-white'>Your Donation Can Make Someone’s Life Better</p>
            </div>
            <div>
                <div>
                    <div className='flex items-center justify-between md:w-8/12 mx-auto mt-10'>
                        <div className='flex flex-wrap items-center gap-2 w-11/12 mx-auto'>
                            <BloodGrp filterBloodGrp={filterBloodGrp} />
                            <Location filterItemData={filterItemData} />
                            <div className="form-control bg-transparent w-full max-w-xs">
                                <select className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary">
                                    <option className='text-md text-white bg-primary' selected>Donor Type
                                    </option>
                                    <option className='text-lg text-white' >All</option>
                                    <option className='text-lg text-white' >Eligible</option>
                                </select>
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