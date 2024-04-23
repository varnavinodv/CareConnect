import React, { useEffect, useState } from 'react'
import add from '../User/addbtn.png'
import edit from '../User/edit.png'
import dlt from '../User/delete.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Vwreportsorg = () => {
    let id=localStorage.getItem('id')
    const [data,setdata]=useState([''])
    const [refresh,setrefresh]=useState('')

    let handledelete=(id)=>{
        let response=axios.delete(`http://localhost:4000/organization/deletereport/${id}`)
        console.log(response)
        setrefresh(!refresh)
    }

    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get(`http://localhost:4000/organization/viewreports/${id}`)
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[refresh])
  return (
    <div className='w-[100%]'>
                              <div className='basicbg   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>REPORTS</div>
             {/* button */}
             <Link to='/organization/addreportorg'><button className='bg-orange-500 flex flex-wrap py-1 pe-2 rounded-lg m-auto items-center mb-8'>
                    <div><img  className='w-[55px] h-[30px] '  src={add} alt="" /></div>
                    <div className='text-white'>ADD REPORT </div>
                </button></Link>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                 YEAR
                </th>
                <th scope="col" class="px-6 py-3">
                    REPORT
                </th>
               
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold text-black">
                <td class="px-6 py-4 ">
                    {index+1}
                </td>
                <td class="px-6 py-4">
                    {item.year}
                </td>
                <td class="px-6 py-4">
                   {item.report}
                </td>
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                    <Link to={`/organization/editreportorg/${item._id}`}><img className='w-[45px] h-[30px] hover:bg-blue-400' src={edit} alt="" /></Link>
                    <img onClick={()=>handledelete(item._id)}  className='w-[40px] h-[30px] hover:bg-red-600' src={dlt} alt="" />
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

export default Vwreportsorg