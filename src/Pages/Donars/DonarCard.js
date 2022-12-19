import React from 'react';
import { Slide } from 'react-awesome-reveal';
const DonarCard = ({ item, filterItem }) => {
    return (
        <>
            {/* <Slide direction="bottom" duration={2000}> */}
                <div>
                    <div
                        class="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl font-mono"
                    >
                        <a class="block rounded-xl pt-4 bg-white px-6 sm:px-8" href="ff">
                            <div class="sm:pr-8">
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <img className='w-20 h-20 rounded-2xl' src={item.img} alt="" />
                                    </div>
                                    <div class="lg:flex justify-center pt-2 text-sm text-gray-600">
                                        <div class="flex-1 inline-flex items-center  mb-3">
                                            <div class="w-full flex-none text-sm flex items-center text-gray-600">
                                                <ul class="flex flex-row justify-center items-center space-x-2">
                                                    <li class="">
                                                        <span class="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                                                            <h1 class="block w-3 h-3 bg-blue-600 rounded-full"> </h1>
                                                        </span>
                                                    </li>
                                                    <li class="">
                                                        <span class="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                                                            <a href="#yellow" class="block w-3 h-3  bg-yellow-400 rounded-full"> </a>
                                                        </span>
                                                    </li>
                                                    <li class="">
                                                        <span class="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                                                            <a href="fd" class="block w-3 h-3  bg-red-500 rounded-full"> </a>
                                                        </span>
                                                    </li>
                                                    <li class="">
                                                        <span class="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                                                            <a href="#green" class="block w-3 h-3  bg-green-500 rounded-full"> </a>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="flex-1 inline-flex items-center mb-3">
                                        </div>
                                    </div>
                                </div>
                                <h3 class="text-lg pt-4 text-gray-900">Name - <span className='text-lg'>{item.name}</span></h3>
                                <h3 class="text-lg text-gray-900">Blood Group - {item.bloodGrp}</h3>
                                <h3 class="text-lg text-gray-900">District - {item.district}</h3>
                                <h3 class="text-lg text-gray-900 pb-4">Phone - {item.phone}</h3>
                            </div>
                        </a>
                    </div>
                </div>
            {/* </Slide> */}
        </>
    );
};

export default DonarCard;