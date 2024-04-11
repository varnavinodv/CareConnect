import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Vwuseradm = () => {

    const [data,setdata]=useState([''])
    const [refresh, setRefresh] = useState(false);

    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get('http://localhost:4000/admin/viewuser')
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[refresh])

     const handleSubmit = async (status, id) => {
        setRefresh(!refresh);
        try {
            const response = await axios.put(`http://localhost:4000/admin/acceptusers/${id}`, {
                ...data,
                status: status
            });
            console.log(response);
            setdata('');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };
  return (
    <div className=' w-[100%]'>
        <div className='basicbg  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>USERS</div>
             

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
                    ADDRESS
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
            <tr class="bg-[#f8d2a0] border-b font-semibold border-orange-600 hover:bg-[#f7b866d4]">
                <td  class="px-6 py-4">
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
                   {item.houseName} <br />
                    p.o {item.postoffice} <br />
                    pin:{item.pin} <br />
                    {item.district}
                </td>
                <td class="px-6 py-4">
                   {item.status}
                </td>
                <td class="px-6 py-4">
                <button href='#' onClick={() => handleSubmit('disabled', item._id)} className='font-bold text-red-600  hover:underline'>DISABLE</button> <br />
                <button href='#' onClick={() => handleSubmit('enabled', item._id)} className='font-bold text-green-600  hover:underline'>ENABLE</button>
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

export default Vwuseradm
