import React,{useEffect, useState} from 'react'
import menu from './menubar.png'
import profile from './prof icon.png'
import { Outlet,Link,useNavigate } from 'react-router-dom'
import Sidenav from './Sidenav'
import Footer from '../Footer'
import axios from 'axios'
import logout1 from './logout.png'
const Navadm = () => {
  const navigate=useNavigate()
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)
   


  }

  useEffect(()=>{
    let auth=async ()=>{

      let id=localStorage.getItem('id')
      let email=localStorage.getItem('email')
      let response=await axios.post('http://localhost:4000/user/api/auth/authenticate',{_id:id,email:email})
      console.log(response);
      if(response==null){
        navigate('/login')
      }
      else if(response?.data?.userType !=='admin'){
        navigate('/login')
      }

    }
    auth()
  },[])


  
  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/')
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
                    <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Admin</div>
                 </div>
                 <Link to ='/admin'><div className='font-semibold text-lg hover:bg-orange-300 hover:p-2 hover:text-black'>Home</div></Link>
                 {/* <div className='ps-8 pt-20'> */}
           <button onClick={logout} className='bg-orange-500 flex flex-wrap py-1 px-3 rounded-lg'>
                    <div className='font-semibold text-lg hover:bg-orange-300 hover:text-black'>Logout </div>
                    {/* <div><img src={logout1} alt="" /></div> */}
                </button>
                
            {/* </div> */}
                 

              </div>
          
              

      </div>
      <div className='flex  w-[100%] '>
      {
  drop &&
      <Sidenav/>
}
<Outlet/>
      </div>
      <Footer/> 
    </div>
  )
}

export default Navadm
