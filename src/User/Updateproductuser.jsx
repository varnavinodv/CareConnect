import React,{useEffect, useState} from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom'
import toy from '../Admin/toy.png'
import axios from 'axios'

const Updateproductuser = () => {
  const navigate=useNavigate()
  const [data,setData]=useState('')
  let {id}=useParams()
    console.log(id);
    const [userData,setUserData]=useState('')
  // const [data1,setData1]=useState('')
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/user/viewupdateproduct/${id}`)
      console.log(response.data);
      setUserData(response.data)
    }
    fetchdata()
  },[])

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
    // setData(data)
    // console.log(data);
    navigate('/user/viewproductuser')
    const formData=new FormData();
    for (const key in data){
      if(data[key]){
        formData.append(key,data[key]);
      }
    }
    console.log(data);
    console.log(formData);
    let response=await axios.put(`http://localhost:4000/user/updateproduct/${id}`,formData,{
      headers:{
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response);
    setData('')

    
  }
  return (
    <div className='w-[100%]'>
          <div className='basicbg   pt-7 ps-10 pe-10 flex flex-wrap justify-around'>
          <div>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>Update product</div>
                                     
 {/* formm */}
           <div className='w-[25rem] h-[32rem] bg-red-500/30 m-auto rounded-2xl pt-10 px-10 '>
                  

<form onSubmit={handleSubmit} class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="pname" class="block mb-2 text-sm font-medium text-[#3E1B00]">Name</label>
    <input onChange={handleChange} placeholder={userData.name} type="text" name="name" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
  </div>
  <div class="mb-5">
    <label for="category" class="block mb-2 text-sm font-medium text-[#3E1B00]">Category</label>
    {/* <input onChange={handleChange}  placeholder={userData.category} type="text" name="category" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   /> */}
    <select onChange={handleChange} name="category" className="shadow-sm bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD] block p-2">
  <option value="" disabled selected hidden>{userData.category ? userData.category : 'Select a category'}</option>
  <option value="dress">Dress</option>
  <option value="toys">Toys</option>
  <option value="shoes">Shoes</option>
  <option value="books">Books</option>
  <option value="bags">Bags</option>
  <option value="others">Others</option>
</select>

  </div>
  <div class="mb-5">
    <label for="img" class="block mb-2 text-sm font-medium text-[#3E1B00]">Image</label>
    <input  onChange={handlefile}   type="file" name="img" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
    <img className='h-14 w-14 pt-2' src={`http://localhost:4000/uploads/${userData.img}`} alt="" />
  </div>
  <div class="mb-5">
    <label for="count" class="block mb-2 text-sm font-medium text-[#3E1B00]">Count</label>
    <input onChange={handleChange}  placeholder={userData.count} type="number" name="count" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "   />
  </div>
  
  
  
 <button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">UPDATE</button>
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
  )
}

export default Updateproductuser
