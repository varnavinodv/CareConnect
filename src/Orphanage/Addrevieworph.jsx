import React,{useState} from 'react'
import call from '../User/callbrwn.png'
import email from '../User/emailbrwn.png'
import locatn from '../User/locatnbrwn.png'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

const Addrevieworph = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
  // const [data1,setData1]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    // setData(data)
    // console.log(data);
    let response=await axios.post('http://localhost:4000/orphanage/postreview',data)
    console.log(response);
    navigate('/orphanage/vieworgdtlorph')
    
  }
  return (
    <div className=' w-[100%] '>
    <div className='basicbg2 ps-40 flex flex-wrap justify-between'>
      <div >
        <div className='font-bold text-4xl text-amber-950 py-8'>ABCD ORGANIZATION</div>
        <div>
            <div className='flex flex-wrap justify-center gap-3 pb-3'>
              <img  className='w-[30px] h-[30px]' src={call} alt="" />
              <p>+91 81130493822</p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 pb-3'>
              <img className='w-[30px] h-[30px]' src={email} alt="" />
              <p>abcd@gmail.com</p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 pe-8 pb-3'>
              <img  className='w-[30px] h-[30px]'  src={locatn} alt="" />
              <p>ghsjhj hsisjk,<br />P.O huyaf, <br />
                         pin-526713 <br />
                         Kochi</p>
            </div>
        </div>
        <div className='w-[25rem] h-[20rem] bg-red-500/30 m-auto rounded-2xl pt-6 mb-4 px-10 '>
            <div><h1 className='font-bold text-2xl pb-2 text-center'> ADD REVIEW</h1></div>
                  

                  <form onSubmit={handleSubmit} class="max-w-sm mx-auto">
                    <div class="mb-5">
                      <label for="name" class="block mb-2 text-sm font-medium text-[#3E1B00]">Review</label>
                      <input onChange={handleChange} type="text" name="review" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
                    </div>
                    {/* <div class="mb-5">
                      <label for="category" class="block mb-2 text-sm font-medium text-[#3E1B00]">Category</label>
                      <input onChange={handleChange} type="text" name="category" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
                    </div>
                    <div class="mb-5">
                      <label for="img" class="block mb-2 text-sm font-medium text-[#3E1B00]">Image</label>
                      <input onChange={handleChange} type="file" name="img" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
                    </div>
                    <div class="mb-5">
                      <label for="count" class="block mb-2 text-sm font-medium text-[#3E1B00]">Count</label>
                      <input onChange={handleChange} type="number" name="count" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
                    </div> */}
                    
                    
                    
                    <button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">ADD REVIEW</button>
                  </form>
                  </div>
                  
        
        
      </div>
      <div className=''>
        {/* <img className='h-[35rem] w-[35rem] items-end '   src={girls} alt="" /> */}
      </div>



    </div>
  
</div>
  )
}

export default Addrevieworph
