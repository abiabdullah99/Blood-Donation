import React, { useState } from 'react';
import "./authentication.css";
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../Hooks/UseToken';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import SocialLogin from './SocialLogin';
import Registation from './Registation';
import loginImg from '../../../Assets/login.png'
import SignUpImg from '../../../Assets/singup.png'
type Inputs = {
  email: string,
  password: string,
  state: {
    from: Location;
  }
};
const Login = () => {

  let navigate = useNavigate();
  const location = useLocation() as unknown as Inputs;
  const from = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [token] = useToken(user);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Inputs>({ mode: "onBlur" })
  let [btnStatus, setBtnStatus] = useState<String>('');
  let changeBtnStatus = (status: string) => {
    setBtnStatus(status)
  }

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const email = data.email;
    const password = data.password;
    if (email && password) {
      await signInWithEmailAndPassword(email, password);
      reset();
    }

  }
  if (error) {

    return (
      <>
        {
          toast.error(error.message)
        }
      </>
    )
  }
  if (loading || sending) {
    return <div className='h-40 mt-10'>{<Loading />}</div>

  };

  if (user) {
    navigate(from, { replace: true })
    return (
      <>
        {
          toast.success('Thank You! Login Successfull')
        }
      </>
    )
  }


  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Please, Check Your Email");
    } else {
      toast.error('Please, Enter Email');
    }
  }

  return (
    <>
      <div className=' h-20 nav-bg'>
        <Navbar />
      </div>
      <div id='container' className={btnStatus === 'sign-up' ? "sign-up-mode" : ""}>
        <div className="forms-container font-mono">
          <div className="signin-signup">

            <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
              <p className=' text-red-500'>
                {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span>{errors.email.message}</span>}
              </p>
              <div className="input-field">
                <input type="email" placeholder="Enter Your Email" {...register("email", {
                  required: {
                    value: true,
                    message: 'Email is required*',
                  },
                  pattern: {
                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Provide a Valid Email',
                  },
                  onBlur: (e) => setEmail(e.target.value)
                })} />
              </div>
              <p className='text-left text-red-500'>
                {errors.password?.type === 'required' && <span>{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span>{errors.password.message}</span>}
              </p>
              <div className="input-field">
                <input type="password" placeholder="Enter Your Password" {...register("password", {
                  required: {
                    value: true,
                    message: 'Password is required*'
                  },
                  minLength: {
                    value: 8,
                    message: 'Enter At Least 8 Character'
                  }
                })} />
              </div>

              <p className='text-lg text-secondary'> Forgot Password? <button className="text-[#722ab5e4]" onClick={resetPassword}> Please Reset</button> </p>

              <input type="submit" value="Login" className="BtnPurple hover:text-black mt-4" />
              <div className="divider divide-purple-600 text-[#722ab5e4] w-7/12 mx-auto -mb-14">Or</div>
            </form>
            <SocialLogin />
            <Registation />
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="font-mono content">
              <img className='w-9/12 -mt-10 md:block hidden' src={SignUpImg} alt="" />
              <h1 className='text-white text-xl font-semibold'>New here ?</h1>
              <h2 className='text-white text-md mb-4'>
                Please Create a New Account
              </h2>
              <button className="btn transparent" id="sign-up-btn" onClick={() => changeBtnStatus("sign-up")}>
              Join Us
              </button>
            </div>
            <img src="../../images/log.svg" className="image" alt="" />
          </div>
          <div className="panel right-panel font-mono">
            <div className="content">
            <img className='-mt-40 md:block hidden' src={loginImg} alt="" />
              <h1 className='text-white text-md mb-4 -mt-20'>All Ready Have an Account ?</h1>
              <button className="btn transparent text-gray-900" id='sign-in-btn' onClick={() => changeBtnStatus("sign-in")}>
                Login in
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;