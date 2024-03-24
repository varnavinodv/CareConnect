import React,{useState,useEffect} from 'react'
import call from './callbrwn.png'
import email from './emailbrwn.png'
import locatn from './locatnbrwn.png'
import date from './date.png'
import time from './time.png'
import arrow from './arrow.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Viewoprhdtluser = () => {
  const [data,setdata]=useState([''])
  const [data2,setdata2]=useState('')
  let {id} =useParams()
  console.log(id);
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get('http://localhost:4000/user/viewcontrireq',data)
      console.log(response.data);
      setdata(response.data)
      let response1=await axios.get(`http://localhost:4000/user/vieworgdetail/${id}`)
      console.log(response);
      setdata2(response1.data)
    }
    fetchdata()
  },[])
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)


  }
  return (
    <div className='w-[100%]'>
         <div className='basicbg2   pt-7 ps-10 pe-10 flex flex-wrap justify-evenly'>
          <div >
            <div className='font-bold text-4xl text-amber-950 py-8'>{data2.name}</div>
            <div className='flex flex-wrap justify-end w-full gap-8'>
            <div className='text-xl font-semibold'>
                <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                  <img  className='w-[30px] h-[30px]' src={call} alt="" />
                  <p>{data2.phno}</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                  <img className='w-[30px] h-[30px]' src={email} alt="" />
                  <p>{data2.email}</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3  pb-3 '>
                  <img  className='w-[30px] h-[30px]'  src={locatn} alt="" />
                  <p>{data2.place}<br />P.O {data2.postoffice} <br />
                             pin:{data2.pin}<br />
                             {data2.district}</p>
                </div>
            </div>
            {data.map((item,index)=>(
            <div className=' h-fit p-2 ms-11 bg-white'>
              <h1 className='text-black font-bold'>{item.purpose}</h1>
              <h2 className='text-gray-800'>{item.description}</h2>
              <h3 className='text-gray-700 font-semibold'>{item.amount}</h3>
              <Link to={`/user/contributionuser/${item._id}`}><button className='bg-orange-500 py-1 px-1 rounded-lg text-white '>CONTRIBUTE</button></Link>

            </div>
            ))}  
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
