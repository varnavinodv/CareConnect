import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Userreg = () => {
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
  navigate('/')
  
}




  return (
    <div className='w-[100%]'>
        <div className='registerbg  pb-6 pt-7'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>USER REGISTRATION</div>
         <div>
            
{/* ----forms---- */}
<form onSubmit={handleSubmit} >
    <div className='flex flex-wrap justify-evenly '>

        <div>  
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3  pt-8">
           <label for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
           <input onChange={handleChange} value={data.name ? data.name : ''} type="text" name="name" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="email" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Email</label>
           <input onChange={handleChange} value={data.email ? data.email : ''} type="email" name="email" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="hname" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">House Name</label>
           <input onChange={handleChange} value={data.hname ? data.hname : ''} type="text" name="hname" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Pin </label>
           <input onChange={handleChange} value={data.pin ? data.pin : ''}type="text" name="pin" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="pwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
           <input onChange={handleChange} value={data.pwd ? data.pwd : ''} type="password" name="pwd" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
        </div> 
        <div>  
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3 pt-8 ">
           <label for="age" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Age</label>
           <input onChange={handleChange} value={data.age ? data.age : ''} type="text" name="age" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
           <input onChange={handleChange} value={data.phno ? data.phno : ''} type="text" name="phno" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="postofc" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Post office</label>
           <input onChange={handleChange} value={data.postofc ? data.postofc : ''} type="text" name="postofc" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="district" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">District </label>
           <input onChange={handleChange} value={data.district ? data.district : ''} type="text" name="district" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="cpwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm password</label>
           <input onChange={handleChange} value={data.cpwd ? data.cpwd : ''} type="password" name="cpwd" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
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
