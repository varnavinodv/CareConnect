import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Vwdonatnadm = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/viewdonation');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        setFilteredData(
            data.filter(
                (item) =>
                    item.orphanage?.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.orgs?.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [data, searchQuery]);

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='w-[100%]'>
            <div className='basicbg w-[100%]  pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATIONS</div>
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
                                placeholder='Search Organization, Orphanage '
                                value={searchQuery}
                                onChange={handleSearch}
                                required
                            />
                        </div>
                    </form>
                </div>

                <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-4'>
                    <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black font-semibold '>
                        <thead className='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    SL NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    PRODUCT NAME
                                </th>

                                <th scope='col' className='px-6 py-3'>
                                    COUNT
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ORGANIZATION
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ORGPHANAGE
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    STATUS
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr key={index} className='bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]'>
                                    <th scope='row' className='px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black'>
                                        {index + 1}
                                    </th>
                                    <td className='px-6 py-4'>{item.donation?.product}</td>

                                    <td className='px-6 py-4'>{item.donation?.count}</td>
                                    <td className='px-6 py-4'>{item.orgs?.name}</td>
                                    <td className='px-6 py-4'>{item.orphanage?.name}</td>
                                    <td className='px-6 py-4'>{item.donation?.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-center mt-5'>
                    <ReactPaginate
                        pageCount={Math.ceil(filteredData.length / itemsPerPage)}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName='pagination'
                        activeClassName='active'
                    />
                </div>
            </div>
        </div>
    );
};

export default Vwdonatnadm;
