import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Vwreportsadm = () => {
    const [data, setData] = useState([]);
    const [drop, setDrop] = useState(false);
    const [status, setStatus] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [filteredData, setFilteredData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/viewreports');
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [refresh]);

    const dropdown = () => {
        setDrop(!drop);
    };

    const dropdownClose = async (type) => {
        setStatus(type);
        try {
            const response = await axios.get(`http://localhost:4000/admin/filterreport/${type}`);
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error('Error filtering data:', error);
        }
        setDrop(false);
    };

    // Function to handle search
    const handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = data.filter(item => {
            return (
                item.user?.name.toLowerCase().includes(keyword) ||
                item.report?.year.toString().includes(keyword) ||
                item.report?.report.toLowerCase().includes(keyword)
            );
        });
        setSearchInput(keyword);
        setFilteredData(filtered);
    };

    return (
        <div className='w-[100%]'>
            <div className='basicbg pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>REPORTS</div>

                {/* Search bar */}
                <form className='max-w-lg mx-auto pb-10'>
                    <div className='flex items-center'>
                        {/* Dropdown */}
                        <div>
                            <button onClick={dropdown} id='dropdown-button' data-dropdown-toggle='dropdown' className='h-[42px] inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-orange-500 border border-gray-300 rounded-s-lg hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500 dark:text-white dark:border-orange-500' type='button'>
                                {status === 'Accepted' ? <span>Accepted</span> : status === 'Rejected' ? <span>Rejected</span> : <span>All categories</span>}{' '}
                                <svg className='w-2.5 h-2.5 ms-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                </svg>
                            </button>
                            {drop && (
                                <div id='dropdown' className='z-10 absolute bg-orange-500 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-orange-500'>
                                    <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdown-button'>
                                        <li>
                                            <button type='button' onClick={() => dropdownClose('organization')} className='inline-flex w-full px-4 py-2 hover:bg-orange-200 dark:hover:text-black'>
                                                Organization
                                            </button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={() => dropdownClose('orphanage')} className='inline-flex w-full px-4 py-2 hover:bg-orange-200 dark:hover:text-black'>
                                                Orphanage
                                            </button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={() => dropdownClose('all')} className='inline-flex w-full px-4 py-2 hover:bg-orange-200 dark:hover:text-black'>
                                                All
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        {/* Search Input */}
                        <div className='relative w-full'>
                            <input 
                                type='search' 
                                id='search-dropdown' 
                                className='block p-2.5 w-full z-20 text-sm text-black bg-white rounded-e-lg border-s-2 border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-white dark:border-s-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-black dark:focus:border-orange-500' 
                                placeholder='Search Organization,Orphanage,Year' 
                                value={searchInput} 
                                onChange={handleSearch}
                                required 
                            />
                            <div  className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-200 rounded-e-lg border border-orange-500 hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500'>
                                <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                                </svg>
                                <span className='sr-only'>Search</span>
                            </div>
                        </div>
                    </div>
                </form>

                {/* Table */}
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black'>
                        <thead className='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    SL NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    INSTITUTION
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    YEAR
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    REPORT
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr className='bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold' key={index}>
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    <td className='px-6 py-4'>{item.user?.name}</td>
                                    <td className='px-6 py-4'>{item.report?.year}</td>
                                    <td className='px-6 py-4'>
                                        <a className='hover:text-blue-600 underline text-blue-950 hover:underline' href={`http://localhost:4000/uploads/${item.report?.report}`} download>
                                            Report
                                        </a>
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

export default Vwreportsadm;
