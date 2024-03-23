import React, { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import add from '../User/addbtn.png'
import axios from 'axios';

const Vwcontriadm = () => {
  const [data,setdata]=useState([''])
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get('http://localhost:4000/admin/viewcontrireq',data)
      console.log(response.data);
      setdata(response.data)
    }
    fetchdata()
  },[])

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);


    // const contribution = [
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
    //     { slno: '1', username: 'riya', orphanage:'avsd org' ,amount:'12,000',date:'12/2/2021',status:'pending' },
        
        
    //     // Add more application objects here
    //   ];

      const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  
  return (
    <div className=' w-[100%]'>
        
        <div className='basicbg  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>CONTRIBUTION REQUESTS</div>
             
            

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   PURPOSE
                </th>
                <th scope="col" class="px-6 py-3">
                   DESCRIPTION
                </th>
                <th scope="col" class="px-6 py-3">
                    TOTAL AMOUNT
                </th>
                <th scope="col" class="px-6 py-3">
                   BALANCE AMOUNT
                </th>

                <th scope="col" class="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                  ACTION
                </th>
               
            </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b text-black font-semibold border-orange-600 hover:bg-[#f7b866d4]">
                <td class="px-6 py-4">
                   {index+1}
                </td>
                <td class="px-6 py-4">
                  {item.purpose}
                </td>
                <td class="px-6 py-4">
                  {item.description}
                </td>
                <td class="px-6 py-4">
                  {item.amount}
                </td>
                <td class="px-6 py-4">
                  {item.Bamount}
                </td>
                
                <td class="px-6 py-4">
                   pending
                </td>
                <td class="px-6 py-4">
                <Link to={`/admin/viewcontridetailsadm/${item._id}`}> <a href="#" class=" font-semibold text-black hover:underline">View Contributions</a></Link><br/>
                
                </td>
            </tr>
          ))}  
        </tbody>
    </table>
</div>



          
        
        </div>
      

      
    </div>
    
  )
}

export default Vwcontriadm
