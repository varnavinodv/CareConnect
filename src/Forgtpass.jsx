// import axios from 'axios'
// import React, { useState } from 'react'

// const Forgtpass = () => {
//     const [data,setData]=useState('')
//     let handleChange=(event)=>{
//         setData({...data,[event.target.name]:event.target.value})
//       }

//     //   let handleSubmit=async (event)=>{
//     //     event.preventDefault()
//     //     setData(data)
//     //     console.log(data);
//     //     let response=await axios.post('http://localhost:4000/user/forgotpassword',data)
//     //     console.log(response);
//     //   }
    
//   return (
//     <div className=''>
//     <div className='loginbg sm:h-[40rem] pt-14'>
//       <div className='box w-[60%] h-[85%] m-auto flex flex-wrap justify-center  gap-44 shadow-2xl shadow-black/45'>
//         <div className='mt-16  '>
//           <h1 className='text-4xl text-amber-950 mb-3'>WELCOME!</h1>
//           {/* <p className='text-lg' text-amber-950>The art of living is the art of giving.</p> */}
//         </div>
//         <div className=' bg-[#FFD740]/35  w-[350px] h-[500px] shadow-xl self-center shadow-black/30 mb-3'>
//         <form onSubmit={handleSubmit}>
//           <div className='text-center my-7  text-2xl font-semibold'>Forgot password?</div>
//           <div> <label for="email" className='ms-9 text-lg mb-2'>Email</label>
//           <input onChange={handleChange}   className='bg-yellow-100 py-2 px-3 pe-20 ms-9 mb-7' type="text" name="email" placeholder='Enter your email'/></div>
//           <div> <label for="phno" className='ms-9 text-lg mb-2'>Phone no</label>
//           <input onChange={handleChange}   className='bg-yellow-100 py-2 px-3 pe-20 ms-9 mb-7' type="number" name="phno" placeholder='Enter your phone number'/></div>
//           <div><label for="pwd" className='ms-9 text-lg mb-2'>Password</label></div>
//           <div className='ms-9 mb-7'><input onChange={handleChange} className='bg-yellow-100 py-2 px-3 pe-20' type="password" name="password" placeholder='Enter your password'/></div>
//           <div><label for="cpwd" className='ms-9 text-lg mb-2'>Confirm password</label></div>
//           <div className='ms-9 mb-7'><input onChange={handleChange} className='bg-yellow-100 py-2 px-3 pe-20' type="password" name="cpassword" placeholder='Confirm your password'/></div>
          
//           <button className='bg-orange-500 px-5 py-1 text-lg mx-28 font-semibold rounded-lg'>LOGIN</button>
//           </form>
//         </div>
                  
      
//       </div>

//     </div>
//   </div>
//   )
// }

// export default Forgtpass
