import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

const Vwdeliveryboyadm = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/admin/viewdeliveryboy');
                console.log(response.data);
                setData(response.data);
                setFilteredData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = data.filter((item) =>
            item.Deliveryboy?.name.toLowerCase().includes(query) ||
            item.Deliveryboy?.email.toLowerCase().includes(query) ||
            item.Organization?.name.toLowerCase().includes(query) ||
            item.Deliveryboy?.district.toLowerCase().includes(query) 
        );
        setFilteredData(filtered);
    };

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='w-[100%]'>
            <div className='basicbg pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DELIVERY BOYS</div>

                {/* Search bar */}
                <div>
                    <form className='max-w-md mx-auto'>
                        <label htmlFor='default-search' className='text-sm font-medium text-black sr-only'>
                            Search
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 start-0 flex items-center ps-3'>
                                <svg className='w-4 h-4 text-gray-500 dark:text-gray-400' fill='none' viewBox='0 0 20 20'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                                </svg>
                            </div>
                            <input
                                type='search'
                                id='default-search'
                                className='block w-full p-4 ps-10 text-sm text-black border border-orange-500 rounded-lg bg-[#FFEFBD] focus:ring-orange-500 focus:border-orange-500 dark:placeholder-gray-400 dark:text-black'
                                placeholder='Search Organization, Delivery boys'
                                value={searchQuery}
                                onChange={handleSearch}
                                required
                            />
                            
                        </div>
                    </form>
                </div>
                {/* Search end */}

                <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-4'>
                    <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black'>
                        <thead className='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    SL NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    NAME
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    AGE
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    EMAIL
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    PHONE NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ADDRESS
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ORGANIZATION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item, index) => (
                                <tr className='bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold' key={index}>
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    <td className='px-6 py-4'>{item.Deliveryboy?.name}</td>
                                    <td className='px-6 py-4'>{item.Deliveryboy?.age}</td>
                                    <td className='px-6 py-4'>{item.Deliveryboy?.email}</td>
                                    <td className='px-6 py-4'>{item.Deliveryboy?.phno}</td>
                                    <td className='px-6 py-4'>
                                        {item.Deliveryboy?.houseName} <br />
                                        P.O {item.Deliveryboy?.postoffice} <br />
                                        pin:{item.Deliveryboy?.pin} <br />
                                        {item.Deliveryboy?.district}
                                    </td>
                                    <td className='px-6 py-4'>{item.Organization?.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
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

export default Vwdeliveryboyadm;
