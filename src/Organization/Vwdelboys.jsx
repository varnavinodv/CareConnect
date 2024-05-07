import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import sbook from '../Admin/sbook.jpg'
import add from '../User/addbtn.png'
import edit from '../User/edit.png'
import dlt from '../User/delete.png'
import hide from './hide.png'
import axios from 'axios'

const Vwdelboys = () => {
    const [data,setdata]=useState([''])
    const [refresh,setrefresh]=useState('')
    let id=localStorage.getItem('id')


    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get(`http://localhost:4000/organization/viewdeliveryboy/${id}`)
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[refresh])

     let handledelete=(id)=>{
        let response=axios.delete(`http://localhost:4000/organization/deletedeliveryboy/${id}`)
        console.log(response)
        setrefresh(!refresh)
    }
  return (
    <div className='w-[100%]'>
        <div className=' '>
                                <div className='basicbg pb-4  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DELIVERY BOYS</div>
             {/* button */}
             <Link to='/organization/adddeliveryboy'><button className='bg-orange-500 flex flex-wrap py-1 pe-2 rounded-lg m-auto hover:px-2 hover:py-2   items-center mb-8'>
                    <div><img  className='w-[55px] h-[30px] '  src={add} alt="" /></div>
                    <div className='text-white '>ADD </div>
                </button></Link>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    AGE
                </th>
                <th scope="col" class="px-6 py-3">
                  EMAIL
                </th>
                <th scope="col" class="px-6 py-3">
                    PHONE NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    ID NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   ID PROOF
                </th>
                <th scope="col" class="px-6 py-3">
                    ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b border-orange-600 font-semibold hover:bg-[#f7b866d4] ">
                <td class="px-6 py-4">
                    {index+1}
                </td>
                <td class="px-6 py-4">
                   {item.name}
                </td>
                <td class="px-6 py-4">
                   {item.age}
                </td>
                <td class="px-6 py-4">
                  {item.email}
                </td>
                <td class="px-6 py-4">
                  {item.phno}
                </td>
                <td class="px-6 py-4">
                   {item.idno}
                </td>
                <td class="px-6 py-4">
                <a className='hover:text-blue-600 hover:underline' target='_blank' href={`http://localhost:4000/uploads/${item.idproof}`} download>
                                            ID proof
                                        </a>
                </td>
                <td class="px-6 py-4">
                    {item.houseName} <br />
                    P.O{item.postoffice} <br />
                   Pin:{item.pin} <br />
                {item.district}
                </td>

                <td class="px-6 py-6 flex flex-wrap justify-evenly items-center ">
                    <img onClick={()=>handledelete(item._id)} className='w-[40px] h-[30px] hover:bg-red-600' src={dlt} alt="" />
                </td>
            </tr>
          ))}   
        </tbody>
    </table>
</div>



          
        
        </div>
    </div>
      
    </div>
  )
}

export default Vwdelboys
