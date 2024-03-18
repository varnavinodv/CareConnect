import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Vwcontriadm = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);


    const contribution = [
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        
        
        // Add more application objects here
      ];

      const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contribution.slice(indexOfFirstItem, indexOfLastItem);


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  
  return (
    <div className='w-[100%]'>
          
                        <div className='basicbg   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>CONTRIBUTIONS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    USER NAME
                </th>
                <th scope="col" class="px-6 py-3">
                   ORPHANAGE
                </th>
                <th scope="col" class="px-6 py-3">
                    AMOUNT
                </th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
            </tr>
        </thead>
        <tbody>
        {currentItems.map((contribution, index) => (
            <tr key={index} class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold">
                <td class="px-6 py-4">
                    {contribution.slno }
                </td>
                <td class="px-6 py-4">
                    {contribution.username}
                </td>
                <td class="px-6 py-4">
                    {contribution.orphanage}
                </td>
                <td class="px-6 py-4">
                    {contribution.amount}
                </td>
                <td class="px-6 py-4">
                    {contribution.date}
                </td>
                <td class="px-6 py-4">
                    {contribution.status}
                </td>
            </tr>
           ))} 
        </tbody>
    </table>
    
</div>
{/* Pagination */}



          
        <div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(contribution.length / itemsPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
        />
      </div>
        </div>
        
      
    </div>
    
  )
}

export default Vwcontriadm
