import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';

const Vwdonationdetails = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);
    let {id}=useParams()

    useEffect(() => {
       
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/admin/viewdonationdetails/${id}`);
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
  return (
    <div className='w-[100%]'>
    <div className='basicbg w-[100%]  pt-7 ps-10 pe-10'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATIONS</div>
        

        <div className='relative overflow-x-auto shadow-md sm:rounded-lg pt-4'>
            <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black font-semibold '>
                <thead className='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            SL NO.
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            ORGPHANAGE
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
                            DELIVERY BOY
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
                            <td className='px-6 py-4'>{item.orph?.name}</td>
                            <td className='px-6 py-4'>{item.request?.product}</td>

                            <td className='px-6 py-4'>{item.donation?.count}</td>
                            <td className='px-6 py-4'>{item.org?.name}</td>
                            <td className='px-6 py-4'>{item.dboy?.name}</td>
                            
                            <td className='px-6 py-4'>{item.donation?.status}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className='flex justify-center mt-5'>
            <ReactPaginate
                pageCount={Math.ceil(currentItems.length / itemsPerPage)}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                onPageChange={handlePageChange}
                containerClassName='pagination'
                activeClassName='active'
            />
        </div>
    </div>
</div>
  )
}

export default Vwdonationdetails
