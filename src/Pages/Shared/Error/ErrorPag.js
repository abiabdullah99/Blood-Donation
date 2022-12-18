import React from 'react';
import { Link } from 'react-router-dom';
import ErrorPage from '../../../Assets/error.jpg'
const ErrorPag = () => {
    return (
        <div className='font-mono'>
            <div>
                <img className='mx-auto w-7/12 mt-10' src={ErrorPage} alt="" />
            </div>
            <div>
                <h1 className='text-xl text-center text-primary font-semibold'>Error 404</h1>
                <h2 className='text-lg text-center '>Oops! The page you're looking for isn't here.</h2>
                <div className='flex justify-center mt-6'>
                    <button className='donateBtn hover:text-gray-700'><Link to="/">Back To Home </Link></button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPag;