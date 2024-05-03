import React,{useEffect, useState} from 'react'
import call from '../User/callbrwn.png'
import email from '../User/emailbrwn.png'
import locatn from '../User/locatnbrwn.png'
import date from '../User/date.png'
import time from '../User/time.png'
import { Link, useParams } from 'react-router-dom'
import arrow from '../User/arrow.png'
import axios from 'axios'

const Vworphdtlorg = () => {
  const [data,setData]=useState('')
  let {id}=useParams()
  console.log(id);
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/organization/vieworphdetail/${id}`)
      console.log(response);
      setData(response.data)
    }
    fetchdata()

    
  },[])
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)


  }
  return (
    <div className=' w-[100%] '>
        <div className='basicbg pt-7 ps-10 pe-10 flex flex-wrap justify-evenly'>
          <div >
            <div className='font-bold text-4xl text-amber-950 py-8'>{data.response?.name}</div>
            <div className='flex flex-wrap  w-full gap-8'>
            <div className='text-xl font-semibold'>
                <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                  <img  className='w-[30px] h-[30px]' src={call} alt="" />
                  <p>{data.response?.phno}</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3 pb-3 '>
                  <img className='w-[30px] h-[30px]' src={email} alt="" />
                  <p>{data.response?.email}</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3  pb-3 '>
                  <img  className='w-[30px] h-[30px]'  src={locatn} alt="" />
                  <p>{data.response?.place}<br />P.O {data.response?.postoffice} <br />
                             pin:{data.response?.pin} <br />
                            {data.response?.district}</p>
                </div>
                <div className='flex flex-wrap justify-start gap-3  pb-3 '>
                  <p>Children count: {data.response?.childrenCount}</p>
                  <p>Staff count: {data.response?.staffCount}</p>
                </div>
            </div>
            {/* {data?.contrireq?.map((item)=>( */}

              {/* <div className=' h-fit p-2 ms-16 bg-white'> */}
              {/* <h1 className='text-black font-bold'>{item?.purpose}-Rs.{item?.amount} needed</h1> */}
              {/* <h2 className='text-gray-800'>{item?.description}</h2> */}
              {/* <h3 className='text-gray-700 font-semibold'>{item?.amount-item?.Bamount} rupees raised</h3> */}
             
            {/* </div> */}
              {/* ))} */}
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
                      {data.report?.map((item) => ( 
                     <p> <a className='hover:text-blue-600 hover:underline'  href={`http://localhost:4000/uploads/${item?.report}`} download >{item?.year}</a></p>
                      ))}
                        {/* <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2021</li> */}
                        {/* <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2022</li> */}
                        {/* <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>2+023</li> */}
                        
                        </div> 
                   </div>
                   }
            </div>
            <div className=' pt-6'>
              <h1 className='text-amber-950 text-balance font-bold text-xl'>EVENTS</h1>
            </div>
            <div className='flex  m-auto flex-wrap py-4 gap-8'>
            {data?.events?.map((item)=>(
                <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%] text-center pt-5'>
                    <div>
                        <h1 className='font-bold text-amber-950 py-4 text-xl'>{item?.name}</h1>
                    </div>
                    <div className='flex flex-wrap justify-start ps-3 gap-2 py-1 '>
                        <img  className='w-[30px] h-[30px] ' src={locatn} alt="" />
                        <p>{item?.venue}</p>
                      </div>
                      <div className='flex flex-wrap justify-start ps-3 gap-2 py-1'>
                        <img className='w-[30px] h-[30px]  ' src={date} alt="" />
                        <p>{ new Date(item?.date).toLocaleDateString('en-GB')}</p>
                      </div>
                      <div className='flex flex-wrap justify-start ps-3 gap-2 py-1'>
                        <img  className='w-[30px] h-[30px]'  src={time} alt="" />
                        <p>{item?.time}</p>
                      </div>
                      <Link to={`/organization/sponsorshiporg/${item?._id}`}><div className='hover:underline text-orange-500 font-bold'>SPONSOR</div></Link>
                    </div>
            ))}
               
                
                
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
