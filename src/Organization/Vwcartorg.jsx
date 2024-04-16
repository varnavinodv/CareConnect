import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import book from './book.png'
import dress from './dresses.png'
import toys from './toyss.jpg'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Vwcartorg = () => {
   let id=localStorage.getItem('id')

   const [data,setData]=useState([''])
   const[refresh,setrefresh]=useState(false)
   const navigate=useNavigate()

   useEffect(()=>{
      let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/organization/viewcart/${id}`)
        console.log(response);
        setData(response.data)
      }
      fetchdata()

      
    },[refresh])

    let handleSubmit=async (status,id)=>{
      setrefresh(!refresh)
   
      // setData(data)
      // console.log(data);
      // navigate('/organization/viewdeliveryboyorg')
      let response=await axios.put(`http://localhost:4000/organization/changecartstatus/${id}`,{cartstatus:status})
    console.log(response);
   navigate('/organization/vieworderorg')
      
    }


    let handledelete=(id)=>{
      let response=axios.delete(`http://localhost:4000/organization/deletecartproduct/${id}`)
      console.log(response)
      setrefresh(!refresh)
  }

    // const filteredData = data.product?.filter(product => product.count > 0)

  return (
    <div className='w-[100%]'>
        <div className='basicbg   pt-7 ps-10 pe-10 pb-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>CART</div>
            {/* <div className='flex flex-wrap justify-evenly pt-7 pb-12'>
                  <Link to='/organization/viewcartproductdtlorg'>
                  {data.map((item)=>(
                    
                     <div className='h-fit w-[220px] bg-white'>
                     <img  className='h-[200px] w-[200px] pt-4 ps-4' src={`http://localhost:4000/uploads/${item.product?.img}`} alt="" />
                     <p className='text-center font-semibold pt-1'>{item.product?.name}</p>
         
                     <p className='text-center font-semibold  text-gray-800 text-sm'>{item.users?.name}</p>
                     {item?.cart?.products?.map((counts)=>(

                       <p className='text-center font-semibold  text-gray-800 text-sm'>Count:{counts.count}</p>
                     ))}
                  </div>
                   
                  ))}
                  </Link>
                  
                  
     
            </div> */}


<div className='flex flex-wrap justify-evenly pt-7 pb-12'>
      {data.map((item, index) => (
        <div className='h-fit w-[220px] bg-white'>
            <Link key={index} to={`/organization/viewcartproductdtlorg/${item.product?._id}`}>
            <img className='h-[200px] w-[200px] pt-4 ps-4' src={`http://localhost:4000/uploads/${item.product?.img}`} alt="" />
            </Link>
            <p className='text-center font-semibold pt-1'>{item.product?.name}</p>
            <p className='text-center font-semibold text-gray-800 text-sm'>{item.users?.name}</p>
            {/* Display count for each product */}
            {item?.cart?.products?.map((product, idx) => (
              // Only display count if product's ID matches
              product.productId === item.product?._id && (
                <p key={idx} className='text-center font-semibold text-gray-800 text-sm'>Count: {product.count}</p>
              )
            ))}
           
            <button onClick={()=>handledelete(item.product?._id)} className='bg-orange-500 p-1 text-white mx-20'>Delete</button>
          </div>
      ))}
    </div>
            {/* <Link to='/organization/vieworderorg/'> */}
             <div className='text-center'><button onClick={()=>{handleSubmit('Ordered',id)}} className='bg-orange-500 py-3 px-5 rounded-lg font-bold '>ORDER NOW</button></div>
        </div>    
      
    </div>
  )
}

export default Vwcartorg
