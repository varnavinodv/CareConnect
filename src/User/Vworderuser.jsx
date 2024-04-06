import React,{useEffect, useState} from 'react'
import sbook from '../Admin/sbook.jpg'
import axios from 'axios'

const Vworderuser = () => {

    const [data,setdata]=useState([''])
    const[refresh,setrefresh]=useState(false)
    let id=localStorage.getItem('id')
    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get(`http://localhost:4000/user/vieworder/${id}`)
           console.log(response.data);
           setdata(response.data)
  
        }
        fetchdata()
     },[refresh]) 

     let handleSubmit=async (status,id)=>{
        setrefresh(!refresh)
        // setData(data)
        // console.log(data);
        // navigate('/organization/viewdeliveryboyorg')
        let response=await axios.put(`http://localhost:4000/user/acceptorder/${id}`,{...data,status:status})
      console.log(response);
        
      }

    const [det,setDet]= useState(1)
     let details=()=>{
         setDet(1)
     }

     let details2=()=>{
        setDet(2)
     }
     let details3=()=>{
        setDet(3)
     }

     
  return (
    <div className='w-[100%]'>
        <div className='basicbg   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORDERS</div>
        
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                   SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                  ORGANIZATION
                </th>
                <th scope="col" class="px-6 py-3">
                   PRODUCT
                </th>
                <th scope="col" class="px-6 py-3">
                   CATEGORY
                </th>
                <th scope="col" class="px-6 py-3">
                    COUNT
                </th>
                <th scope="col" class="px-6 py-3">
                   IMAGE
                </th>
                <th scope="col" class="px-6 py-3">
                    DATE
                </th>
                <th scope="col" class="px-6 py-3">
                   STATUS
                </th>
               
                <th scope="col" class="px-6 py-3">
                    ACTION
                </th>
                
            </tr>
        </thead>
        <tbody>
        {data.map((item,index)=>(
            
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-medium">
                <td class="px-6 py-4 ">
                    {index+1}
                </td>
                <td class="px-6 py-4">
                    {item.org?.name}
                </td>
                <td class="px-6 py-4">
                    {item.productdetail?.name}
                </td>
                <td class="px-6 py-4">
                {item.productdetail?.category}
                </td>
                {item.products?.map((item1)=>(
                item1.productId == item.productdetail?._id && 
                <>
                <td class="px-6 py-4">
                   {item1.count}
                </td>
                
                <td class="px-6 py-4">
                    <img  className='h-14 w-14' src={`http://localhost:4000/uploads/${item.productdetail?.img}`} alt="" />
                </td>
                <td class="px-6 py-4">
                    {item1.date}
                </td>
                <td class="px-6 py-4">
                    {item1.Ostatus}
                </td>
                
<td>

    {item1.Ostatus=='assigned' || item1.Ostatus=='pending' ?
    
     <>
     <div className='flex flex-col'>
     <a href="#" class="font-bold text-sm text-green-600 hover:underline hover:bg-white p-1"onClick={()=>{handleSubmit('Accepted',item.productdetail._id)}} >Accept</a>
     <a href="#" class="font-bold text-sm text-red-600 hover:underline hover:bg-white p-1" onClick={()=>{handleSubmit('Rejected',item.productdetail._id)}} >Reject</a>
     </div>
   </>
    :
    item1.Ostatus=='Accepted' &&
    <>
    <div className='list-none right-[30px] sm:right-[18px] p-4 bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                            <p>Delivery boy :{item.dboy?.name}
</p>
                            <p>Phone no: {item.dboy?.phno}</p>
                          </div> 
    </>
    
    
                }

</td>
</>
                 ))}






                
                
                
            </tr>
        ))}
        </tbody>
    </table>
</div>

   </div>   
    </div>
  )
}

export default Vworderuser
