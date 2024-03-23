import React,{useEffect,useState} from 'react'
import book from './book.png'
import dress from './dresses.png'
import toys from './toyss.jpg'
import bag from './bags.jpg'
import shoe from './shoes.png'
import other from './other.png'
import storybook from './storybook.png'
import frock from './frock.png'
import toyset from './toyset.png'
import backpack from './backpack.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Viewproductorg = () => {
    let id=localStorage.getItem('id')
    const [data,setdata]=useState([''])
    useEffect(()=>{
        let fetchdata=async ()=>{
          let response=await axios.get('http://localhost:4000/organization/viewproductorg',data)
          console.log(response.data);
          setdata(response.data)
        }
        fetchdata()
      },[])
  return (
    <div className='w-[100%]' >
        <div className='basicbg2  pt-7 '>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>PRODUCTS</div>

            {/* --searchbar--- */}
            <div>
            <form class="max-w-md mx-auto">   
    <label for="default-search" class=" text-sm font-medium text-black sr-only ">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400"   fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-black border border-orange-500 rounded-lg bg-[#FFEFBD] focus:ring-orange-500 focus:border-orange-500   dark:placeholder-gray-400 dark:text-white  " placeholder="Search Organization" required />
        <button type="submit" class="text-black absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2  ">Search</button>
    </div>
</form>
</div>
{/* --searchend-- */}
<div className='flex flex-wrap justify-evenly pt-7 pb-12'>
     <div className='h-[135px] w-[120px] bg-white'>
        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={book} alt="" />
        <p className='text-center font-semibold pt-1'>Books</p>
     </div>
     <div className='h-[135px] w-[120px] bg-white'>
        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={dress} alt="" />
        <p className='text-center font-semibold pt-1'>Dresses</p>
     </div>
     <div className='h-[135px] w-[120px] bg-white'>
        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={toys} alt="" />
        <p className='text-center font-semibold pt-1'>Toys</p>
     </div>
     <div className='h-[135px] w-[120px] bg-white'>
        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={bag} alt="" />
        <p className='text-center font-semibold pt-1'>Bags</p>
     </div>
     <div className='h-[135px] w-[120px] bg-white'>
        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={shoe} alt="" />
        <p className='text-center font-semibold pt-1'>Shoes</p>
     </div>
     <div className='h-[135px] w-[120px] bg-white'>
        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={other} alt="" />
        <p className='text-center font-semibold pt-1'>Others</p>
     </div>
</div>
<div className='bg-yellow-300/40 w-[60rem] m-auto h-fit flex flex-wrap  justify-evenly pb-1'>
{data.map((item,index)=>(
    
    <div >
    <Link to={`/organization/viewproductdtlorg/${item._id}`}>
    <img  className='h-[200px] w-[200px] pt-4 ps-4' src={`http://localhost:4000/uploads/${item.img}`} alt="" /></Link>
        <p className='text-center font-semibold pt -1'>{item.name}</p>
    </div>
        
    
        ))}
        </div>

    
    






         </div>
      
    </div>
  )
}

export default Viewproductorg
