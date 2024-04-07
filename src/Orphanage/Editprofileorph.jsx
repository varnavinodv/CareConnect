import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Editprofileorph = () => {

  let id=localStorage.getItem('id')
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
  const navigate=useNavigate()
  const [data,setData]=useState('')
  // const [data1,setData1]=useState('')
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
    setData(data)
    console.log(data);
    // navigate('/orphanage/vieworgdtlorph')
    setrefresh(!refresh)
    let response=await axios.put(`http://localhost:4000/user/editprofile/${id}`,data)
    console.log(response);
    
  }
  return (
    <div className='w-[100%]'>
       <div className='registerbg  pb-5 pt-7'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>Edit your profile</div>
         <div>
            
{/* ----forms---- */}
<form onSubmit={handleSubmit}>
    <div className='flex flex-wrap justify-evenly '>

    <div>  
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3  pt-8">
        <label  for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
        <input onChange={handleChange} placeholder={userData.name}  type="text" name="name" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
        <input onChange={handleChange} placeholder={userData.phno} type="text" name="phno" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Post office</label>
        <input onChange={handleChange} placeholder={userData.postoffice} type="text" name="postoffice" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="district" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">District</label>
        <input onChange={handleChange}  type="text" placeholder={userData.district} name="district" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="licno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">License no. </label>
        <input onChange={handleChange}  type="text" placeholder={userData.licenseNo} name="licenseNo" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
        <input onChange={handleChange}  type="password" placeholder={userData.password} name="password" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
     </div> 
     <div>  
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3 pt-8 ">
        <label for="email" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Email</label>
        <input onChange={handleChange} type="email" placeholder={userData.email} name="email" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="place" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Place</label>
        <input onChange={handleChange}  type="text" placeholder={userData.place} name="place" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Pin</label>
        <input onChange={handleChange}  type="text" name="pin" placeholder={userData.pin} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="address" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Founding year</label>
        <input onChange={handleChange}  type="text" name="fyear" placeholder={userData.fyear} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="license" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">License</label>
        <input onChange={handleChange}  type="file" name="license" placeholder={userData.license} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="cpwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm Password</label>
        <input onChange={handleChange}  type="password" name="cpassword" placeholder={userData.cpassword} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light"  />
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

export default Editprofileorph
