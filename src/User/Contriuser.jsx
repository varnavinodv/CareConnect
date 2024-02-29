import React,{useState} from 'react'
import call from './callbrwn.png'
import email from './emailbrwn.png'
import locatn from './locatnbrwn.png'
import { Link,useNavigate } from 'react-router-dom'

const Contriuser = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
  const[check,setcheck]=useState(false)
  // const [data1,setData1]=useState('')
console.log(check);
  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let checkedValue=(e)=>{
    console.log(e.target.value);
  }

  let handleSubmit=(event)=>{
    event.preventDefault()
    setData(data)
    console.log(data);
    navigate('/user/viewcontributionuser')
    
  }
  return (
    <div className='w-[100%] '>
    <div className='basicbg2   pt-7 ps-10 pe-10 flex flex-wrap justify-evenly'>
        
        <div>
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
            <div className='w-[25rem] h-[28rem] bg-red-500/30 m-auto rounded-2xl pt-10 px-10  pb-6 mb-4'>
                  

<form onSubmit={handleSubmit} class="max-w-sm mx-auto">
  <div class="mb-5">
  <h1 className='font-bold text-xl text-center mb-6'>PAYMENT DETAILS</h1>
    <label for="chname" class="block mb-2 text-sm font-medium text-[#3E1B00]">Card holder name</label>
    <input  onChange={handleChange} type="text" name="chname" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="cvv" class="block mb-2 text-sm font-medium text-[#3E1B00]">CVV</label>
    <input  onChange={handleChange} type="text" name="cvv" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="amt" class="block mb-2 text-sm font-medium text-[#3E1B00]">Amount</label>
    <input  onChange={handleChange} type="text" name="amt" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
   
<div class="flex items-center pb-3">
    <input  onChange={()=>{setcheck(!check)}} name="link-checkbox" type="checkbox" value="true" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pb-3"></input>
    <label for="link-checkbox" class="ms-2 text-sm text-amber-950 font-semibold ">Hide identity</label>
</div>

  
  
  
 <div className='text-center'><button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center  ">PAY</button></div> 
</form>
</div>
        </div>
        <div>
            {/* <img src="" alt="" /> */}
        </div>
    </div>
    </div>
  )
}

export default Contriuser
