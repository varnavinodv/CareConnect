import React,{useState} from 'react'
import axios from 'axios'

const Vwdonatndboy = () => {
    const [det,setDet]= useState(false)
    // const [data,setData]= useState(false)
let status=()=>{
    setDet(!det)
}
let updateStatus=async (statusupdation)=>{
    console.log(statusupdation)
    let response=await axios.post('http://localhost:4000/deliveryboy/orderStatus',{status:statusupdation})
  console.log(response);

}
return (
<div>
<div className='basicbg w-[100%]  pt-7 ps-10 pe-10'>
   <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATIONS</div>



{/* tableee */}

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
<thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
   <tr>
       <th scope="col" class="px-6 py-3">
          SL NO.
       </th>
       
       <th scope="col" class="px-6 py-3">
           PRODUCT
       </th>
       <th scope="col" class="px-6 py-3">
           COUNT
       </th>
       <th scope="col" class="px-6 py-3">
          ORPHANAGE
       </th>
       <th scope="col" class="px-6 py-3">
           ADDRESS
       </th>
       <th scope="col" class="px-6 py-3">
           PHONE NO.
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
   <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] text-black font-semibold">
       <td  class="px-6 py-4 ">
           1.
       </td>
       
       <td class="px-6 py-4">
           Book
       </td>
       <td class="px-6 py-4">
           2
       </td>
       <td class="px-6 py-4">
           ABgG org
       </td>
       <td class="px-6 py-4">
       puthiyottil,
puthiyangadi,
calicut-9
       </td>
       <td class="px-6 py-4">
       8606574318
       </td>
       <td class="px-6 py-4">
       12/3/2023
       </td>
       <td class="px-6 py-4">
       Accepted
       </td>
       <td class="px-6 py-4 flex flex-wrap flex-col">

           <button className='text-white bg-orange-500 py-3 px-1 rounded-lg'onClick={status}>Update status</button>
           {det &&
                   
                   <div className='  p-1 bg-white text-black text-base  font-semibold rounded-lg  '>
                       <button onClick={()=>updateStatus('outForDelivery')} className='hover:bg-slate-400 p-1 rounded-lg'>Out for delivery</button>
                       <p onClick={()=>updateStatus('Delivered')}className='hover:bg-slate-400 p-1 rounded-lg'>Delivered</p>
                     </div> 
                }
       </td>
       
   </tr>
   
</tbody>
</table>
</div>


</div>  
</div>
)
}

export default Vwdonatndboy
