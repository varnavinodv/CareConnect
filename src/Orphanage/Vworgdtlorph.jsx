import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import call from '../User/callbrwn.png'
import email from '../User/emailbrwn.png'
import locatn from '../User/locatnbrwn.png'
import arrow from '../User/arrow.png'
import add from '../User/addbtn.png'
import review from '../Admin/review.png'
import running from '../User/running.png'

const Vworgdtlorph = () => {
  const [drop, setDrop] = useState(false)
  let dropdown = () => {
    setDrop(!drop)


  }
  return (
    <div className='w-[100%]'>
      <div className='basicbg2   sm:ps-40 flex flex-wrap justify-between'>
        <div >
          <div className='font-bold text-4xl text-amber-950 py-8'>ABCD ORGANIZATION</div>
          <div>
            <div className='flex flex-wrap justify-center gap-3 pb-3'>
              <img className='w-[30px] h-[30px]' src={call} alt="" />
              <p>+91 81130493822</p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 pb-3'>
              <img className='w-[30px] h-[30px]' src={email} alt="" />
              <p>abcd@gmail.com</p>
            </div>
            <div className='flex flex-wrap justify-center gap-3 pe-8 pb-3'>
              <img className='w-[30px] h-[30px]' src={locatn} alt="" />
              <p>ghsjhj hsisjk,<br />P.O huyaf, <br />
                pin-526713 <br />
                Kochi</p>
            </div>
          </div>
          <div className='flex flex-wrap justify-between w-100%'>
            <button className='bg-orange-500 py-2 px-3 rounded-lg' onClick={dropdown}>
              <div className='flex flex-wrap items-center'>
              <p className='text-white text-lg'>View reports</p>
              <img className='w-[30px] h-[30px]' src={arrow} alt="" />
            </div>
            </button>
            <div>
            <Link to='/orphanage/addrevieworph'><button className='bg-orange-500 py-2 px-3 rounded-lg'><div className='flex flex-wrap items-center'>
              <img className='w-[40px] h-[30px]' src={add} alt="" />
              <p className='text-white text-lg'>Add review</p>
            </div>
            </button></Link></div>
            {drop &&
              <div className='w-[60%] flex justify-end'>


                <div className='list-none w-fit sm:left-[19rem] p-2 bg-white text-black text-lg  font-semibold rounded-lg  '>
                  <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2021</li>
                  <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2022</li>
                  <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2023</li>

                </div>
              </div>
            }
           
          </div>
          <div>
            <div className='bg-white  p-3 rounded-lg align-text-bottom mt-24'>
              <div className='flex flex-wrap'>
                <img className='h-[25px] w-[25px]' src={review} alt="" />
                <h3 className='text-slate-500 ps-1'>Review</h3>

              </div>
              <h1 className='font-semibold text-base text-gray-700'>ADS orph</h1>
              <p className='text-black text-sm'>provided all the necessary items on time</p>


            </div>
          </div>
        </div>
        <div className=' '>
          <img className='h-[]   items-end ' src={running} alt="" />
        </div>




      </div>

    </div>
  )
}


export default Vworgdtlorph
