import React from 'react'
import purpledress from './purpledress.png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState,useEffect } from 'react'
import {toast,ToastContainer} from 'react-toastify'

const Vwproductdtlorg = () => {

  const navigate=useNavigate()
  let id=localStorage.getItem('id')

  let {pid}=useParams()
  console.log(pid);
  const [data,setData]=useState('')
  const [data1,setdata1]=useState([''])

  const [data2,setdata2]=useState([''])
// const [limit, setLimit]=useState('')

 
    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    let handleSubmit=async (event)=>{
      event.preventDefault()
      
      // navigate('/organization/viewproductorg')
      try{

        let response=await axios.post('http://localhost:4000/organization/addtocart',{organizationId:id,productId:pid,userId:data2.users._id,count:count})
        console.log(response);
        // setLimit(response.data)
        
        if(response.data){
          toast.error(`limit exceeds, only ${response.data} remaining  (product already in cart) `)

        }
       navigate('/organization/viewcartorg')
      }
      catch(e){
        console.log(e);
      }
        
    }

    useEffect(()=>{
      let fetchdata=async ()=>{
        let response1=await axios.get(`http://localhost:4000/organization/viewproductdltorganisation/${pid}`)
        console.log(response1);
        setdata2(response1.data)
      }
      fetchdata()

      
    },[])
    console.log(data2);

    const [count,setCount]=useState(1)
    let increment=()=>{
      if(count!=data2.response?.count){
        
      setCount(count+1)
      }
  
  }
  let decrement=()=>{
      if (count!==1){
      
      setCount(count-1)
  }
 
  
}
console.log(count,'===========');

  return (
    <div className=' w-[100%]'>
      <ToastContainer/>
      <div className='basicbg2'>
        {/* <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>PRODUCTS</div> */}
        <div className='flex flex-wrap h-[100%]'>
          <div className='bg-yellow-300/40 w-[50%] flex h-[40rem]'>
            {/* <div className='w-[40px] h-[40px]'> <img src={backarrow} alt="" /></div> */}
            {/* <div className='pt-12  m-auto'> */}
              <img className=' h-[25rem] w-[20rem] m-auto rounded-2xl ' src={`http://localhost:4000/uploads/${data2.response?.img}`} alt="" />
            {/* </div> */}

          </div>
          <div className='mx-auto my-16'>
            <div className='text-center  w-[100%] m-auto'>
              <h1 className='font-bold text-3xl py-4'>{data2.response?.name}</h1>
              <p className='font-semibold text-xl text-start py-2'>Category      :  {data2.response?.category} </p>
              <p className='font-semibold text-xl text-start py-2'>Count            :   {data2.response?.count}</p>
            </div>
            <div className='text-center  w-[100%] m-auto'>
              <h1 className='font-bold text-3xl py-4 text-start'>OWNER’S DETAILS</h1>
              <p className='font-semibold text-xl text-start py-2'>Name           : {data2.users?.name}</p>
              <p className='font-semibold text-xl text-start py-2'>Address       :  {data2.users?.houseName}<br />
                P.O {data2.users?.postoffice}<br />
                pin:{data2.users?.pin} <br />
                {data2.users?.district}</p>
            </div>
            {/* ----count button----- */}

            <form class="max-w-xs mx-auto pt-3">
              <label for="quantity-input" class="block mb-2 text-sm font-medium text-black ">Choose quantity:</label>
             
              <div class="relative flex items-center max-w-[8rem]">
                <button type="button" onClick={decrement} id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-orange-200  dark:hover:bg-orange-400  hover:bg-or border border-orange-500 rounded-s-lg p-3 h-11 focus:ring-orange-500  focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                  </svg>
                </button>
                <input type="text"  name="count" value={count} onChange={handleChange} data-input-counter aria-describedby="helper-text-explanation" class="bg-orange-200 border-x-0 border-orange-500 h-11 text-center text-black text-sm focus:ring-orange-500 focus:border-orange-500 block w-full py-2.5 dark:bg-orange-200 dark:border-orange-500 dark:placeholder-slate-600 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500"  required />
                <button type="button" onClick={increment} id="increment-button" data-input-counter-increment="quantity-input" class="bg-orange-200 dark:bg-orange-200 dark:hover:bg-orange-400 dark:border-orange-500 hover:bg-orange-400 border border-orange-500  rounded-e-lg p-3 h-11 focus:ring-orange-500 dark:focus:ring-orange-500  focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>

            </form>

            <div className='py-6 '><button onClick={handleSubmit} className='bg-orange-500 py-3 px-5 rounded-lg'>ADD</button></div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Vwproductdtlorg
