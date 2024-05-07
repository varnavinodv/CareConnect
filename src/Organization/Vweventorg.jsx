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

     const convertTo12HourFormat = (time) => {
      const timeParts = time.split(':');
      const hours = parseInt(timeParts[0]);
      const minutes = parseInt(timeParts[1]);
      const ampm = hours >= 12 ? 'pm' : 'am';
      const hours12 = hours % 12 || 12;
      return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
  };

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
                {/* <th scope="col" class="px-6 py-3">
                   STATUS
                </th> */}
                <th scope="col" class="px-6 py-3">
                   ACTION
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr  class='bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]'>
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
                {/* {item.event?.date} */}
                {/* 14/11/2022 */}
                { new Date(item.event?.date).toLocaleDateString('en-GB')}
                
                </td>
                <td class="px-6 py-4">
                 {/* {item.event?.time} */}
                 {/* 4:00pm */}
                
                 {item.event?.time && convertTo12HourFormat(item.event?.time)}
                </td>
                
                <td class="px-6 py-4">
                  
                   <Link to={`/organization/sponsorshiporg/${item.event?._id}`}> <button className='text-green-950 font-bold p-1 rounded-md hover:underline'>SPONSOR</button></Link>
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
