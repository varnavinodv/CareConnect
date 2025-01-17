import React,{useState} from 'react'
import toy from '../Admin/toy.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'


const ContriRequest = () => {
    let id=localStorage.getItem('id')
  const [data,setData]=useState('')


    const navigate = useNavigate()

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    if(data.amount<100){
      toast.error('Minimum of 100 rupees should be requested')
    }
    else{
    let response=await axios.post('http://localhost:4000/orphanage/contributionRequest',{...data,orphanageId:id})
    console.log(response);
    navigate('/orphanage/viewcontributnorph')
    }
    
  }
    
  return (
    <div className='w-[100%] '>
      <ToastContainer/>
        <div className='basicbg  pt-7 ps-10 pe-10 flex flex-wrap justify-around'>
          <div>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ADD CONTRIBUTION REQUEST</div>
        
                                    
 {/* formm */}
           <div className='w-[25rem] h-[25rem] bg-red-500/30 m-auto rounded-2xl pt-10 px-10 '>
                  

<form onSubmit={handleSubmit} class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="pname" class="block mb-2 text-sm font-medium text-[#3E1B00]">Purpose</label>
    <input onChange={handleChange} type="text" name="purpose" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="category" class="block mb-2 text-sm font-medium text-[#3E1B00]">Amount</label>
    <input onChange={handleChange} type="number" name="amount" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="category" class="block mb-2 text-sm font-medium text-[#3E1B00]">Description</label>
    <input onChange={handleChange} type="text" name="description" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  
  {/* <div class="mb-5">
    <label for="count" class="block mb-2 text-sm font-medium text-[#3E1B00]"></label>
    <input onChange={handleChange} type="number" name="count" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div> */}
  
  
  
 <button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">ADD</button>
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

export default ContriRequest
