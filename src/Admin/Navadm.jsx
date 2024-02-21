import React,{useState} from 'react'
import menu from './menubar.png'
import profile from './prof icon.png'
import { Outlet } from 'react-router-dom'
import Sidenav from './Sidenav'
import Footer from '../Footer'
const Navadm = () => {
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)


  }
  return (
    <>
    <div>
        <div className='w-[100%] m-auto flex-wrap  bg-orange-500  flex  justify-between  '>
              <div className='text-white custom_font_family ps-2 text-[40px] flex flex-wrap ' >
                <div className='w-[50px] h-[50px] mt-4'><img onClick={dropdown} src={menu} alt="" />
              
                </div>
                <div className='mt-1 text-6xlxl'>Care Connect</div>  
              </div>
              <div className='text-white flex flex-wrap justify-evenly gap-12 pe-5 items-center '>
                 <div className='flex flex-wrap items-center'>
                    <div className='w-[50px] h-[50px] mt-4'><img src={profile} alt="" /></div>
                    <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Admin</div>
                 </div>
                 <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Home</div>
                 

              </div>
          
              

      </div>
{/* {
  drop &&
      <Sidenav/>
} */}
              <Outlet/>
<Footer/>       
    </div>
    </>
  )
}

export default Navadm
