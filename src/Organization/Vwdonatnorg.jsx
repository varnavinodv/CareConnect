import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Vwdonatnorg = () => {
    const id= localStorage.getItem('id')
    const [data,setdata]=useState([''])
    useEffect(()=>{

        let fetchdata=async()=>{
           let response=await axios.get(`http://localhost:4000/organization/viewdonation/${id}`)
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[])
  return (
    <div className='w-[100%] '>
       
       <div className='basicbg  pt-7 ps-10 pe-10 pb-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATIONS</div>
             

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
                    PRODUCT
                </th>
                <th scope="col" class="px-6 py-3">
                    COUNT
                </th>
                <th scope="col" class="px-6 py-3">
                   DATE
                </th>
                <th scope="col" class="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                    DELIVERY BOY
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#f8d2a0] border-b text-black font-semibold border-orange-600 hover:bg-[#f7b866d4]">
                <td class="px-6 py-4">
                   1
                </td>
                <td class="px-6 py-4">
                    ASD orph
                </td>
                <td class="px-6 py-4">
                    Bags
                </td>
                <td class="px-6 py-4">
                   3
                </td>
                <td class="px-6 py-4">
                    12/3/2021
                </td>
                <td class="px-6 py-4">
                accpted
                </td>
                <td class="px-6 py-4">
                    
                  <Link to ='/organization/assigndeliveryboyorg/donation'> <button className='bg-orange-500 text-black py-2 px-2 rounded-lg'>Assign delivery boy</button></Link>
                </td>
            </tr>
          
        </tbody>
    </table>
</div>



          
        
        </div>
    </div>
  )
}

export default Vwdonatnorg
