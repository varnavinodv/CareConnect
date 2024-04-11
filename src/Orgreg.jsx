import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'

const Orgreg = () => {
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

  let handleSubmit=async(event)=>{
    try{
      event.preventDefault()
      // setData(data)
      // console.log(data);
      navigate('/')
      let formData = new FormData();
        formData.append('name', data.name);
        formData.append('phno', data.phno);
        formData.append('postoffice', data.postoffice);
        formData.append('district', data.district);
        formData.append('licenseNo',data.licenseNo)
        formData.append('password',data.password)
        formData.append('email',data.email)
        formData.append('place',data.place)
        formData.append('pin',data.pin)
        formData.append('fyear',data.fyear)
        formData.append('license',data.license)
        formData.append('cpassword',data.cpassword)
        formData.append('userType','organization')
    let response=await axios.post('http://localhost:4000/user/register',formData, {
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }})
  console.log(response);
      // let response=await axios.post('http://localhost:4000/user/register',{...data,userType:'organization'})
      // console.log(response);
    }
    catch(e){
   
      toast.error('Email already exist ')
    }
    
    
  }
  return (
    <div className='w-[100%] '>
      <ToastContainer/>
    <div className='registerbg h-[100%] pb-3   pt-7'>
     <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORGANIZATION REGISTRATION</div>
      <div>
         
{/* ----forms---- */}
<form onSubmit={handleSubmit}>
 <div className='flex flex-wrap justify-evenly '>

     <div>  
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3  pt-8">
        <label  for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
        <input onChange={handleChange}  type="text" name="name" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
        <input onChange={handleChange}  type="text" name="phno" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Post office</label>
        <input onChange={handleChange}  type="text" name="postoffice" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="district" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">District</label>
        <input onChange={handleChange}  type="text" name="district" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="licno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">License no. </label>
        <input onChange={handleChange}  type="text" name="licenseNo" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
        <input onChange={handleChange}  type="password" name="password" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
     </div> 
     <div>  
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3 pt-8 ">
        <label for="email" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Email</label>
        <input onChange={handleChange} type="email" name="email" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="address" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Place</label>
        <input onChange={handleChange}  type="text" name="place" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Pin</label>
        <input onChange={handleChange}  type="text" name="pin" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="address" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Founding year</label>
        <input onChange={handleChange}  type="text" name="fyear" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="license" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">License</label>
        <input onChange={handlefile}  type="file" name="license" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="cpwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm Password</label>
        <input onChange={handleChange}  type="password" name="cpassword" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
        </div>
     </div>  

</div>
<div className='text-center pt-11'><button type="submit" class="text-white  bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus:ring-orange-500">REGISTER</button></div>
</form>












      </div>


     </div>
 </div>
  )
}

export default Orgreg
