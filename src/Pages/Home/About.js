import React from 'react';
import { Slide } from 'react-awesome-reveal';
import AboutImg from '../../Assets/about.png'
const About = () => {
    return (
        <div className='w-10/12 mx-auto mt-20 grid grid-cols-1 items-center md:grid-cols-2'>
            <div className='flex-1'>
                <Slide direction="left" duration={2000}>
                    <img src={AboutImg} className="" alt="" />
                </Slide>
            </div>
            <div className='mx-auto font-mono flex-1'>
                <Slide direction="down" duration={1000}>
                    <h1 className='text-md uppercase text-primary'>Help The People in Need</h1>
                </Slide>
                <Slide direction="up" duration={1000}>
                    <h1 className='text-4xl font-bold leading-normal text-black'>
                        Together We Can Make World <br /> More Health & Better
                    </h1>
                </Slide>
                <Slide direction="right" duration={1000}>
                    <p className='text-md mt-2 text-[#555555]'>Blood Center is public donation center with blood donation members in the changing health care system. Founded in 1978, Blood Center is one of the nation’s oldest and largest nonprofit transfusion medicine organizations. We provide a blood and volunteer services across the US. With our national footprint, deep community roots and specialized services, we are the thread that connects people and resources together to fuel progress in transfusion medicine.. </p>
                </Slide>
                <Slide direction="down" duration={3000}>
                    <button className='donateBtn font-mono uppercase mt-4 hover:text-black'>Search a Donars</button>
                </Slide>
            </div>
        </div>
    );
};

export default About;