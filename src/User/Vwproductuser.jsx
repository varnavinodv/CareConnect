import React from 'react'
import { Link } from 'react-router-dom'
import sbook from '../Admin/sbook.jpg'
import add from './addbtn.png'
import edit from './edit.png'
import dlt from './delete.png'

const Vwproductuser = () => {
  return (
    <div className='w-[100%] '>
                                <div className='basicbg  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>PRODUCTS</div>
             {/* button */}
             <Link to='/user/addproduct'><button className='bg-orange-500 flex flex-wrap py-1 pe-2 rounded-lg m-auto hover:px-2 hover:py-2   items-center mb-8'>
                    <div><img  className='w-[55px] h-[30px] '  src={add} alt="" /></div>
                    <div className='text-white '>ADD PRODUCT </div>
                </button></Link>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    PRODUCT NAME
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
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#f8d2a0] border-b border-orange-600 font-semibold hover:bg-[#f7b866d4] ">
                <td class="px-6 py-4">
                    1.
                </td>
                <td class="px-6 py-4">
                   Storybook
                </td>
                <td class="px-6 py-4">
                    Book
                </td>
                <td class="px-6 py-4">
                    3
                </td>
                <td class="px-6 py-4">
                    <img  className='h-14 w-14' src={sbook} alt="" />
                </td>
                <td class="px-6 py-6 flex flex-wrap justify-around ">
                   <Link to='/user/updateproduct'> <img className='w-[45px] h-[30px] hover:bg-blue-400' src={edit} alt="" /></Link>
                    <img  className='w-[40px] h-[30px] hover:bg-red-600' src={dlt} alt="" />
                </td>
            </tr>
            
        </tbody>
    </table>
</div>



          
        
        </div>
    </div>
  )
}

export default Vwproductuser
