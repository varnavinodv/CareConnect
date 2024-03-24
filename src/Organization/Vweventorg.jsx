import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vweventorg = () => {

   const [data,setdata]=useState([''])

    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get('http://localhost:4000/organization/viewevent')
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[])

  return (
    <div className=' w-[100%]'>
        <div className='basicbg  pt-7 ps-10 pe-10 pb-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>EVENTS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                  SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   ORPHANAGE
                </th>
                <th scope="col" class="px-6 py-3">
                    EVENT
                </th>
                <th scope="col" class="px-6 py-3">
                   VENUE
                </th>
                <th scope="col" class="px-6 py-3">
                   DATE
                </th>
                <th scope="col" class="px-6 py-3">
                   TIME
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
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]">
                <th  class="px-6 py-4 ">
                   {index+1}
                </th>
                <td class="px-6 py-4">
                {item.orphanage?.name}
                </td>
                <td class="px-6 py-4">
                {item.event?.name}
                </td>
                <td class="px-6 py-4">
                {item.event?.venue}
                </td>
                <td class="px-6 py-4">
                {item.event?.date}
                </td>
                <td class="px-6 py-4">
                 {item.event?.time}
                </td>
                <td class="px-6 py-4">
               pending
                </td>
                <td class="px-6 py-4">
                  
                   <Link to={`/organization/sponsorshiporg/${item.event?._id}`}> <button className='bg-orange-500 p-1 rounded-md'>Sent sponsorship request</button></Link>
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

export default Vweventorg
