import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Forgtpass = () => {
    const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const[verifyotp,setVerifyotp]=useState('')
  let navigate=useNavigate()


  const sendOTP = async () => {
    try {
      const response = await axios.post('http://localhost:4000/admin/sendOTP', { email });
      setMessage(response.data.message);
      console.log(response.data.otp,'--------------------');
      setVerifyotp(response.data.otp)
    } catch (error) {
      setMessage('Error sending OTP. Please try again.');
    }
  };

  const verifyOTP = async () => {
    try {
      console.log(verifyotp,otp);
      if(verifyotp==otp){
        // alert('success')
        navigate(`/changepass/${email}`)
      }
    } catch (error) {
      setMessage('Error verifying OTP. Please try again.');
    }
  };
    
  return (
    <div className=''>
    <div className='loginbg sm:h-[40rem] pt-14'>
      <div className='box w-[60%] h-[95%] m-auto flex flex-wrap justify-center  gap-44 shadow-2xl shadow-black/45'>
        <div className='mt-16  '>
          <h1 className='text-4xl text-amber-950 mb-3'>WELCOME!</h1>
          {/* <p className='text-lg' text-amber-950>The art of living is the art of giving.</p> */}
        </div>
        <div className=' bg-[#FFD740]/35  w-[350px] h-[370px] shadow-xl self-center shadow-black/30 mb-3'>
        <form >
          <div className='text-center my-7  text-2xl font-semibold'>Forgot password?</div>
          <div> <label for="email" className='ms-9 text-lg mb-2'>Email</label>
          <input  value={email} onChange={(e) => setEmail(e.target.value)}  className='bg-yellow-100 py-2 px-3 pe-20 ms-9 mb-4' type="text" name="email" placeholder='Enter your email'/></div>
          <button type='button' onClick={sendOTP} className='bg-orange-500 px-5 py-1 text-lg mx-28 font-semibold rounded-lg'>SEND OTP</button>
          <div> <label for="text" className='ms-9 text-lg mb-2'>Verification code</label>
          <input  value={otp} onChange={(e) => setOtp(e.target.value)}  className='bg-yellow-100 py-2 px-3 pe-20 ms-9 mb-4' type="number" name="phno" placeholder='Enter your phone number'/></div>
          {/* <div><label for="pwd" className='ms-9 text-lg mb-2'>Password</label></div>
          <div className='ms-9 mb-4'><input onChange={handleChange} className='bg-yellow-100 py-2 px-3 pe-20' type="password" name="password" placeholder='Enter your password'/></div>
          <div><label for="cpwd" className='ms-9 text-lg mb-2'>Confirm password</label></div>
          <div className='ms-9 mb-4'><input onChange={handleChange} className='bg-yellow-100 py-2 px-3 pe-20' type="password" name="cpassword" placeholder='Confirm your password'/></div> */}
          
          <button type='button' onClick={verifyOTP} className='bg-orange-500 px-5 py-1 text-lg mx-28 font-semibold rounded-lg'>SUBMIT</button>
          <p>{message}</p>
          </form>
        </div>
                  
      
      </div>

    </div>
  </div>
  )
}

export default Forgtpass
