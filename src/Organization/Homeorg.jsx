import React, { useEffect } from 'react'
import toy from '../Admin/toy.png'
import kidsbrwn from '../Admin/kidsbrwn.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Homeorg = () => {

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
        navigate('/login')
      }
      else if(response?.data?.userType !=='organization'){
        navigate('/login')
      }

    }
    auth()
  },[])

  return (
    <div className='w-[100%] '>
    <div className='basicbg  pt-7'>
      <div className='flex flex-wrap justify-center inspiration font-semibold '>
        <div className='text-5xl text-[#A02525]  '>Welcome to Care Connect</div>
        <div className='w-[50px] h-[50px] '><img src={toy} alt="" /></div>
      </div>
      <div className='flex flex-wrap  justify-center pt-24 gap-20'>
        <div>
           <p className='text-5xl font-bold headland pb-5'><span className='text-amber-950'>Unite for good <br />
              Take action, <br /></span>
               <span className='text-red-700'>DONATE TODAY </span></p>
               <p className='pt-5 headland font-bold text-sm'>We help the helpless to survive these hard time.In a world where <br /> single act of kindness can spark a chain reaction of positivity,your <br /> donation holds immense power.</p>
               {/* <div className='ps-8 mx-96'> */}
               <button onClick={logout} className='bg-orange-500 flex flex-wrap py-1 px-3 rounded-lg my-3'>
                    <div className='text-white'>LOGOUT </div>
                    <div><img src={logout} alt="" /></div>
                </button>
                
            {/* </div> */}
        </div>
        <div className='ps-12'>
          <div className=''> <img className=' h-[25rem]' src={kidsbrwn} alt="" /></div>
        </div>
      </div>
      
   
    </div>

  </div>
  )
}

export default Homeorg
