import React, { useEffect, useState } from 'react'
import add from '../User/addbtn.png'
import edit from '../User/edit.png'
import dlt from '../User/delete.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Vweventorph = () => {
    const [data,setdata]=useState([''])
    let id=localStorage.getItem('id')
    const [refresh,setrefresh]=useState('')

    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get(`http://localhost:4000/orphanage/viewevent/${id}`)
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[])

     let handledelete=(id)=>{
        let response=axios.delete(`http://localhost:4000/orphanage/deleteevent/${id}`)
        console.log(response)
        setrefresh(!refresh)
    }
    const convertTo12HourFormat = (time) => {
        const timeParts = time.split(':');
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        const ampm = hours >= 12 ? 'pm' : 'am';
        const hours12 = hours % 12 || 12;
        return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    };
  return (
    <div className='w-[100%]'>
                             <div className='basicbg   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>EVENTS</div>
             {/* button */}
             <Link to='/orphanage/addeventorph'><button className='bg-orange-500 flex flex-wrap py-1 pe-2 rounded-lg m-auto items-center mb-8'>
                    <div><img  className='w-[55px] h-[30px] '  src={add} alt="" /></div>
                    <div className='text-white'>ADD EVENTS </div>
                </button></Link>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                   SL NO.
                </th>
                {/* <th scope="col" class="px-6 py-3">
                   NAME
                </th> */}
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
                   PURPOSES
                </th>
                <th scope="col" class="px-6 py-3">
                   DESCRIPTION
                </th>
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                <th scope="col" class="px-6 py-3">
                    REQUESTS
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b border-orange-600 font-semibold text-black hover:bg-[#f7b866d4]">
                <td  class="px-6 py-4 ">
                  {index+1}
                </td>
                <td class="px-6 py-4">
                    {item.name}
                </td>
                {/* <td class="px-6 py-4">
                   orphanage
                </td> */}
                <td class="px-6 py-4">
                   {item.date}
                </td>
                <td class="px-6 py-4">
                {item.time && convertTo12HourFormat(item.time)}                </td>
                <td class="px-6 py-4">
                <Link to={`/orphanage/viewpurpose/${item._id}`}>  <p className='text-black'><u>View more</u></p></Link>
                </td>
                <td class="px-6 py-4">
                   {item.desription}
                </td>
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                   <Link to={`/orphanage/editeventorph/${item._id}`}> <img className='w-[45px] h-[30px] hover:bg-blue-500' src={edit} alt="" /></Link>
                    <img onClick={()=>handledelete(item._id)}  className='w-[40px] h-[30px] hover:bg-red-600' src={dlt} alt="" />
                </td>
                <td class="px-6 py-4">
                   <Link to={`/orphanage/viewsponsorshiporph/${item._id}`}><button className='text-green-950 font-bold rounded-lg p-1'>View requests</button></Link>
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

export default Vweventorph
