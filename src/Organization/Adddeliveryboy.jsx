import React,{ useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'

const Adddeliveryboy = () => {
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
    navigate('/organization/viewdeliveryboyorg')
    
  }
  return (
    <div className='w-[100%]'>
       <div className='registerbg h-[100%]  pt-7'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ADD NEW DELIVERY BOY</div>
         <div>
            
{/* ----forms---- */}
<form onSubmit={handleSubmit}>
    <div className='flex flex-wrap justify-evenly '>

        <div>  
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3  pt-8">
           <label for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
           <input onChange={handleChange} type="text" name="name" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
           <input onChange={handleChange}  type="text" name="phno" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="idno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">ID no.</label>
           <input onChange={handleChange}   type="text" name="idno" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           {/* <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password </label>
           <input type="text" id="pin" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div> */}
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="pwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
           <input onChange={handleChange}  type="password" name="pwd" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
        </div> 
        <div>  
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3 pt-8 ">
           <label for="email" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Email</label>
           <input onChange={handleChange}  type="email" name="email" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           {/* <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="email" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Email</label>
           <input type="email" id="email" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div> */}
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="address" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Address</label>
           <input onChange={handleChange}  type="text" name="address" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="idproof" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">ID Proof </label>
           <input onChange={handleChange}   type="file" name="idproof" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
           <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
           <label for="cpwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm Password</label>
           <input onChange={handleChange}  type="password" name="cpwd" class="shadow-sm bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" required />
           </div>
        </div>  
  
  </div>
  <div className='text-center pt-11'><button type="submit" class="text-white  bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus:ring-orange-500">ADD</button></div>
</form>












         </div>


        </div>
    </div>
  )
}

export default Adddeliveryboy
