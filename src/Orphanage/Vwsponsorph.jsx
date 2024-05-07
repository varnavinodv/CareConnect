import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Vwsponsorph = () => {

    const [data,setData]=useState([''])
    const[refresh,setrefresh]=useState(false)
    let {id} =useParams()
    console.log(id);
    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get(`http://localhost:4000/orphanage/viewspons/${id}`)
          console.log(response);
          setData(response.data)
        }
        fetchdata()
    
        
      },[refresh])
      const [data1,setdata1]=useState([''])
      let handleSubmit=async (status,id)=>{
        
        // setData(data)
        // console.log(data);
        // navigate('/organization/viewdeliveryboyorg')
        let response=await axios.put(`http://localhost:4000/orphanage/acceptsponsrequest/${id}`,{...data,status:status})
      console.log(response);
      setdata1('')
      if(response){
        setrefresh(!refresh)
      }
        
      }
  return (
    <div className='w-[100%] '>
         <div>
        <div className='basicbg  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>SPONSORSHIPS</div>
        


{/* tableee */}

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO. 
                </th>
                <th scope="col" class="px-6 py-3">
                   EVENT
                </th>
                <th scope="col" class="px-6 py-3">
                    ORGANIZATION
                </th>
                <th scope="col" class="px-6 py-3">
                    PURPOSE
                </th>
                {/* <th scope="col" class="px-6 py-3">
                    STATUS
                </th>
                <th scope="col" class="px-6 py-3">
                   ACTION
                </th> */}
                
                
            </tr>
        </thead>
        <tbody>
        {data?.map((item,index)=>(
          <>
          {item.organization!=null &&
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold text-black">
                <td class="px-6 py-4 ">
                   {index+1}
                </td>
                <td class="px-6 py-4">
                  {item.event?.name}
                   </td>
                <td class="px-6 py-4">
                  {item.organization?.name}
                </td>
                <td class="px-6 py-4">
                   {item.purpose?.purpose}
                </td>
                {/* <td class="px-6 py-4">
                {item.sponsorship?.status}
                </td> */}
                {/* <td class="px-6 py-4 flex flex-wrap flex-col">
                    <button onClick={()=>{handleSubmit('Accepted',item.sponsorship?._id)}}  class="font-medium text-red-600 hover:underline hover:bg-white p-1">ACCEPT</button>
                    <button onClick={()=>{handleSubmit('Rejected',item.sponsorship?._id)}}  class="font-medium text-green-600 hover:underline hover:bg-white p-1">REJECT</button>
                </td> */}
                
            </tr>
          }
          </>
             ))}   
        </tbody>
    </table>
</div>


    </div>  
    </div>

      
    </div>
  )
}

export default Vwsponsorph
