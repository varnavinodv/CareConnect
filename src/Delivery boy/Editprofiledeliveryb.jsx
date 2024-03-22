import React, { useState,useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

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

  let handleSubmit=async (event)=>{
    event.preventDefault()
    // setData(data)
    // console.log(data);
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/user/editprofile/${id}`,data)
    console.log(response);
    // if(data.cpassword!=data.password){
    //   toast.error('password doesnt match')
    // }
    
    
  }
  return (
    <div>
       <div className='registerbg w-[100%] pb-5 pt-7'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>Edit your profile</div>
         <div>
            
{/* ----forms---- */}
<form onSubmit={handleSubmit}>
    <div className='flex flex-wrap justify-evenly '>

        <div>  
           <div class="mb-2  sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3  pt-8">
           <label for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
           <input onChange={handleChange} placeholder={userData.name} type="text" name="name" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3">
           <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
           <input onChange={handleChange} placeholder={userData.phno} type="number" name="phno" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3">
           <label for="idno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">ID no.</label>
           <input onChange={handleChange} placeholder={userData.idno} type="text" name="idno" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           {/* <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password </label>
           <input type="text" id="pin" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div> */}
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3">
           <label for="password" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
           <input onChange={handleChange} placeholder={userData.password} type="password" name="password" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
        </div> 
        <div>  
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3 pt-8 ">
           <label for="email" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Email</label>
           <input onChange={handleChange} placeholder={userData.email} type="email" name="email" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           {/* <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="email" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Email</label>
           <input type="email" id="email" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div> */}
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3">
           <label for="address" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">House name</label>
           <input onChange={handleChange} placeholder={userData.houseName}  type="text" name="houseName" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[22px] flex flex-wrap w-[24rem] justify-between py-3">
           <label for="idproof" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">ID Proof </label>
           <input onChange={handleChange} placeholder={userData.idproof}  type="file" name="idproof" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
           <div class="mb-2 sm:pl-0 pl-[22px] sm:pr-0 pr-[2px]  flex flex-wrap w-[24rem] justify-between py-3">
           <label for="cpassword" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm Password</label>
           <input onChange={handleChange} placeholder={userData.cpassword} type="password" name="cpassword" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" />
           </div>
        </div>  
  
  </div>
  <div className='text-center pt-11'><button type="submit" class="text-white  bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus:ring-orange-500">UPDATE</button></div>
</form>












         </div>


        </div>
    </div>
  )
}

export default Editprofiledeliveryb
