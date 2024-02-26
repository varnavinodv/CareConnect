import React from 'react'
import { Link } from 'react-router-dom'
import bag from './bags.jpg'

const Vwordersorg = () => {
  return (
    <div>
         <div className='basicbg w-[100%]  pt-7 ps-10 pe-10 pb-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORDERS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO
                </th>
                <th scope="col" class="px-6 py-3">
                    OWNER
                </th>
                <th scope="col" class="px-6 py-3">
                   ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                    PRODUCT
                </th>
                <th scope="col" class="px-6 py-3">
                   CATEGORY
                </th>
                <th scope="col" class="px-6 py-3">
                  IMAGE
                </th>
                <th scope="col" class="px-6 py-3">
                    COUNT
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
            <tr class="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]">
                <td class="px-6 py-4">
                  1.
                </td>
                <td class="px-6 py-4">
                   Rihala
                </td>
                <td class="px-6 py-4">
                xyzw,
calicut-8
pin:673209
                </td>
                <td class="px-6 py-4">
                Hand bags
                </td>
                <td class="px-6 py-4">
                   Bag
                </td>
                <td class="px-6 py-4">
                   <img className='h-14 w-14' src={bag} alt="" />
                </td>
                <td class="px-6 py-4">
                   3
                </td>
                <td class="px-6 py-4">
                   12/2/2021
                </td>
                <td class="px-6 py-4">
                  pending
                </td>
                <td class="px-6 py-4">
                <Link to ='/organization/assigndeliveryboyorg/orders'> <button className='bg-orange-500 text-black py-2 px-2 rounded-lg'>Assign delivery boy</button></Link>
                </td>
            </tr>
           
        </tbody>
    </table>
</div>



          
        
        </div>

    </div>
  )
}

export default Vwordersorg
