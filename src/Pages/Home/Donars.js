import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DonarCard from '../Donars/DonarCard';
import { Slide, Fade } from 'react-awesome-reveal';

const Donars = () => {

    const [donars, setDonars] = useState([])
    const reverseItem = [...donars].reverse();
    useEffect(() => {
        const url = 'https://blood-ai.vercel.app/user';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDonars(data)
            })
    }, [])

    console.log(donars);
    return (
        <div className="relative overflow-hidden">
            <div className='font-mono mt-28 '>
                <Slide direction="left" duration={2000}>
                    <h1 className='text-primary font-bold text-3xl text-center'>Our Latest Donars</h1>
                </Slide>
                <Slide direction="right" duration={2000}>
                    <p className='text-md text-center'>Together We Can Make World More Health & Better</p>
                </Slide>
                <h1 className="md:text-[100px] text-4xl absolute left-1/4 top-32 -z-10 text-[#F7F7F7] text-center font-mono font-bold">Latest Donars</h1>
            </div>
            <div>
                <div class="mx-auto mt-24 grid w-10/12 grid-cols-1 md:grid-cols-3 gap-10 ">
                    {reverseItem.slice(0, 6).map(item =>
                        <DonarCard item={item}></DonarCard>
                    )}
                </div>
                <div className='flex justify-center mt-16'>
                    <a href="#_" class="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-primary rounded-lg group">
                        <span class="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#502b7c] rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
                        <span class="relative"><Link to="/donars">See All Donors</Link></span>
                    </a>
                </div>
            </div>
        </div >
    );
};

export default Donars;