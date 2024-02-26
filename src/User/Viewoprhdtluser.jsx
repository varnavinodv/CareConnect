import React from 'react'
import call from './callbrwn.png'
import email from './emailbrwn.png'
import locatn from './locatnbrwn.png'
import date from './date.png'
import time from './time.png'
import { Link } from 'react-router-dom'

const Viewoprhdtluser = () => {
  return (
    <div className='w-[100%]'>
         <div className='basicbg2   pt-7 ps-10 pe-10 flex flex-wrap justify-evenly'>
          <div >
            <div className='font-bold text-4xl text-amber-950 py-8'>ABCD ORPHANAGE</div>
            <div className='text-xl font-semibold'>
                <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                  <img  className='w-[30px] h-[30px]' src={call} alt="" />
                  <p>+91 81130493822</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                  <img className='w-[30px] h-[30px]' src={email} alt="" />
                  <p>abcd@gmail.com</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3  pb-3 '>
                  <img  className='w-[30px] h-[30px]'  src={locatn} alt="" />
                  <p>ghsjhj hsisjk,<br />P.O huyaf, <br />
                             pin-526713 <br />
                             Kochi</p>
                </div>
            </div>
            <div className=' items-center ps-20 pt-5'>
              <Link to='/user/contributionuser'><button className='bg-orange-500 py-2 px-3 rounded-lg text-white '>CONTRIBUTE</button></Link>
            </div>
            <div className=' pt-6'>
              <h1 className='text-amber-950 text-balance font-bold text-xl'>EVENTS</h1>
            </div>
            <div className='flex flex-wrap py-4 gap-8'>
                <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%] text-center pt-5'>
                    <div>
                        <h1 className='font-bold text-amber-950 py-4 text-xl'>CHILDREN'S DAY</h1>
                    </div>
                    <div className='flex flex-wrap justify-start ps-3 gap-2 py-1 '>
                        <img  className='w-[30px] h-[30px] ' src={locatn} alt="" />
                        <p>+91 81130493822</p>
                      </div>
                      <div className='flex flex-wrap justify-start ps-3 gap-2 py-1'>
                        <img className='w-[30px] h-[30px]  ' src={date} alt="" />
                        <p>14/11/2024</p>
                      </div>
                      <div className='flex flex-wrap justify-start ps-3 gap-2 py-1'>
                        <img  className='w-[30px] h-[30px]'  src={time} alt="" />
                        <p>4:00pm</p>
                      </div>
                    </div>
                <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%]'></div>
                <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%]'></div>
                
            </div>
          </div>
          



        </div>
      
    </div>
  )
}

export default Viewoprhdtluser
