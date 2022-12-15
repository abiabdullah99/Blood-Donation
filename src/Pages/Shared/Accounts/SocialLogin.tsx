import React from 'react';
import {  FcGoogle } from 'react-icons/fc';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
// import useToken from '../../hooks/useToken';
import Loading from '../Loading/Loading';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/UseToken';
type Inputs = {
    email: string,
    password: string,
    state: {
        from: Location;
    }

};
const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation() as unknown as Inputs;
    const from = location.state?.from?.pathname || '/';
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const [signInWithFacebook, Fuser, Floading, Ferror] = useSignInWithFacebook(auth);
    const [token] = useToken(Guser || Fuser);

    if (Gerror || Ferror) {
        return (
            <>
                {
                    toast.error(Gerror?.message || Ferror?.message)
                }
            </>
        )
    }
    if (Gloading || Floading) {
        return <div className='h-40 mt-10'>{<Loading />}</div>

    };
    if (Guser) {
        navigate(from, { replace: true })
        return (
            <>
                {
                    toast.success('Thank You! Login Successfull')
                }
            </>
        )
    }
    return (
        <div className="social-media">
            <button
                className="btn btn-success btn-outline text-black"
                onClick={() => signInWithGoogle()}
            >
             < FcGoogle className='mr-2 text-xl'/> Contine With Google
            </button>

        </div>
    );
};

export default SocialLogin;