import React,{useState} from 'react'
import call from '../User/callbrwn.png'
import email from '../User/emailbrwn.png'
import locatn from '../User/locatnbrwn.png'
import date from '../User/date.png'
import time from '../User/time.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Sponsorshiporg = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
  // const [data1,setData1]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=(event)=>{
    event.preventDefault()
    setData(data)
    console.log(data);
    navigate('/organization/vwsponsorg')
    
  }

  return (
    <div className='w-[100%]'>
        <div className='basicbg   pt-7 ps-10 pe-10 flex flex-wrap justify-evenly'>
          <div className='ps-36'>
                        <div className='font-bold text-4xl text-amber-950 py-8'>ABCD ORPHANAGE</div>
                        <div className='text-xl font-semibold'>
                            <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                              <img  className='w-[30px] h-[30px]' src={call} alt="" />
                              <p>+91 81130493822</p>
                            </div>
                            <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                              <img className='w-[30px] h-[30px]' src={email} alt="" />
                              <p>abcd@gmail.com</p>
                            </div>
                            <div className='flex flex-wrap justify-start gap-3  pb-3 '>
                              <img  className='w-[30px] h-[30px]'  src={locatn} alt="" />
                              <p>ghsjhj hsisjk,<br />P.O huyaf, <br />
                                         pin-526713 <br />
                                         Kochi</p>
                            </div>
                        </div>
            
                        <div className=' pt-6 text-amber-950 text-balance font-bold text-3xl'>EVENTS DETAILS</div>
                        
                            
                                <div><h1 className='font-bold text-black py-4 text-xl'>CHILDREN'S DAY</h1></div>
                                <div className='text-lg font-semibold'>
                                <div className=' ps-3 gap-2 py-1 '>
                                    <p>Name:    Children’s Day </p>
                                  </div>
                                  <div className=' ps-3 gap-2 py-1'>
                                    
                                    <p>Venue:    Orphanage</p>
                                  </div>
                                  <div className=' ps-3 gap-2 py-1'>
                                    
                                    <p>Date:14/11/2024</p>
                                  </div>
                                  <div className=' ps-3 gap-2 py-1'>
                                    
                                    <p>Time:4:00pm</p>
                                  </div>
                                </div>
            </div>
           <div className='w-[25rem] h-[15rem] bg-red-500/30 m-auto rounded-2xl pt-3 px-6 '>
                  

<form class="max-w-sm mx-auto" onSubmit={handleSubmit} >
  <div class="mb-5">
  <h1 className='font-bold text-xl text-center mb-6'>SPONSORSHIP DETAILS</h1>
    <label for="purpose" class="block mb-2 text-sm font-medium text-[#3E1B00]">Purpose</label>
    <input onChange={handleChange}  type="text" name="purpose" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  {/* <div class="mb-5">
    <label for="cvv" class="block mb-2 text-sm font-medium text-[#3E1B00]">CVV</label>
    <input type="text" id="cvv" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="amt" class="block mb-2 text-sm font-medium text-[#3E1B00]">Amount</label>
    <input type="text" id="amt" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
   
<div class="flex items-center pb-3">
    <input id="link-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pb-3"></input>
    <label for="link-checkbox" class="ms-2 text-sm text-amber-950 font-semibold ">Hide identity</label>
</div> */}

  
  
  
 <div className='text-center'><button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center  ">SENT REQUEST</button></div> 
</form>
</div>



        </div>
      

      
    </div>
  )
}

export default Sponsorshiporg
