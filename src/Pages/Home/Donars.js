import React, { useEffect, useState } from 'react';

const Donars = () => {

    const [donars, setDonars] = useState([])
    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setDonars(data))
    }, [])

    console.log(donars);
    return (
        <div>
            <div className='font-mono mt-28'>
                <h1 className='text-primary font-bold text-3xl text-center'>Our Latest Donars</h1>
                <p className='text-md text-center'>Together We Can Make World More Health & Better</p>
            </div>
            <div>
                <div class="mx-auto mt-24 grid w-10/12 grid-cols-1 md:grid-cols-3 gap-10 ">
                    {donars.map(item =>
                        <div class="flex flex-col bg-white rounded-lg shadow-md items-center pb-10 font-mono">
                            <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.img} alt="Bonnie" />
                            <h5 class="mb-1 text-md font-medium text-gray-900">{item.name}</h5>
                            <span class="text-md text-gray-900">Blood Group: {item.bldGrp}</span>
                            <h1 className='text-md text-gray-900'>Location: {item.loction}</h1>
                            <div class="flex mt-4 space-x-3 md:mt-6">
                                <a href="Detail" class="inline-flex items-center px-4 py-2 donateBtn hover:text-gray-900">Details</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
};

export default Donars;