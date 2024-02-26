import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../Footer'
import profile from '../Admin/prof icon.png'
import menu from '../Admin/menubar.png'
// import Usersidenav from './Usersidenav'

const Navdeliveryb = () => {
  return (
    <div>
    <div className='w-[100%] m-auto flex-wrap  bg-orange-500  flex  justify-between  '>
           <div className='text-white custom_font_family ps-2 text-[40px] flex flex-wrap ' >
              
              <div className='mt-1 text-6xlxl'>Care Connect</div>  
            </div>
            <div className='text-white flex flex-wrap justify-evenly gap-12 pe-5 items-center '>
               <div className='flex flex-wrap items-center'>
                  <div className='w-[50px] h-[50px] mt-4'><img src={profile} alt="" /></div>
                  <Link to='/deliveryboy/editprofiledeliberyb'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Deliveryb</div></Link>
               </div>
               <Link to='/deliveryboy'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Home</div></Link>
               <Link to='/deliveryboy/vieworderdeliveryb'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Orders</div></Link>
               <Link to='/deliveryboy/viewdonatndeliveryb'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Donations</div></Link>
               <Link to='/'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Logout</div></Link>
               

            </div>

    </div>
    <div>

    
    <Outlet/>
    </div>
    <Footer/> 
  </div>
  )
}

export default Navdeliveryb
