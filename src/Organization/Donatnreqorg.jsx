import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Donatnreqorg = () => {
    let oid = localStorage.getItem('id')
    const [data,setdata]=useState([''])
    const[refresh,setrefresh]=useState(false)

    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get('http://localhost:4000/organization/viewdonationrequests')
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[refresh])

     let handleSubmit=async (status,id,sid)=>{
        setrefresh(!refresh)
        // setData(data)
        // console.log(data);
        // navigate('/organization/viewdeliveryboyorg')
        let response=await axios.put(`http://localhost:4000/organization/acceptdonation/${id}`,{status:status,organizationId:sid})
      console.log(response);
      setdata('')
        
      }
  return (
    <div className=' w-[100%] '>
        <div className='basicbg pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATION REQUESTS</div>
         
{/* tableee */}

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
                {/* <th scope="col" class="px-6 py-3">
                    CATEGORY
                </th> */}
                <th scope="col" class="px-6 py-3">
                    COUNT
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
            <tr class="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]">
                <td  class="px-6 py-4 ">
                 {index+1}
                </td>
                <td class="px-6 py-4">
                    {item.orphanage?.name}
                </td>
                {/* <td class="px-6 py-4">
                    Hand bags
                </td> */}
                <td class="px-6 py-4">
                {item.donation?.product}
                </td>
                <td class="px-6 py-4">
                  {item.donation?.count}
                </td>
                <td class="px-6 py-4">
                  {item.donation?.status}
                </td>
                <td class="px-6 py-4 flex flex-wrap flex-col">
                    
                <Link to='/organization/viewdonationorg'>
                    <button onClick={()=>{handleSubmit('Accepted',item.donation?._id,oid)}} href="#" className="font-bold text-green-600 text-left hover:underline">Accept</button></Link>
                    <button onClick={()=>{handleSubmit('Rejected',item.donation?._id)}} href="#" className="font-bold text-red-600 text-left  hover:underline">Reject</button>
                        
                    </td>
                
                {/* <td class="px-6 py-4 flex flex-wrap flex-col">
                <Link to='/organization/viewdonationorg'><div class="font-bold text-sm text-green-600 hover:underline hover:bg-white p-1 hover:rounded-lg">Accept</div></Link>
                    <div class="font-bold text-sm text-red-600 hover:underline hover:bg-white p-1 hover:rounded-lg" >Reject</div>
                </td> */}
                
            </tr>
           ))}  
        </tbody>
    </table>
</div>



</div>
    </div>
  )
}

export default Donatnreqorg
