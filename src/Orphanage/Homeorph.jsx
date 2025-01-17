import React from 'react'
import toy from '../Admin/toy.png'
import kidsbrwn from '../Admin/kidsbrwn.png'
import logout1 from '../Admin/logout.png'

import { Link,useNavigate } from 'react-router-dom'

const Homeorph = () => {

  const navigate=useNavigate()

  let logout=()=>{
      localStorage.removeItem('id')
      localStorage.removeItem('email')
      navigate('/')
  }
  return (
    <div className=' w-[100%] '>
    <div className='basicbg pt-7'>
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
               <button  onClick={logout} className='bg-orange-500 flex flex-wrap py-1 px-3 rounded-lg my-3'>
                    <div className='text-white'>LOGOUT </div>
                    {/* <div><img src={logout1} alt="" /></div> */}
                </button>
        </div>
        <div className='ps-12'>
          <div className=''> <img className=' h-[25rem]' src={kidsbrwn} alt="" /></div>
        </div>
      </div>
      
    </div>

  </div>
  )
}

export default Homeorph
