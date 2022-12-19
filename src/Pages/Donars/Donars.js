import React, { useEffect, useState } from 'react';
import donorsImg from '../../Assets/donors-bg.jpg'
import BloodGrp from '../../Component/BloodGrp';
import Location from '../../Component/Location';
import Loading from '../Shared/Loading/Loading';
import Navbar from '../Shared/Navbar/Navbar';
import DonarCard from './DonarCard';
const Donars = () => {

    const [donars, setDonars] = useState([])
    const [filterItem, setFilterItem] = useState([])

    const [filterBlood, setFilterBloodGrp] = useState([])

    const reverseItem = [...filterItem].reverse();

    // Pagination 
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(9);

    // loading State

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const url = `https://blood-donation-ai.onrender.com/userPaging?page=${page}&size=${size}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setDonars(data)
                setFilterItem(data)
                setFilterBloodGrp(data)
                setLoading(false)
            })
    }, [page, size])
    console.log(filterItem);

    useEffect(() => {
        fetch("https://blood-donation-ai.onrender.com/userCount")
            .then((res) => res.json())
            .then((data) => {
                const count = data.count;
                const pages = Math.ceil(count / size);
                setPageCount(pages);
            });
    }, [size]);

    const filterItemData = (categItem) => {
        const updatedItems = donars?.filter((item) => {
            return item?.district === categItem;
        });

        setFilterItem(updatedItems);
    }

    const filterBloodGrp = (blood) => {
        const filterBlood = donars?.filter((item) => {
            return item?.bloodGrp === blood;
        });

        setFilterItem(filterBlood);
    }


    return (
        <div className='font-mono'>
            <Navbar />
            <div className="md:mt-60 mt-40">
                <h1 className='text-3xl text-center font-bold text-primary'>Search a Donors</h1>
                <p className='text-xl text-center font-bold text-white'>Your Donation Can Make Someone’s Life Better</p>
            </div>
            <div>
                <div>
                    <div className='flex items-center justify-between md:w-8/12 mx-auto mt-10'>
                        <div className='flex flex-wrap items-center gap-2 w-11/12 mx-auto'>
                            <BloodGrp filterBloodGrp={filterBloodGrp} />
                            <Location filterItemData={filterItemData} />
                            <div className="form-control bg-transparent w-full max-w-xs">
                                <select className="select select-bordered text-lg border-2 border-primary font-mono text-white bg-primary">
                                    <option className='text-md text-white bg-primary' selected>Donor Type
                                    </option>
                                    <option className='text-lg text-white' >All</option>
                                    <option className='text-lg text-white' >Eligible</option>
                                </select>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <img className='w-full absolute top-0 -z-10' src={donorsImg} alt="" />
            <div className='img-background'></div>
            {loading && (
                <div className="mt-40">
                    <Loading></Loading>
                </div>
            )}
            <div className='mx-auto mt-20 md:mt-52 grid w-10/12 grid-cols-1 md:grid-cols-3 gap-10 '>

                {
                    reverseItem.map(item =>
                        <DonarCard filterItem={filterBlood} item={item}></DonarCard>
                    )
                }
            </div>
            <div className="flex justify-center flex-wrap mt-20">
                <div className="btn-group gap-2">
                    {[...Array(pageCount).keys()].map((number) => (
                    <button
                        onClick={() => setPage(number)}
                        className={
                            page === number
                                ? "bg-red-500  btn border-none text-white"
                                : "btn  rounded border-none text-black"
                        }
                    >
                        {number + 1}
                    </button>
                    ))}
                    <select className='pl-4 bg-primary text-white' onChange={(e) => setSize(e.target.value)}>
                        <option value="6">6</option>
                        <option value="9" selected>
                            9
                        </option>
                        <option value="18">18</option>
                        <option value="27">27</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Donars;