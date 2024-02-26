import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'

const Assigndeliveryboy = () => {
    const {id}=useParams()
    console.log(id);
    const [det,setDet]= useState(false)
    let date=()=>{
        setDet(!det)
    }
  return (
    <div className='w-[100%]'>
                      <div className='basicbg   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'> ASSIGN DELIVERYBOYS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    PHONE NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 ">
                    1.
                </td>
                <td class="px-6 py-4">
                    Abi
                </td>
                <td class="px-6 py-4">
                    9876571524
                </td>
                <td class="px-6 py-4">
                wyuoo,Ho,P.O Kommeri,calicut-7
                </td>
                
                <td class="px-6 py-4">
                    <button className='bg-orange-500  text-black p-2 rounded-lg' onClick={date}>ASSIGN</button>
                    {det &&
                        
                        <div className=' right-[30px] text-center sm:right-[18px] p-4 w-fit bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                            <div className='flex flex-wrap justify-center gap-2 '>
                               <label htmlFor="date" className='text-amber-950'>Date</label>
                               <input type="date"className='border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1  dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600' ></input>
                            
                            </div>
                            {
                                id=='orders' ?

                                <Link to='/organization/vieworderorg'> <button className='bg-orange-500 p-1 rounded-lg '>SUBMIT</button></Link>
                                :
                                id=='donation' &&
                                <Link to='/organization/viewdonationorg'> <button className='bg-orange-500 p-1 rounded-lg '>SUBMIT</button></Link>

                            }
                            
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

export default Assigndeliveryboy
