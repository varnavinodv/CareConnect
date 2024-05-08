import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'

const Editprofiledeliveryb = () => {
  
  let id=localStorage.getItem('id')
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  const [data,setData]=useState('')
  
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/user/viewprofile/${id}`)
      console.log(response.data);
      setUserData(response.data)
    }
    fetchdata()
},[refresh])

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
    try{
      if (data.age < 18) {
        toast.error('Age should be greater than 18')
      } else{
    if(data.cpassword!=data.password){
      toast.error('password doesnt match')

    }
    else{
      
    setrefresh(!refresh)
    const formData=new FormData();
    for (const key in data){
      if(data[key]){
        formData.append(key,data[key]);
      }
    }
    console.log(data);
    console.log(formData);
    let response=await axios.put(`http://localhost:4000/user/editprofiledboy/${id}`,formData,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response);
    toast.success('Profile updated')

    setData('')
  }
}
}
catch(e){
   
  toast.error( e.response.data.message || e.message)
}
    

    
    
    
    
  }
  return (
    <div>
       <ToastContainer/>
       <div className='registerbg w-[100%] pb-5 pt-7'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>Edit your profile</div>
         <div>
            
{/* ----forms---- */}
<form onSubmit={handleSubmit}>
    <div className='flex flex-wrap justify-evenly '>

        <div>  
           <div class="mb-2  sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
           <input onChange={handleChange} pattern="[A-Za-z]+" title="Only alphabets are allowed" placeholder={userData.name} type="text" name="name" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
           <input onChange={handleChange} pattern="[0-9]{10}" title="Please enter a valid phone number" placeholder={userData.phno} type="text" name="phno" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="hname" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">House name</label>
           <input onChange={handleChange} pattern="[A-Za-z]+" title="Only alphabets are allowed" placeholder={userData.houseName}  type="text" name="houseName" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Pin</label>
           <input onChange={handleChange} pattern="[0-9]{6}" title="Please enter a valid 6-digit PIN code" placeholder={userData.pin} type="text" name="pin" class="shadow-sm bg-[#FFE080] placeholder:text-black border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[40rem] sm:w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="idno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">ID no.</label>
           <input onChange={handleChange}  placeholder={userData.pin} type="text" name="idno" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md placeholder:text-black focus:ring-orange-600 focus:border-orange-600 block w-[40rem] sm:w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="password" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
           <input onChange={handleChange}  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" name="password" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
        </div> 
        <div>  
        <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="age" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Age</label>
           <input onChange={handleChange} placeholder={userData.age} pattern="[0-9]{2}"  title="Please enter a valid age " type="text" name="age" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[40rem] sm:w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3 pt-8 ">
           <label for="email" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Email</label>
           <input onChange={handleChange} placeholder={userData.email} type="email" name="email" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="postofc" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Post office</label>
           <input onChange={handleChange} placeholder={userData.postoffice} pattern="[A-Za-z]+" title="Only alphabets are allowed"   type="text" name="postoffice" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[40rem] sm:w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="district" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">District</label>
           <input onChange={handleChange} placeholder={userData.district}  pattern="[A-Za-z]+" title="Only alphabets are allowed"  type="text" name="district" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[40rem] sm:w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="idproof" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">ID Proof </label>
           <input onChange={handlefile} placeholder={userData.idproof}  type="file" name="idproof" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[2px]  flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="cpassword" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm Password</label>
           <input onChange={handleChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.'  type="password" name="cpassword" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
        </div>  
  
  </div>
  <div className='text-center pt-11'><button type="submit" class="text-white  bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus:ring-orange-500">UPDATE</button></div>





</form>
<div className='flex flex-wrap'></div>
{/* <div className='text-xl text-[#431515] font-semibold  pb-1'>Thanal charity organization</div> */}












         </div>


        </div>
    </div>
  )
}

export default Editprofiledeliveryb
