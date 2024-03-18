import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Vwdeliveryboyadm = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);


    const deliveryboy = [
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
        {slno:1,name:"vinay",age:52,email:"as@gmail.com",phno:9876543,address:"agshdfhg",organization:"rew"},
    ]
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = deliveryboy.slice(indexOfFirstItem, indexOfLastItem);


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  return (
    <div className='w-[100%]'>
              <div className='basicbg   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DELIVERY BOYS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    AGE
                </th>
                <th scope="col" class="px-6 py-3">
                    EMAIL
                </th>
                <th scope="col" class="px-6 py-3">
                    PHONE NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                    ORGANIZATION
                </th>
            </tr>
        </thead>
        <tbody>
        {currentItems.map((deliveryboy, index) => (
            <tr key={index} class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold">
                <td className=' px-6 py-4'>
                {deliveryboy.slno}
                </td>
                <td class="px-6 py-4">
                {deliveryboy.name}
                </td>
                <td class="px-6 py-4">
                    {deliveryboy.age}
                </td>
                <td class="px-6 py-4">
                    {deliveryboy.email}
                </td>
                <td class="px-6 py-4">
                    {deliveryboy.phno}
                </td>
                <td class="px-6 py-4">
               {deliveryboy.address}
                </td><td class="px-6 py-4">
                   {deliveryboy.organization}
                </td>

            </tr>
           ))} 
        </tbody>
    </table>
</div>
{/* Pagination */}



          
<div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(deliveryboy.length / itemsPerPage)}
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

export default Vwdeliveryboyadm
