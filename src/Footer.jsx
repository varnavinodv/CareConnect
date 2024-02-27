import React from 'react'
import f1 from './f1.png'
import f2 from './f2.png'
import f3 from './f3.png'

const Footer = () => {
  return (
    <div>
        <div className='w-[100%]  flex flex-wrap  bg-orange-500 justify-normal sm:gap-72  text-white' id='contact'>
            <div className='ps-9 my-5'>
                <div className='my-3 text-xl font-bold'><h1>GET IN TOUCH</h1></div>
                <div className='flex flex-wrap gap-1 mb-2 '>
                   <div><img src={f1} alt="" /></div> 
                   <div className='text-lg'> <p>Kerala</p></div> 
                </div>
                <div className='flex flex-wrap mb-2  gap-1 '>
                    <div><img src={f2} alt="" /></div>
                    <div className='text-lg'><p>+91 9876543210</p></div>
                </div>
                <div className='flex flex-wrap mb-2 gap-1'>
                    <div><img src={f3} alt="" /></div>
                    <div className='text-lg'><p>careconnect@gmail.com</p></div>
                </div>
            </div>
            <div className='my-5 ps-9'>
                <div className='my-3 text-xl font-bold'><h1>JOIN US</h1></div>
                <div className='text-lg'><p>Join us on this journey towards a brighter <br /> future, where every connection made on <br /> our platform contributes to positive change. </p></div>
            </div>

        </div>
    </div>
  )
}

export default Footer
