
import React,{useState,useEffect} from 'react'
import {toast,ToastContainer} from 'react-toastify'
import axios from 'axios'


const Editprofileorg = () => {

  let id=localStorage.getItem('id')
  console.log(id);
  const [userData,setUserData]=useState('')
  const [refresh,setrefresh]=useState(false)
useEffect(()=>{
  let fetchdata=async ()=>{
    let response=await axios.get(`http://localhost:4000/user/viewprofile/${id}`)
    console.log(response.data);
    setUserData(response.data)
  }
  fetchdata()
},[refresh])
  
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

  let handleSubmit=async (event)=>{
    event.preventDefault()
    try{
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
    let response=await axios.put(`http://localhost:4000/user/editprofile/${id}`,formData,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response);
    toast.success('Profile updated')
    setData('')

 
  }
}
catch(e){
   
  toast.error( e.response.data.message || e.message)
}
    
  }
  return (
    <div className='w-[100%] '>
      <ToastContainer/>
       <div className='registerbg h-[100%] pb-3   pt-7'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>Edit your profile</div>
         <div>
            
{/* ----forms---- */}
<form onSubmit={handleSubmit}>
    <div className='flex flex-wrap justify-evenly '>

    <div>  
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3  pt-8">
        <label  for="name" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Name</label>
        <input onChange={handleChange} placeholder={userData.name}  pattern="[A-Za-z]+" title="Only alphabets are allowed" type="text" name="name" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="phno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Phone no.</label>
        <input onChange={handleChange}  placeholder={userData.phno} pattern="[0-9]{10}" title="Please enter a valid phone number" type="text" name="phno" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Post office</label>
        <input onChange={handleChange} pattern="[A-Za-z]+" title="Only alphabets are allowed" type="text" placeholder={userData.postoffice} name="postoffice" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="district" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">District</label>
        <select onChange={handleChange} pattern="[A-Za-z]+" title="Only alphabets are allowed" type="text" placeholder={userData.district} name="district" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" >
        <option value={userData.district}>{userData.district}</option>
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
        <label for="licno" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">License no. </label>
        <input onChange={handleChange}  type="text" placeholder={userData.licenseNo} name="licenseNo" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Password</label>
        <input onChange={handleChange}  type="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.' name="password" class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
     </div> 
     <div>  
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3 pt-8 ">
        <label for="email" class=" mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950 ">Email</label>
        <input onChange={handleChange} type="email" name="email" placeholder={userData.email} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600  w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="place" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Place</label>
        <input onChange={handleChange} pattern="[A-Za-z]+" title="Only alphabets are allowed" type="text" name="place" placeholder={userData.place} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="pin" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Pin</label>
        <input onChange={handleChange} pattern="[0-9]{6}" title="Please enter a valid 6-digit PIN code" type="text" name="pin" placeholder={userData.pin} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="address" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Founding year</label>
        <input onChange={handleChange} pattern="[0-9]{4}" title="Please enter a valid year" type="text" name="fyear" placeholder={userData.fyear} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="license" class="block mb-2  text-lg font-semibold text-amber-950 dark:text-amber-950">License</label>        <a className='text-blue-900 underline text-sm'  href={`http://localhost:4000/uploads/${userData.license}`} download >(Current license)</a>

        <input onChange={handlefile}  type="file" name="license" placeholder={userData.license} class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
        </div>
        <div class="mb-2 flex flex-wrap w-[25rem] justify-between py-3">
        <label for="cpwd" class="block mb-2 text-lg font-semibold text-amber-950 dark:text-amber-950">Confirm Password</label>
        <input onChange={handleChange}  type="password" name="cpassword" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$" title='Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be 8 to 30 characters long.'  class="shadow-sm placeholder:text-black bg-[#FFE080] border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:bg-[#FFE080] dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600 dark:shadow-sm-light" 
         />
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

export default Editprofileorg
