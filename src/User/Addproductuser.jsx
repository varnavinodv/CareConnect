import React,{useState} from 'react'
import toy from '../Admin/toy.png'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'

const Addproductuser = () => {
  let id=localStorage.getItem('id')
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
  let handleSubmit=async (event)=>{
    event.preventDefault()
    // setData(data)
    // console.log(data);
    if(data.count<=0){
      toast.error('Count cannot be 0')
    }
    else{
          
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('category', data.category);
    formData.append('count', data.count);
    formData.append('img', data.img);
    formData.append('userId',id)
    let response=await axios.post('http://localhost:4000/user/addProduct',formData, {
      headers: {
        'Content-Type': 'multipart/form-data'  // Set the content type for FormData
      }})
      console.log(response);
      navigate('/user/viewproductuser')
    }
    
  }
  return (
    <div className='w-[100%]'>
      <ToastContainer/>
        <div className='basicbg   pt-7 ps-10 pe-10 flex flex-wrap justify-around'>
          <div>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>Add product</div>

        <h1></h1>
                                     
 {/* formm */}
           <div className='w-[25rem] h-[30rem] bg-red-500/30 m-auto rounded-2xl pt-10 px-10 '>
                  

<form  onSubmit={handleSubmit} class="max-w-sm mx-auto">
  <div class="mb-5">
    <label for="name" class="block mb-2 text-sm font-medium text-[#3E1B00]">Name</label>
    <input  onChange={handleChange}  type="text" name="name" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="category" class="block mb-2 text-sm font-medium text-[#3E1B00]">Category</label>
    {/* <input  onChange={handleChange} type="text" name="category" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required /> */}
    <select onChange={handleChange} name="category" className="shadow-sm bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD] block p-2" required>
  <option value="">Select a category</option>
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
    <input  onChange={handlefile} type="file" name="img" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  <div class="mb-5">
    <label for="count" class="block mb-2 text-sm font-medium text-[#3E1B00]">Count</label>
    <input  onChange={handleChange} type="number" name="count" class="shadow-sm  bg-[#FFEFBD] border w-full border-[#FFEFBD] text-black text-sm rounded-lg focus:ring-[#FFEFBD]  block  p-2      "  required />
  </div>
  
  
  
 <button type="submit" class="text-white mx-auto bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">ADD PRODUCT</button>
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

export default Addproductuser
