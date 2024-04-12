import React,{useEffect, useState} from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'
import Footer from '../Footer'
import profile from '../Admin/prof icon.png'
import menu from '../Admin/menubar.png'
import Sidenavorg from './Sidenavorg'
import axios from 'axios'

const Navorg = () => {
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)



  }

  const navigate=useNavigate()
  useEffect(()=>{
    let auth=async ()=>{

      let id=localStorage.getItem('id')
      let email=localStorage.getItem('email')
      let response=await axios.post('http://localhost:4000/user/api/auth/authenticate',{_id:id,email:email})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='organization'){
        navigate('/login')
      }

    }
    auth()
  },[])
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
                    <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Organization</div>
                 </div>
                <Link to ='/organization'> <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Home</div></Link>
                 

              </div>
          
              

      </div>
     
      <div className='flex  w-[100%] '>
      {
  drop &&
      <Sidenavorg/>
}
<Outlet/>
      </div>
      <Footer/> 
    </div>
  )
}

export default Navorg
