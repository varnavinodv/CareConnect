import React,{useState} from 'react'
import ReactPaginate from 'react-paginate';

const Vwdonatnadm = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);

    const donation=[

      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"},  
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"} , 
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"} , 
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"},  
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"} , 
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"} , 
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"}  ,
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"} , 
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"}  ,
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"},  
      {slno:1,name:"pim",category:"book",count:8,organization:"pookknnn",orphanage:"ftftf",status:"pending"} , 
    ]
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = donation.slice(indexOfFirstItem, indexOfLastItem);
  
  
    const handlePageChange = ({ selected }) => {
      setCurrentPage(selected);
    };
  return (
    <div className='w-[100%] '>
                <div className='basicbg w-[100%]  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATIONS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black font-semibold">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                   SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    PRODUCT NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    CATEGORY
                </th>
                <th scope="col" class="px-6 py-3">
                    COUNT
                </th>
                <th scope="col" class="px-6 py-3">
                    ORGANIZATION
                </th>
                <th scope="col" class="px-6 py-3">
                    ORGPHANAGE
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
            </tr>
        </thead>
        <tbody>
        {currentItems.map((donation, index) => (
            <tr  key={index}  class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                   {donation.slno}
                </th>
                <td class="px-6 py-4">
                    {donation.name}
                </td>
                <td class="px-6 py-4">
                   {donation.category}
                </td>
                <td class="px-6 py-4">
                    {donation.count}
                </td>
                <td class="px-6 py-4">
                    {donation.organization}
                </td>
                <td class="px-6 py-4">
                   {donation.orphanage}
                </td>
                <td class="px-6 py-4">
                    {donation.status}
                </td>
            </tr>
            ))} 
        </tbody>
    </table>
</div>
{/* Pagination */}



          
<div className="flex justify-center mt-5">
        <ReactPaginate
          pageCount={Math.ceil(donation.length / itemsPerPage)}
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

export default Vwdonatnadm
