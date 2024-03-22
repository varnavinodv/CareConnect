import React,{useState} from 'react'
import call from '../User/callbrwn.png'
import email from '../User/emailbrwn.png'
import locatn from '../User/locatnbrwn.png'
import date from '../User/date.png'
import time from '../User/time.png'
import { Link } from 'react-router-dom'
import arrow from '../User/arrow.png'

const Vworphdtlorg = () => {
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)


  }
  return (
    <div className=' w-[100%] '>
        <div className='basicbg2 pt-7 ps-10 pe-10 flex flex-wrap justify-evenly'>
          <div >
            <div className='font-bold text-4xl text-amber-950 py-8'>ABCD ORPHANAGE</div>
            <div className='flex flex-wrap justify-end w-full gap-8'>
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
            <div className=' h-fit p-2 ms-16 bg-white'>
              <h1 className='text-black font-bold'>Education-Rs.10,000 needed</h1>
              <h2 className='text-gray-800'>For the education purpose of 6 children 10000 rupees is required</h2>
              <h3 className='text-gray-700 font-semibold'>8000 rupees raised</h3>
              {/* <Link to='/user/contributionuser'><button className='bg-orange-500 py-1 px-1 rounded-lg text-white '>CONTRIBUTE</button></Link> */}

            </div>
            </div>
            <div>
              <button className='bg-orange-500 py-2 px-3 rounded-lg' onClick={dropdown}><div className='flex flex-wrap items-center'>
                <p className='text-white text-lg pr-3'>View reports</p>
                <img className='w-[25px] h-[25px]'  src={arrow} alt="" />
                </div>
                </button>
                {drop &&
                <div className='w-[60%] flex ps-36 justify-start'>


                      <div className='list-none w-fit sm:left-[19rem] p-2 bg-white text-black text-lg  font-semibold rounded-lg  '>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2021</li>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2022</li>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2023</li>
                        
                        </div> 
                   </div>
                   }
            </div>
            <div className=' pt-6'>
              <h1 className='text-amber-950 text-balance font-bold text-xl'>EVENTS</h1>
            </div>
            <div className='flex  m-auto flex-wrap py-4 gap-8'>
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
                      <Link to='/organization/sponsorshiporg'><div className='hover:underline text-orange-500 font-bold'>SPONSOR</div></Link>
                    </div>
                <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%]'></div>
                <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%]'></div>
                
                
            </div>
          </div>
          <div className=''>
            {/* <img className='h-[35rem] w-[35rem] items-end '   src={girls} alt="" /> */}
          </div>



        </div>
      

    </div>
  )
}

export default Vworphdtlorg
