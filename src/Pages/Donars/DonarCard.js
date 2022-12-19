import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
const DonarCard = ({ item }) => {
    return (
        <>
            <Fade direction="top" duration={3000}>
                <div>
                    <div
                        className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl font-mono"
                    >
                        <a className="block rounded-xl pt-4 bg-white px-6 sm:px-8" href="ff">
                            <div className="sm:pr-8">
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <img className='w-20 h-20 rounded-2xl' src={item.img ? item.img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"} alt="" />
                                    </div>
                                    <div className="lg:flex justify-center pt-2 text-sm text-gray-600">
                                        <div className="flex-1 inline-flex items-center  mb-3">
                                            <div className="w-full flex-none text-sm flex items-center text-gray-600">
                                                <ul className="flex flex-row justify-center items-center space-x-2">
                                                    <li className="">
                                                        <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                                            <h1 className="block w-3 h-3 bg-blue-600 rounded-full"> </h1>
                                                        </span>
                                                    </li>
                                                    <li className="">
                                                        <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                                                            <a href="#yellow" className="block w-3 h-3  bg-yellow-400 rounded-full"> </a>
                                                        </span>
                                                    </li>
                                                    <li className="">
                                                        <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                                                            <a href="fd" className="block w-3 h-3  bg-red-500 rounded-full"> </a>
                                                        </span>
                                                    </li>
                                                    <li className="">
                                                        <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                                                            <a href="#green" className="block w-3 h-3  bg-green-500 rounded-full"> </a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="flex-1 inline-flex items-center mb-3">
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-lg pt-4 text-gray-900">Name - <span className='text-lg'>{item.name}</span></h3>
                                <h3 className="text-lg text-gray-900">Blood Group - {item.bloodGrp}</h3>
                                <h3 className="text-lg text-gray-900">Location - {item.district ? item.district : "Not Found"}</h3>
                                <h3 className="text-lg text-gray-900 pb-4">Phone - {item.phone}</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default DonarCard;