
import React,{useEffect, useState} from 'react'
import toy from '../Admin/toy.png'
import { Link,useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Editeventorph = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
  let {id}=useParams()
    console.log(id);
    const [userData,setUserData]=useState('')
    useEffect(()=>{
      let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/orphanage/vieweventupdate/${id}`)
        console.log(response.data);
        setUserData(response.data)
      }
      fetchdata()
    },[])
  // const [data1,setData1]=useState('')

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit=async (event)=>{
    event.preventDefault()
    // setData(data)
    // console.log(data);
    navigate('/orphanage/vieweventorph')
    let response=await axios.put(`http://localhost:4000/orphanage/updateevent/${id}`,data)
    console.log(response);
    
  }

  const convertTo12HourFormat = (time) => {
    const timeParts = time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
  return (
    <div className='w-[100%]'>
    <div>
    <div className='basicbg   pt-7 ps-10 pe-10 flex flex-wrap justify-around'>
      <div>
    <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>EDIT EVENT</div>
                                 
{/* formm */}
       <div className='w-[25rem] h-[35rem] bg-red-500/30 m-auto rounded-2xl pt-10 px-10 '>
              

<form class="max-w-sm mx-auto" onSubmit={handleSubmit}>
<div class="mb-5">
<label for="name" class="block mb-2 text-sm font-medium text-[#3E1B00]">Name</label>
<input onChange={handleChange} type="text" placeholder={userData.name}  name="name" class="shadow-sm placeholder:text-black bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
</div>
<div class="mb-5">
<div className='flex '><label for="category" class="block mb-2 text-sm font-medium text-[#3E1B00]">Date</label><p className=' text-sm'>  ({userData.date})</p></div>
<input onChange={handleChange} type="date"  placeholder={userData.date}  name="date" class="shadow-sm placeholder:text-black  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
</div>
<div class="mb-5">
<div className='flex '><label for="img" class="block mb-2 text-sm font-medium text-[#3E1B00]">Time</label><p className=' text-sm'>  ( {userData.time && convertTo12HourFormat(userData.time)} ) </p></div>
<input onChange={handleChange} type="time" name="time"  placeholder={userData.time}  class="shadow-sm placeholder:text-black bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
</div>
<div class="mb-5">
<label for="count" class="block mb-2 text-sm font-medium text-[#3E1B00]">Venue</label>
<input onChange={handleChange} type="text" name="venue"  placeholder={userData.venue}  class="shadow-sm placeholder:text-black  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
</div>
<div class="mb-5">
<label for="count" class="block mb-2 text-sm font-medium text-[#3E1B00]">Description</label>
<input onChange={handleChange} type="text" name="desription"  placeholder={userData.desription}  class="shadow-sm placeholder:text-black  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
</div>



 <button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">SUBMIT</button>
</form>
</div>

       </div>
       <div className='pt-48'>
           <div className='flex flex-wrap justify-center inspiration font-semibold '>
              <div className='text-5xl text-[#A02525]  '>Share the joy</div>
              <div className='w-[50px] h-[50px] '><img src={toy} alt="" /></div>
           </div>
           <div className='text-center text-xs mt-1'>EMBRACE THE WARMTH OF CARING BONDS.</div>


        </div>
    </div>  
</div>

</div>
  )
}

export default Editeventorph
