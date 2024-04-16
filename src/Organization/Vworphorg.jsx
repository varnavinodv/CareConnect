import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Vworphorg = () => {
    const [data, setData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/organization/vieworphanage');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    // Function to handle search
    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();
        setSearchInput(keyword);
    };

    // Filter data based on search input
    const filteredData = data.filter(item => {
        return (
            item.name.toLowerCase().includes(searchInput) ||
            item.district.toLowerCase().includes(searchInput)
        );
    });

    return (
        <div className='w-[100%]'>
            <div className='basicbg pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORPHANAGES</div>
                {/* Search bar */}
                <form className='max-w-md mx-auto'>
                    <label htmlFor='default-search' className='text-sm font-medium text-black sr-only'>Search</label>
                    <div className='relative'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 '>
                            <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' fill='none' viewBox='0 0 20 20'>
                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                            </svg>
                        </div>
                        <input type='search' id='default-search' className='block w-full p-4 ps-10 text-sm text-black border border-orange-500 rounded-lg bg-[#FFEFBD] focus:ring-orange-500 focus:border-orange-500 dark:placeholder-gray-400 ' placeholder='Search Organization,District' onChange={handleSearch} />
                    </div>
                </form>
                {/* Table */}
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-11'>
                    <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black'>
                        <thead className='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    SL NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ORPHANAGE
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    EMAIL
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr className='bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold' key={index}>
                                    <td className='px-6 py-4 '>
                                        {index + 1}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {item.name}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {item.email}
                                    </td>
                                    <td className='px-6 py-4  hover:font-bold'>
                                        <Link to={`/organization/vieworphdtlorg/${item._id}`}><button className='hover:underline '>View</button></Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Vworphorg;
