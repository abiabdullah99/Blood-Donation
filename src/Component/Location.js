import React from 'react';

const Location = ({filterItemData}) => {
    return (
        <div>
            <div className='flex items-center'>
                <div className="form-control bg-transparent w-full max-w-xs">
                    <select className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary">
                        <option className='text-md text-white' selected>Select A District</option>
                        <option onClick={() => filterItemData("Bagerhat")} className='text-lg text-white' value="Bagerhat">Bagerhat</option>
                        <option className='text-lg text-white' value="Bandarban">Bandarban</option>
                        <option className='text-lg text-white' value="Barguna">Barguna</option>
                        <option className='text-lg text-white' value="Barisal">Barisal</option>
                        <option onClick={() => filterItemData("Bhola")} className='text-lg text-white' value="Bhola">Bhola</option>
                        <option className='text-lg text-white' value="Bogra">Bogra</option>
                        <option className='text-lg text-white' value="Brahmanbaria">Brahmanbaria</option>
                        <option className='text-lg text-white' value="Chandpur">Chandpur</option>
                        <option className='text-lg text-white' value="Chapainawabganj">Chapainawabganj</option>
                        <option className='text-lg text-white' value="Chittagong">Chittagong</option>
                        <option className='text-lg text-white' value="Chuadanga">Chuadanga</option>
                        <option className='text-lg text-white' value="Comilla">Comilla</option>
                        <option className='text-lg text-white' value="Cox's Bazar">Cox's Bazar</option>
                        <option className='text-lg text-white' value="Dhaka">Dhaka</option>
                        <option className='text-lg text-white' value="Dinajpur">Dinajpur</option>
                        <option className='text-lg text-white' value="Faridpur">Faridpur</option>
                        <option className='text-lg text-white' value="Feni">Feni</option>
                        <option className='text-lg text-white' value="Gaibandha">Gaibandha</option>
                        <option className='text-lg text-white' value="Gazipur">Gazipur</option>
                        <option className='text-lg text-white' value="Gopalganj">Gopalganj</option>
                        <option className='text-lg text-white' value="Habiganj">Habiganj</option>
                        <option className='text-lg text-white' value="Jamalpur">Jamalpur</option>
                        <option className='text-lg text-white' value="Jessore">Jessore</option>
                        <option className='text-lg text-white' value="Jhalokati">Jhalokati</option>
                        <option className='text-lg text-white' value="Jhenaidah">Jhenaidah</option>
                        <option className='text-lg text-white' value="Joypurhat">Joypurhat</option>
                        <option className='text-lg text-white' value="Khagrachari">Khagrachari</option>
                        <option className='text-lg text-white' value="Khulna">Khulna</option>
                        <option className='text-lg text-white' value="Kishoreganj">Kishoreganj</option>
                        <option className='text-lg text-white' value="Kurigram">Kurigram</option>
                        <option className='text-lg text-white' value="Kushtia">Kushtia</option>
                        <option className='text-lg text-white' value="Lakshmipur">Lakshmipur</option>
                        <option className='text-lg text-white' value="Lalmonirhat">Lalmonirhat</option>
                        <option className='text-lg text-white' value="Madaripur">Madaripur</option>
                        <option className='text-lg text-white' value="Magura">Magura</option>
                        <option className='text-lg text-white' value="Manikganj">Manikganj</option>
                        <option className='text-lg text-white' value="Meherpur">Meherpur</option>
                        <option className='text-lg text-white' value="Moulvibazar">Moulvibazar</option>
                        <option className='text-lg text-white' value="Munshiganj">Munshiganj</option>
                        <option className='text-lg text-white' value="Mymensingh">Mymensingh</option>
                        <option className='text-lg text-white' value="Naogaon">Naogaon</option>
                        <option className='text-lg text-white' value="Narail">Narail</option>
                        <option className='text-lg text-white' value="Narayanganj">Narayanganj</option>
                        <option className='text-lg text-white' value="Narsingdi">Narsingdi</option>
                        <option className='text-lg text-white' value="Natore">Natore</option>
                        <option className='text-lg text-white' value="Netrokona">Netrokona</option>
                        <option className='text-lg text-white' value="Nilphamari">Nilphamari</option>
                        <option className='text-lg text-white' value="Noakhali">Noakhali</option>
                        <option className='text-lg text-white' value="Pabna">Pabna</option>
                        <option className='text-lg text-white' value="Panchagarh">Panchagarh</option>
                        <option className='text-lg text-white' value="Patuakhali">Patuakhali</option>
                        <option className='text-lg text-white' value="Pirojpur">Pirojpur</option>
                        <option className='text-lg text-white' value="Rajbari">Rajbari</option>
                        <option className='text-lg text-white' value="Rajshahi">Rajshahi</option>
                        <option className='text-lg text-white' value="Rangamati">Rangamati</option>
                        <option className='text-lg text-white' value="Rangpur">Rangpur</option>
                        <option className='text-lg text-white' value="Satkhira">Satkhira</option>
                        <option className='text-lg text-white' value="Shariatpur">Shariatpur</option>
                        <option className='text-lg text-white' value="Sherpur">Sherpur</option>
                        <option className='text-lg text-white' value="Sirajganj">Sirajganj</option>
                        <option className='text-lg text-white' value="Sunamganj">Sunamganj</option>
                        <option className='text-lg text-white' value="Sylhet">Sylhet</option>
                        <option className='text-lg text-white' value="Tangail">Tangail</option>
                        <option className='text-lg text-white' value="Thakurgaon">Thakurgaon</option>
                    </select>
                </div>


            </div>
        </div>
    );
};

export default Location;