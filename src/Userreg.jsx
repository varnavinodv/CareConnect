import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast,ToastContainer} from 'react-toastify'


const Userreg = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
   
    
  }

let handleSubmit=async(event)=>{
  try{

    event.preventDefault()
    if(data.cpassword!=data.password){
      toast.error('password doesnt match')

    }
    else{
      if(data.age<18){
        toast.error('age should be greater than 18')
      }

      else{
      let response=await axios.post('http://localhost:4000/user/registeruser',{...data,userType:'user'})
      console.log(response);
      alert('successfully registered')
      
      navigate('/')
      }
      
    }
  }
  catch(e){
   
    toast.error( e.response.data.message || e.message)
  }
  
}




  return (
    <div className='w-[100%]'>
       <ToastContainer/>
        <div className='registerbg  pb-6 pt-7'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>USER REGISTRATION</div>
         <div>
            
{/* ----forms---- */}
<form onSubmit={handleSubmit} >
    <div className='flex flex-wrap justify-evenly '>

        <div>  
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3  pt-8">
           <label for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
           <input onChange={handleChange} pattern="[A-Za-z ]+" title="Only alphabets are allowed"  type="text" name="name" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="email" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Email</label>
           <input onChange={handleChange}  type="email" name="email" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="hname" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">House Name</label>
           <input onChange={handleChange} pattern="[A-Za-z ]+" title="Only alphabets are allowed" type="text" name="houseName" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Pin </label>
           <input onChange={handleChange} pattern="[0-9]{6}" title="Please enter a valid 6-digit PIN code" type="text" name="pin" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="pwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
           <input onChange={handleChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" name="password" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
        </div> 
        <div>  
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3 pt-8 ">
           <label for="age" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Age</label>
           <input onChange={handleChange} pattern="[0-9]{2}" title="Please enter a valid age " type="text" name="age" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
           <input onChange={handleChange}  pattern="[0-9]{10}" title="Please enter a valid phone number" type="text" name="phno" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="postofc" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Post office</label>
           <input onChange={handleChange} pattern="[A-Za-z ]+" title="Only alphabets are allowed"  type="text" name="postoffice" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="district" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">District </label>
           <select onChange={handleChange} pattern="[A-Za-z]+" title="Only alphabets are allowed"  type="text" name="district" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required >
           <option value="">---Select district---</option>

           <option value="Thiruvananthapuram">Thiruvananthapuram</option>
  <option value="Kollam">Kollam</option>
  <option value="Pathanamthitta">Pathanamthitta</option>
  <option value="Alappuzha">Alappuzha</option>
  <option value="Kottayam">Kottayam</option>
  <option value="Idukki">Idukki</option>
  <option value="Ernakulam">Ernakulam</option>
  <option value="Thrissur">Thrissur</option>
  <option value="Palakkad">Palakkad</option>
  <option value="Malappuram">Malappuram</option>
  <option value="Kozhikode">Kozhikode</option>
  <option value="Wayanad">Wayanad</option>
  <option value="Kannur">Kannur</option>
  <option value="Kasaragod">Kasaragod</option>
           </select>
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="cpwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm password</label>
           <input onChange={handleChange} pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' type="password" name="cpassword" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
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

export default Userreg
