import React from 'react';

const BloodGrp = () => {
    return (
        <div className="form-control bg-transparent w-full max-w-xs">
            <select className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary">
                <option className='text-md text-white bg-primary' selected>All Blood Group</option>
                <option className='text-lg text-white' >A+</option>
                <option className='text-lg text-white' >B+</option>
                <option className='text-lg text-white' >Ab+</option>
                <option className='text-lg text-white' >O+</option>
                <option className='text-lg text-white' >O-</option>
                <option className='text-lg text-white' >Ab-</option>
                <option className='text-lg text-white' >B-</option>
                <option className='text-lg text-white' >A-</option>
            </select>
        </div>
    );
};

export default BloodGrp;