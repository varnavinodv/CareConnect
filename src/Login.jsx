import React from 'react'


const Login = () => {
  return (
    <div>
      <div className='loginbg pt-14'>
        <div className='box w-[60%] h-[85%] m-auto flex flex-wrap justify-center gap-44 shadow-2xl shadow-black/45'>
          <div className='mt-11  '>
            <h1 className='text-4xl text-amber-950 mb-3'>WELCOME!</h1>
            <p className='text-lg' text-amber-950>The art of living is the art of giving.</p>
          </div>
          <div className='mt-5 bg-[#FFD740]/35  w-[350px] h-[450px] shadow-xl shadow-black/30'>
            <div className='text-center my-7  text-2xl font-semibold'>Login here</div>
            <div className='ms-9 text-lg mb-2'>Email</div>
            <div className='ms-9 mb-7'><input className='bg-yellow-100 py-2 px-3 pe-20' type="text" name="" id="" placeholder='Enter your email'/></div>
            <div className='ms-9 text-lg mb-2'>Passwrord</div>
            <div className='ms-9 mb-7'><input className='bg-yellow-100 py-2 px-3 pe-20' type="password" name="" id="" placeholder='Enter your password'/></div>
            <div className='ms-9 text-sm mb-7'>Forgot password?</div>
            <button className='bg-orange-500 px-7 py-3 text-lg mx-28 font-semibold'>LOGIN</button>
          </div>
                    
        
        </div>

      </div>
    </div>
  )
}

export default Login
