import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import profile from '../Admin/prof icon.png'
import menu from '../Admin/menubar.png'
import Usersidenav from './Usersidenav'

const Navuser = () => {
  return (
    <div>
      <div className='w-[100%] m-auto flex-wrap  bg-orange-500  flex  justify-between  '>
             <div className='text-white custom_font_family ps-2 text-[40px] flex flex-wrap ' >
                <div className='w-[50px] h-[50px] mt-4'><img src={menu} alt="" /></div>
                <div className='mt-1 text-6xlxl'>Care Connect</div>  
              </div>
              <div className='text-white flex flex-wrap justify-evenly gap-12 pe-5 items-center '>
                 <div className='flex flex-wrap items-center'>
                    <div className='w-[50px] h-[50px] mt-4'><img src={profile} alt="" /></div>
                    <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>User</div>
                 </div>
                 <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Home</div>
                 

              </div>

      </div>
      <Usersidenav/>
      <Outlet/>
      <Footer/> 
    </div>
  )
}

export default Navuser
