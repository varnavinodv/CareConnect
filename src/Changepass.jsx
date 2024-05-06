import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {toast,ToastContainer} from 'react-toastify'


const Changepass = () => {
    const [data,setData]=useState('')
    let navigate=useNavigate()
    let {email}=useParams()
 

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  let handleSubmit= ()=>{
    if(data.cpassword!=data.password){
        toast.error('password doesnt match')
  
      }
      else{
        toast.success('Password updated')
        let response= axios.put(`http://localhost:4000/admin/changepass/${email}`,data)
        console.log(response);
        setData('')
        navigate('/login')



      }
  }

  return (
    <div className=''>
              <ToastContainer/>
              {/* <p>{`${email}`}</p> */}

      <div className='loginbg sm:h-[40rem] pt-14'>
        <div className='box w-[60%] h-[85%] m-auto flex flex-wrap justify-center  gap-44 shadow-2xl shadow-black/45'>
          <div className='mt-16  '>
            <h1 className='text-4xl text-amber-950 mb-3'>WELCOME!</h1>
            {/* <p className='text-lg' text-amber-950>The art of living is the art of giving.</p> */}
          </div>
          <div className=' bg-[#FFD740]/35  w-[350px] h-[450px] shadow-xl self-center shadow-black/30 mb-3'>
          <form onSubmit={handleSubmit}>
            <div className='text-center my-7  text-2xl font-semibold'>Forgot password?</div>
            <div> <label for="email" className='ms-9 text-lg mb-2'>Email</label>
            <div   className='bg-yellow-100 py-2 px-3 pe-0 w-[270px] ms-9 mb-7' >{`${email}`}</div>
            </div>
            <div><label for="pwd" className='ms-9 text-lg mb-2'>Password</label></div>
            <div className='ms-9 mb-7'><input onChange={handleChange} className='bg-yellow-100 py-2 px-3 pe-20' type="password" name="password" placeholder='Enter your password'/></div>
            <div><label for="pwd" className='ms-9 text-lg mb-2'>Confirm password</label></div>
            <div className='ms-9 mb-7'><input onChange={handleChange} className='bg-yellow-100 py-2 px-3 pe-20' type="password" name="cpassword" placeholder='Enter your password'/></div>
            
            <button className='bg-orange-500 px-5 py-1 text-lg mx-28 font-semibold rounded-lg'>CHANGE</button>
            </form>
          </div>
                    
        
        </div>

      </div>
    </div>
  )
}

export default Changepass
