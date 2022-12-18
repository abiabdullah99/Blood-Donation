import React from "react";
import { useForm } from "react-hook-form";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PostReqFrom = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        const updateData = {
            email: user?.email,
            name: data.name,
            phone: data.phone,
            bloodGrp: data.bloodGrp,
            district: data.district,
            date: data.date,
        };
        fetch(`https://blood-ai.vercel.app/bloodReq`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Successful ! Your Blood Requess Message");
                navigate("/")
            });
    }


    return (
        <div className="flex justify-center items-center py-5">
            <div className="card lg:w-10/12 drop-shadow-2xl">
                <div className="card-body">
                    <h2 className="text-center my-3 text-white font-semibold  text-xl">
                        Emergency a Blood Request
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full text-white">
                            <div className="flex">
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text text-base text-white font-medium">
                                            Name
                                        </span>
                                    </label>
                                    <input
                                        type="name"
                                        placeholder="Enter Your Name"
                                        value={user?.displayName}
                                        className="input input-bordered input-success border-2 border-white bg-transparent w-full"
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="label-text text-white text-base font-medium">
                                        Phone Number
                                    </span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter Your Phone Number"
                                    className="input input-bordered input-success border-2 border-white bg-transparent w-full"
                                    {...register("phone", {
                                        required: true,
                                    })}
                                />
                            </div>
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">
                                    Blood Group
                                </span>
                            </label>
                            <select
                                className="select selcet-success w-full bg-transparent border-2 border-white text-white"
                                {...register("bloodGrp", {
                                    required: true,
                                })}
                            >
                                <option className="text-lg text-black" selected>A+</option>
                                <option className="text-lg text-black">B+</option>
                                <option className="text-lg text-black">AB+</option>
                                <option className="text-lg text-black">O+</option>
                                <option className="text-lg text-black">O-</option>
                                <option className="text-lg text-black">AB-</option>
                                <option className="text-lg text-black">B-</option>
                                <option className="text-lg text-black">A-</option>
                            </select>
                            <label className="label">
                                <span className="label-text text-white text-base font-medium">
                                    Your District
                                </span>
                            </label>
                            <select className="select selcet-success w-full bg-transparent border-2 border-white text-white"
                                {...register("district", {
                                    required: true,
                                })}>
                                <option className='text-lg text-black' value="Bagerhat" selected>Bhola</option>
                                <option className='text-lg text-black' value="Bandarban">Bandarban</option>
                                <option className='text-lg text-black' value="Barguna">Barguna</option>
                                <option className='text-lg text-black' value="Barisal">Barisal</option>
                                <option className='text-lg text-black' value="Bhola">Bagerhat</option>
                                <option className='text-lg text-black' value="Bogra">Bogra</option>
                                <option className='text-lg text-black' value="Brahmanbaria">Brahmanbaria</option>
                                <option className='text-lg text-black' value="Chandpur">Chandpur</option>
                                <option className='text-lg text-black' value="Chapainawabganj">Chapainawabganj</option>
                                <option className='text-lg text-black' value="Chittagong">Chittagong</option>
                                <option className='text-lg text-black' value="Chuadanga">Chuadanga</option>
                                <option className='text-lg text-black' value="Comilla">Comilla</option>
                                <option className='text-lg text-black' value="Cox's Bazar">Cox's Bazar</option>
                                <option className='text-lg text-black' value="Dhaka">Dhaka</option>
                                <option className='text-lg text-black' value="Dinajpur">Dinajpur</option>
                                <option className='text-lg text-black' value="Faridpur">Faridpur</option>
                                <option className='text-lg text-black' value="Feni">Feni</option>
                                <option className='text-lg text-black' value="Gaibandha">Gaibandha</option>
                                <option className='text-lg text-black' value="Gazipur">Gazipur</option>
                                <option className='text-lg text-black' value="Gopalganj">Gopalganj</option>
                                <option className='text-lg text-black' value="Habiganj">Habiganj</option>
                                <option className='text-lg text-black' value="Jamalpur">Jamalpur</option>
                                <option className='text-lg text-black' value="Jessore">Jessore</option>
                                <option className='text-lg text-black' value="Jhalokati">Jhalokati</option>
                                <option className='text-lg text-black' value="Jhenaidah">Jhenaidah</option>
                                <option className='text-lg text-black' value="Joypurhat">Joypurhat</option>
                                <option className='text-lg text-black' value="Khagrachari">Khagrachari</option>
                                <option className='text-lg text-black' value="Khulna">Khulna</option>
                                <option className='text-lg text-black' value="Kishoreganj">Kishoreganj</option>
                                <option className='text-lg text-black' value="Kurigram">Kurigram</option>
                                <option className='text-lg text-black' value="Kushtia">Kushtia</option>
                                <option className='text-lg text-black' value="Lakshmipur">Lakshmipur</option>
                                <option className='text-lg text-black' value="Lalmonirhat">Lalmonirhat</option>
                                <option className='text-lg text-black' value="Madaripur">Madaripur</option>
                                <option className='text-lg text-black' value="Magura">Magura</option>
                                <option className='text-lg text-black' value="Manikganj">Manikganj</option>
                                <option className='text-lg text-black' value="Meherpur">Meherpur</option>
                                <option className='text-lg text-black' value="Moulvibazar">Moulvibazar</option>
                                <option className='text-lg text-black' value="Munshiganj">Munshiganj</option>
                                <option className='text-lg text-black' value="Mymensingh">Mymensingh</option>
                                <option className='text-lg text-black' value="Naogaon">Naogaon</option>
                                <option className='text-lg text-black' value="Narail">Narail</option>
                                <option className='text-lg text-black' value="Narayanganj">Narayanganj</option>
                                <option className='text-lg text-black' value="Narsingdi">Narsingdi</option>
                                <option className='text-lg text-black' value="Natore">Natore</option>
                                <option className='text-lg text-black' value="Netrokona">Netrokona</option>
                                <option className='text-lg text-black' value="Nilphamari">Nilphamari</option>
                                <option className='text-lg text-black' value="Noakhali">Noakhali</option>
                                <option className='text-lg text-black' value="Pabna">Pabna</option>
                                <option className='text-lg text-black' value="Panchagarh">Panchagarh</option>
                                <option className='text-lg text-black' value="Patuakhali">Patuakhali</option>
                                <option className='text-lg text-black' value="Pirojpur">Pirojpur</option>
                                <option className='text-lg text-black' value="Rajbari">Rajbari</option>
                                <option className='text-lg text-black' value="Rajshahi">Rajshahi</option>
                                <option className='text-lg text-black' value="Rangamati">Rangamati</option>
                                <option className='text-lg text-black' value="Rangpur">Rangpur</option>
                                <option className='text-lg text-black' value="Satkhira">Satkhira</option>
                                <option className='text-lg text-black' value="Shariatpur">Shariatpur</option>
                                <option className='text-lg text-black' value="Sherpur">Sherpur</option>
                                <option className='text-lg text-black' value="Sirajganj">Sirajganj</option>
                                <option className='text-lg text-black' value="Sunamganj">Sunamganj</option>
                                <option className='text-lg text-black' value="Sylhet">Sylhet</option>
                                <option className='text-lg text-black' value="Tangail">Tangail</option>
                                <option className='text-lg text-black' value="Thakurgaon">Thakurgaon</option>
                            </select>

                            <label className="label">
                                <span className="abel-text text-white text-base font-medium">Date</span>
                            </label>
                            <input type="date" className="input input-bordered input-success border-2 border-white bg-transparent w-full" {...register("date", {
                                required: {
                                    value: true,
                                    message: 'Date is required*'
                                }
                            })} />
                        </div>
                        <input
                            className=" mt-8 text-white border-[#521647] text-lg w-full py-3 rounded-lg font-bold border-2 bg-[#521647] cursor-pointer hover:bg-transparent hover:border-white"
                            type="submit"
                            value="Post Request"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PostReqFrom;
