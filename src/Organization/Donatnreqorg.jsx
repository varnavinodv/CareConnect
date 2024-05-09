import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Donatnreqorg = () => {
    let navigate = useNavigate();
    let oid = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [data1, setData1] = useState({});
    const [refresh, setRefresh] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:4000/organization/viewdonationrequests');
            console.log(response.data);
            setData(response.data);
        }
        fetchdata();
    }, [refresh]);

    let handleChange = (event) => {
        setData1({ ...data1, [event.target.name]: event.target.value });
    }

    let handleSubmit = async (did, bcount) => {
        if (data1.count > bcount || data1.count<=0 ) {
            toast.error('please enter a valid count');
        } else {
            let response = await axios.post('http://localhost:4000/organization/donateproduct', { ...data1, organizationId: oid, reqId: did });
            console.log(response);
            setActiveIndex(-1); // Reset active index after submission
            setRefresh(!refresh);
            navigate('/organization/viewdonationorg');
        }
    }

    let toggleDropdown = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    }

    return (
        <div className=' w-[100%] '>
            <ToastContainer />
            <div className='basicbg pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATION REQUESTS</div>

                {/* tableee */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">SL NO.</th>
                                <th scope="col" className="px-6 py-3">ORPHANAGE</th>
                                <th scope="col" className="px-6 py-3">PRODUCT</th>
                                <th scope="col" className="px-6 py-3">COUNT</th>
                                <th scope="col" className="px-6 py-3">BALANCE COUNT</th>
                                <th scope="col" className="px-6 py-3">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr className="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]" key={index}>
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{item.orphs?.name}</td>
                                    <td className="px-6 py-4">{item.reqs?.product}</td>
                                    <td className="px-6 py-4">{item.reqs?.count}</td>
                                    <td className="px-6 py-4">{item.reqs?.Bcount}</td>
                                    <td className="px-6 py-4 flex flex-wrap flex-col">
                                        <p onClick={() => toggleDropdown(index)} className="text-green-950 font-bold hover:underline">DONATE</p>
                                        {activeIndex === index && (
                                            <>
                                                <label htmlFor="count" className="block mb-2 text-sm font-medium text-[#3E1B00]">Count</label>
                                                <input onChange={handleChange} type="number"  name="count" className="shadow-sm bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD] block p-2" required />
                                                <button onClick={() => handleSubmit(item.reqs?._id, item.reqs?.Bcount)} className="font-bold text-red-600 text-left hover:underline">Submit</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Donatnreqorg;
