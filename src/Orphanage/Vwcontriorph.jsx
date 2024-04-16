import React, { useEffect, useState } from 'react'
import add from '../User/addbtn.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Vwcontriorph = () => {

  const [data,setdata]=useState([''])
  let id=localStorage.getItem('id')
  const [refresh,setrefresh]=useState('')

  let handledelete=(id)=>{
    let response=axios.delete(`http://localhost:4000/orphanage/deletecontrireq/${id}`)
    console.log(response)
    setrefresh(!refresh)
}

  useEffect(()=>{
      let fetchdata=async()=>{
         let response=await axios.get(`http://localhost:4000/orphanage/viewcontrireq/${id}`)
         console.log(response.data);
         setdata(response.data)

      }
      fetchdata()
   },[])
  return (
    <div className=' w-[100%]'>
        
        <div className='basicbg  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>CONTRIBUTION REQUESTS</div>
             
            <Link to='/orphanage/contrirequest'><button className='bg-orange-500 flex flex-wrap py-1 pe-2 rounded-lg m-auto hover:px-2 hover:py-2   items-center mb-8'>
                    <div><img  className='w-[55px] h-[30px] '  src={add} alt="" /></div>
                    <div className='text-white '>ADD REQUEST </div>
                </button></Link> 

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
                   AMOUNT
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
                  {item.status}
                </td>
                <td class="px-6 py-4">
                <Link to={`/orphanage/viewcontridetails/${item._id}`}> <a href="#" class=" font-semibold text-green-600 hover:underline">View Contributions</a></Link><br/>
                { item.Bamount == item.amount &&
                <a href="#" onClick={()=>handledelete(item._id)} class="font-semibold text-red-600 hover:underline">Delete request</a>
                 }
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

export default Vwcontriorph
