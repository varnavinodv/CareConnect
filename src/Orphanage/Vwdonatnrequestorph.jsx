import React from 'react'
import add from '../User/addbtn.png'
import edit from '../User/edit.png'
import dlt from '../User/delete.png'

const Vwdonatnrequestorph = () => {
  return (
    <div>
                             <div className='basicbg w-[100%]  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATION REQUESTS</div>
             {/* button */}
             <button className='bg-orange-500 flex flex-wrap py-1 pe-2 rounded-lg m-auto items-center mb-8'>
                    <div><img  className='w-[55px] h-[30px] '  src={add} alt="" /></div>
                    <div className='text-white'>POST REQUEST </div>
                </button>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                    <img className='w-[45px] h-[30px]' src={edit} alt="" />
                    <img  className='w-[40px] h-[30px]' src={dlt} alt="" />
                </td>
            </tr>
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                    <img className='w-[45px] h-[30px]' src={edit} alt="" />
                    <img  className='w-[40px] h-[30px]' src={dlt} alt="" />
                </td>
            </tr>
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                    <img className='w-[45px] h-[30px]' src={edit} alt="" />
                    <img  className='w-[40px] h-[30px]' src={dlt} alt="" />
                </td>
            </tr>
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                    <img className='w-[45px] h-[30px]' src={edit} alt="" />
                    <img  className='w-[40px] h-[30px]' src={dlt} alt="" />
                </td>
            </tr>
            <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4]">
                <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4 flex flex-wrap justify-normal">
                    <img className='w-[45px] h-[30px]' src={edit} alt="" />
                    <img  className='w-[40px] h-[30px]' src={dlt} alt="" />
                </td>
            </tr>
        </tbody>
    </table>
</div>



          
        
        </div>
      
    </div>
  )
}

export default Vwdonatnrequestorph
