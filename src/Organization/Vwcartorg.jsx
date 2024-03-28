import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import book from './book.png'
import dress from './dresses.png'
import toys from './toyss.jpg'
import axios from 'axios'

const Vwcartorg = () => {
   let id=localStorage.getItem('id')

   const [data,setData]=useState([''])

   useEffect(()=>{
      let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/organization/viewcart/${id}`)
        console.log(response);
        setData(response.data)
      }
      fetchdata()

      
    },[])

    let handleSubmit=async (status,id)=>{
   
      // setData(data)
      // console.log(data);
      // navigate('/organization/viewdeliveryboyorg')
      let response=await axios.put(`http://localhost:4000/organization/changecartstatus/${id}`,{cartstatus:status})
    console.log(response);
   
      
    }

  return (
    <div className='w-[100%]'>
        <div className='basicbg2   pt-7 ps-10 pe-10 pb-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>CART</div>
            <div className='flex flex-wrap justify-evenly pt-7 pb-12'>
                  <Link to='/organization/viewcartproductdtlorg'>
                  {data.map((item)=>(
                    
                     <div className='h-fit w-[220px] bg-white'>
                         {item.cart?.products?.map((item1)=>(
                           <>
                     <img  className='h-[200px] w-[200px] pt-4 ps-4' src={`http://localhost:4000/uploads/${item.product?.img}`} alt="" />
                     <p className='text-center font-semibold pt-1'>{item.product?.name}</p>
         
                     <p className='text-center font-semibold  text-gray-800 text-sm'>{item.users?.name}</p>
                     <p className='text-center font-semibold  text-gray-800 text-sm'>Count:{item1.count}</p>
                     </>
                     ))}
                  </div>
                   
                  ))}
                  </Link>
                  
     
            </div>
            {/* <Link to='/organization/vieworderorg'> */}
             <div className='text-center'><button onClick={()=>{handleSubmit('Ordered',id)}} className='bg-orange-500 py-3 px-5 rounded-lg font-bold '>ORDER NOW</button></div>
        </div>    
      
    </div>
  )
}

export default Vwcartorg
