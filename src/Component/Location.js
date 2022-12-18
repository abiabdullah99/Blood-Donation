import React from 'react';

const Location = ({ filterItemData }) => {
    return (
        <div>
            <div className='flex items-center'>
                <div className="form-control bg-transparent w-full max-w-xs">
                    <select className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary">
                        <option className='text-md text-white' selected>Select A District</option>
                        <option onClick={() => filterItemData("Bagerhat")} className='text-lg text-white'  value="Bagerhat">Bagerhat</option>
                        <option onClick={() => filterItemData("Bandarban")} className='text-lg text-white'  value="Bandarban">Bandarban</option>
                        <option onClick={() => filterItemData("Barguna")} className='text-lg text-white'  value="Barguna">Barguna</option>
                        <option onClick={() => filterItemData("Barisal")} className='text-lg text-white'  value="Barisal">Barisal</option>
                        <option onClick={() => filterItemData("Bhola")} className='text-lg text-white'  value="Bhola">Bhola</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Bogra")} value="Bogra">Bogra</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Brahmanbaria")} value="Brahmanbaria">Brahmanbaria</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Chandpur")} value="Chandpur">Chandpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Chapainawabganj")} value="Chapainawabganj">Chapainawabganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Chittagong")} value="Chittagong">Chittagong</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Chuadanga")} value="Chuadanga">Chuadanga</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Comilla")} value="Comilla">Comilla</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Cox's Bazar")} value="Cox's Bazar">Cox's Bazar</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Dhaka")} value="Dhaka">Dhaka</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Dinajpur")} value="Dinajpur">Dinajpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Faridpur")} value="Faridpur">Faridpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Feni")} value="Feni">Feni</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Gaibandha")} value="Gaibandha">Gaibandha</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Gazipur")} value="Gazipur">Gazipur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Gopalganj")} value="Gopalganj">Gopalganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Habiganj")} value="Habiganj">Habiganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Jamalpur")} value="Jamalpur">Jamalpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Jessore")} value="Jessore">Jessore</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Jhalokati")} value="Jhalokati">Jhalokati</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Jhenaidah")} value="Jhenaidah">Jhenaidah</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Joypurhat")} value="Joypurhat">Joypurhat</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Khagrachari")} value="Khagrachari">Khagrachari</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Khulna")} value="Khulna">Khulna</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Kishoreganj")} value="Kishoreganj">Kishoreganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Kurigram")} value="Kurigram">Kurigram</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Kushtia")} value="Kushtia">Kushtia</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Lakshmipur")} value="Lakshmipur">Lakshmipur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Lalmonirhat")} value="Lalmonirhat">Lalmonirhat</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Madaripur")} value="Madaripur">Madaripur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Magura")} value="Magura">Magura</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Manikganj")} value="Manikganj">Manikganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Meherpur")} value="Meherpur">Meherpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Moulvibazar")} value="Moulvibazar">Moulvibazar</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Munshiganj")} value="Munshiganj">Munshiganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Mymensingh")} value="Mymensingh">Mymensingh</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Naogaon")} value="Naogaon">Naogaon</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Narail")} value="Narail">Narail</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Narayanganj")} value="Narayanganj">Narayanganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Narsingdi")} value="Narsingdi">Narsingdi</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Natore")} value="Natore">Natore</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Netrokona")} value="Netrokona">Netrokona</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Nilphamari")} value="Nilphamari">Nilphamari</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Noakhali")} value="Noakhali">Noakhali</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Pabna")} value="Pabna">Pabna</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Panchagarh")} value="Panchagarh">Panchagarh</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Patuakhali")} value="Patuakhali">Patuakhali</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Pirojpur")} value="Pirojpur">Pirojpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Rajbari")} value="Rajbari">Rajbari</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Rajshahi")} value="Rajshahi">Rajshahi</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Rangamati")} value="Rangamati">Rangamati</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Rangpur")} value="Rangpur">Rangpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Satkhira")} value="Satkhira">Satkhira</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Shariatpur")} value="Shariatpur">Shariatpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Sherpur")} value="Sherpur">Sherpur</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Sirajganj")} value="Sirajganj">Sirajganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Sunamganj")} value="Sunamganj">Sunamganj</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Sylhet")} value="Sylhet">Sylhet</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Tangail")} value="Tangail">Tangail</option>
                        <option className='text-lg text-white' onClick={() => filterItemData("Thakurgaon")} value="Thakurgaon">Thakurgaon</option>
                    </select>
                </div>


            </div>
        </div>
    );
};

export default Location;