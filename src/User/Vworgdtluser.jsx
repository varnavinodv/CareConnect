import React, {useState} from 'react'
import call from './callbrwn.png'
import email from './emailbrwn.png'
import locatn from './locatnbrwn.png'
import arrow from './arrow.png'
import girls from './girls.png'

const Vworgdtluser = () => {
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)


  }
  return (
    <div>
        <div className='basicbg w-[100%]  ps-40 flex flex-wrap justify-between'>
          <div >
            <div className='font-bold text-4xl text-amber-950 py-8'>ABCD ORGANIZATION</div>
            <div>
                <div className='flex flex-wrap justify-center gap-3 pb-3'>
                  <img  className='w-[30px] h-[30px]' src={call} alt="" />
                  <p>+91 81130493822</p>
                </div>
                <div className='flex flex-wrap justify-center gap-3 pb-3'>
                  <img className='w-[30px] h-[30px]' src={email} alt="" />
                  <p>abcd@gmail.com</p>
                </div>
                <div className='flex flex-wrap justify-center gap-3 pe-8 pb-3'>
                  <img  className='w-[30px] h-[30px]'  src={locatn} alt="" />
                  <p>ghsjhj hsisjk,<br />P.O huyaf, <br />
                             pin-526713 <br />
                             Kochi</p>
                </div>
            </div>
            <div>
              <button className='bg-orange-500 py-2 px-3 rounded-lg' onClick={dropdown}><div className='flex flex-wrap items-center'>
                <p className='text-white text-lg'>View reports</p>
                <img className='w-[30px] h-[30px]'  src={arrow} alt="" />
                </div>
                </button>
                {drop &&
                      <div className='list-none absolute sm:left-[19rem] p-2 bg-white text-black text-lg  font-semibold rounded-lg  '>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2021</li>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2022</li>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2023</li>
                        
                        </div> 
                   }
            </div>
            <div>
              {/* reviews */}
            </div>
          </div>
          <div className=''>
            {/* <img className='h-[35rem] w-[35rem] items-end '   src={girls} alt="" /> */}
          </div>



        </div>
      
    </div>
  )
}

export default Vworgdtluser
