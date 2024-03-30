import React, { useState } from 'react'
import toy from '../Admin/toy.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Addreportorg = () => {
  let id=localStorage.getItem('id')
  const navigate=useNavigate()
  const [data,setData]=useState('')
  // const [data1,setData1]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }


  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
    console.log(data);
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    // setData(data)
    // console.log(data);
    navigate('/organization/viewreportsorg')
    let formData = new FormData();
    formData.append('year', data.year);
    formData.append('report', data.report);
    formData.append('UserId', id)
    let response=await axios.post('http://localhost:4000/organization/addreport',formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
  }})
    console.log(response);
    
   
    
  }

  return (
    <div className='w-[100%] '>
        <div className='basicbg  pt-7 ps-10 pe-10 flex flex-wrap justify-around'>
          <div>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ADD REPORT</div>
                                     
 {/* formm */}
           <div className='w-[25rem] h-[20rem] bg-red-500/30 m-auto rounded-2xl pt-10 px-10 '>
                  

<form onSubmit={handleSubmit} class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="year" class="block mb-2 text-sm font-medium text-[#3E1B00]">Year</label>
    <input onChange={handleChange}  type="number" name="year" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="report" class="block mb-2 text-sm font-medium text-[#3E1B00]">Report</label>
    <input onChange={handlefile} type="file" name="report" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  
  
  
  
  <button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">ADD REPORT</button>
</form>
</div>

           </div>
           <div className='pt-48'>
               <div className='flex flex-wrap justify-center inspiration font-semibold '>
                  <div className='text-5xl text-[#A02525]  '>Share the joy</div>
                  <div className='w-[50px] h-[50px] '><img src={toy} alt="" /></div>
               </div>
               <div className='text-center text-xs mt-1'>EMBRACE THE WARMTH OF CARING BONDS.</div>


            </div>
        </div>  

      
    </div>
  )
}

export default Addreportorg
