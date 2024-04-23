import React, { useEffect, useState } from 'react'
import add from '../User/addbtn.png'
import edit from '../User/edit.png'
import dlt from '../User/delete.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Vwdonatnrequestorph = () => {
    const [data,setdata]=useState([''])

    let id=localStorage.getItem('id')
    const [refresh,setrefresh]=useState('')

    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get(`http://localhost:4000/orphanage/donationreq/${id}`)
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[refresh])

     let handledelete=(id)=>{
        let response=axios.delete(`http://localhost:4000/orphanage/deletedonationreq/${id}`)
        console.log(response)
        setrefresh(!refresh)
    }
  return (
    <div className='w-[100%] '>
                             <div className='basicbg  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATION REQUESTS</div>
             {/* button */}
             <Link to='/orphanage/addrequestorph'><button className='bg-orange-500 flex flex-wrap py-1 pe-2 rounded-lg m-auto items-center mb-8'>
                    <div><img  className='w-[55px] h-[30px] '  src={add} alt="" /></div>
                    <div className='text-white'>POST REQUEST </div>
                </button></Link>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    PRODUCT
                </th>
                <th scope="col" class="px-6 py-3">
                    COUNT
                </th>
                <th scope="col" class="px-6 py-3">
                    BALANCE COUNT
                </th>
                <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                   DONATIONS
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            // item.response?.map((item1)=>(
            <tr class="bg-[#f8d2a0] border-b font-semibold text-black border-orange-600 hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 ">
                   {index+1}
                </td>
                <td class="px-6 py-4">
                    {item?.product}
                </td>
                <td class="px-6 py-4">
                    {item?.count}
                </td>
                <td class="px-6 py-4">
                    {item?.Bcount}
                </td>
                <td class="px-6 py-4">
                    {item?.status}
                </td>
               
                <td class="px-6 py-4">
                <Link to={`/orphanage/viewdonationdetails/${item?._id}`}>
                <a href='#' className='font-semibold text-black hover:underline'>
                                                View donations
                                            </a>
                 </Link>
                </td>
               
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                {item?.count ==item?.Bcount && (
                    
                    <img onClick={()=>handledelete(item.response?._id)} className='w-[40px] h-[30px] hover:bg-red-600' src={dlt} alt="" />
                )}
                </td>
            </tr>
        //    ))
            ))}   
        </tbody>
    </table>
</div>



          
        
        </div>
      
    </div>
  )
}

export default Vwdonatnrequestorph
