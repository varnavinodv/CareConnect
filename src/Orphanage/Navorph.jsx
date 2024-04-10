import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import profile from '../Admin/prof icon.png'
import menu from '../Admin/menubar.png'
import Sidenavorph from './Sidenavorph'
import { useState } from 'react'

const Navorph = () => {
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)
  }
  return (
    <div>
         <div className='w-[100%] m-auto flex-wrap  bg-orange-500  flex  justify-between  '>
              <div className='text-white custom_font_family ps-2 text-[40px] flex flex-wrap ' >
                <div className='w-[50px] h-[50px] mt-4'><img onClick={dropdown}  src={menu} alt="" />
              
                </div>
                <div className='mt-1 text-6xlxl'>Care Connect</div>  
              </div>
              <div className='text-white flex flex-wrap justify-evenly gap-12 pe-5 items-center '>
                 <div className='flex flex-wrap items-center'>
                    <div className='w-[50px] h-[50px] mt-4'><img src={profile} alt="" /></div>
                    <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Orphanage</div>
                 </div>
                 <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Home</div>
                 

              </div>
          
              

      </div>
    
     
      <div className='flex  w-[100%] '>
      {
  drop &&
      <Sidenavorph/>
}
<Outlet/>
      </div>
      <Footer/> 
    </div>
  )
}

export default Navorph