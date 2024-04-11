import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Vwsponshistoryadm = () => {

    const [data,setdata]=useState([''])

    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get('http://localhost:4000/admin/viewsponshistory')
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[])
  return (
    <div className='w-[100%]'>
                <div className='basicbg pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>SPONSORSHIP HISTORY</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    EVENT NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    ORPHANAGE
                </th>
                <th scope="col" class="px-6 py-3">
                    ORGANIZATION
                </th>
                <th scope="col" class="px-6 py-3">
                    PURPOSE
                </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold">
                <td class="px-6 py-4">
                    {index+1}
                </td>
                <td class="px-6 py-4">
                    {item.event?.name}
                </td>
                <td class="px-6 py-4">
                    {item.orphanage?.name}
                </td>
                <td class="px-6 py-4">
                    {item.organization?.name}
                </td>
                <td class="px-6 py-4">
                {item.purpose?.purpose}
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

export default Vwsponshistoryadm
