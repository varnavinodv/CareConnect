import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Vwsponshistoryadm = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/viewsponshistory');
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data.filter(
        (item) =>
            item.orphanage?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.organization?.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='w-[100%]'>
            <div className='basicbg pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>SPONSORSHIP HISTORY</div>
                <div>
                    <form className='max-w-md mx-auto'>
                        <label htmlFor='default-search' className='text-sm font-medium text-black sr-only'>
                            Search
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3'>
                                <svg
                                    className='w-4 h-4 text-gray-500 dark:text-gray-400'
                                    fill='none'
                                    viewBox='0 0 20 20'
                                >
                                    <path
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                    />
                                </svg>
                            </div>
                            <input
                                type='search'
                                id='default-search'
                                className='block w-full p-4 ps-10 text-sm text-black border border-orange-500 rounded-lg bg-[#FFEFBD] focus:ring-orange-500 focus:border-orange-500 dark:placeholder-gray-400 dark:text-black'
                                placeholder='Search Organization, Orphanage'
                                value={searchQuery}
                                onChange={handleSearch}
                                required
                            />
                        </div>
                    </form>
                </div>

                <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-4'>
                    <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black'>
                        <thead className='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    SL NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    EVENT NAME
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ORPHANAGE
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ORGANIZATION
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    PURPOSE
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr
                                    key={index}
                                    className='bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold'
                                >
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    <td className='px-6 py-4'>{item.event?.name}</td>
                                    <td className='px-6 py-4'>{item.orphanage?.name}</td>
                                    <td className='px-6 py-4'>{item.organization?.name}</td>
                                    <td className='px-6 py-4'>{item.purpose?.purpose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Vwsponshistoryadm;
