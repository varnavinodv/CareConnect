import React, { useEffect } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import profile from '../Admin/prof icon.png'
import menu from '../Admin/menubar.png'
import axios from 'axios'
// import Usersidenav from './Usersidenav'

const Navdeliveryb = () => {
  const navigate=useNavigate()
  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/')
}

useEffect(()=>{
  let auth=async ()=>{

    let id=localStorage.getItem('id')
    let email=localStorage.getItem('email')
    let response=await axios.post('http://localhost:4000/user/api/auth/authenticate',{_id:id,email:email})
    console.log(response);
    
    if(response==null){
      navigate('/')
    }
    else if(response?.data?.userType !=='deliveryboy'){
      navigate('/')
    }

  }
  auth()
},[])

  return (
    <div>
    <div className='w-[100%] m-auto flex-wrap  bg-orange-500  flex  justify-between  '>
           <div className='text-white custom_font_family ps-2 text-[40px] flex flex-wrap ' >
              
              <div className='mt-1 text-6xlxl'>Care Connect</div>  
            </div>
            <div className='text-white flex flex-wrap justify-evenly gap-12 pe-5 items-center '>
               <div className='flex flex-wrap items-center'>
                  <div className='w-[50px] h-[50px] mt-4'><img src={profile} alt="" /></div>
                  <Link to='/deliveryboy/editprofiledeliberyb'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Profile</div></Link>
               </div>
               <Link to='/deliveryboy'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Home</div></Link>
               <Link to='/deliveryboy/vieworderdeliveryb'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Orders</div></Link>
               <Link to='/deliveryboy/viewdonatndeliveryb'><div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Donations</div></Link>
               <div onClick={logout} className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Logout</div>
               

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
