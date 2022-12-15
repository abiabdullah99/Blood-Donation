import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hooks/UseToken';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  state: {
    from: Location;
  }
};

const Registation = () => {
  const navigate = useNavigate();
  const location = useLocation() as unknown as Inputs;
  const from = location.state?.from?.pathname || '/';
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);
  const { register, reset, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  let errorMessage;
  if (error || updateError) {
    return (
      <>
        {
          toast.error(error?.message || updateError?.message)
        }
      </>
    )
  }
  if (loading || updating) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
  }

  if (user) {
    navigate(from, { replace: true })
    return (
      <>
        {
          toast.success('Thank You! Registation Successfull')
        }
      </>
    )
  }
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;
    const confirm = data?.confirmPassword;
    if (password === confirm) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    }
    reset()
  };
  return (
    <form className="sign-up-form font-mono" onSubmit={handleSubmit(onSubmit)}>
      <p className='text-red-500'>{errorMessage}</p>
      <p className='text-left text-red-500'>
        {errors.name?.type === 'required' && <span>{errors.name.message}</span>}
      </p>
      <div className="input-field">
        <input type="text" placeholder="Enter Your Name"  {...register("name", {
          required: {
            value: true,
            message: 'Full Name is required*'
          }
        })} />
      </div>
      <p className=' text-red-500'>
        {errors.email?.type === 'required' && <span>{errors.email.message}</span>}
        {errors.email?.type === 'pattern' && <span>{errors.email.message}</span>}
      </p>
      <div className="input-field">
        <input type="email" placeholder="Enter Your Email" {...register("email", {
          required: {
            value: true,
            message: 'Email is required*'
          },
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Provide a Valid Email',
          }
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
      <p className='text-left text-red-500'>

      </p>
      <div className="input-field">
        <input type="password" placeholder="Confirm Password" {...register("confirmPassword", {
          validate: (val: string) => {
            if (watch('password') !== val) {


              return ("Your passwords do no match")
            }
          },
        })} />
      </div>
      <input type="submit"className="BtnPurple hover:text-black mt-4"  value="JOIN US" />
      <div className="divider text-purple-600 w-7/12 mx-auto">Or</div>
    </form>

  );
};

export default Registation;