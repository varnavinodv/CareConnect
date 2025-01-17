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
      // let response=await axios.get('http://localhost:4000/user/viewcontrireq',data)
      // console.log(response.data);
      
      let response=await axios.get(`http://localhost:4000/user/vieworphdetail/${id}`)
      console.log(response);
      setdata(response.data)
    }
    fetchdata()
  },[])
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)


  }

  const convertTo12HourFormat = (time) => {
    const timeParts = time.split(':');
    const hours = parseInt(timeParts[0]);
    const minutes = parseInt(timeParts[1]);
    const ampm = hours >= 12 ? 'pm' : 'am';
    const hours12 = hours % 12 || 12;
    return `${hours12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
};
  return (
    <div className='w-[100%]'>
         <div className='basicbg   pt-7 ps-10 pe-10 flex flex-wrap justify-evenly'>
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
                             pin:{data.response?.pin}<br />
                             {data.response?.district}</p>
                </div>
                <p>Children count: {data.response?.childrenCount}</p>
                <p>Staff count: {data.response?.staffCount}</p>
            </div>
            
            {data?.contrireq?.map((item)=>(
            <div className=' h-fit p-2 ms-11 bg-white'>
              <h1 className='text-black font-bold'>{item?.purpose}-Rs.{item?.amount} needed</h1>
              <h2 className='text-gray-800'>{item?.description}</h2>
              <h3 className='text-gray-700 font-semibold'>{item?.amount-item?.Bamount} rupees raised</h3>
              <Link to={`/user/contributionuser/${item?._id}`}><button className='bg-orange-500 py-1 px-1 rounded-lg text-white '>CONTRIBUTE</button></Link>

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
                      {data?.reports?.map((item1)=>(
                      <p>  <a className='hover:text-blue-600 hover:underline' target='_blank'  href={`http://localhost:4000/uploads/${item1?.report}`} download >{item1?.year}</a></p>
                      ))}
                        
                        </div> 
                   </div>
                   }
            </div>
            <div className=' pt-6'>
              <h1 className='text-amber-950 text-balance font-bold text-xl'>EVENTS</h1>
            </div>
            <div className='flex flex-wrap py-4 gap-8'>
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
                        <p> {item?.date && new Date(item?.date).toLocaleDateString('en-GB')} </p>
                      </div>
                      <div className='flex flex-wrap justify-start ps-3 gap-2 py-1'>
                        <img  className='w-[30px] h-[30px]'  src={time} alt="" />
                        <p>{item?.time && convertTo12HourFormat(item?.time)}</p>
                      </div>
                     


                    </div>
                    ))}
                {/* <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%]'></div> */}
                {/* <div className='bg-[#FFEFBD] w-[13rem] h-[15rem] rounded-[30%]'></div> */}
                
            </div>
          </div>
          



        </div>
      
    </div>
  )
}

export default Viewoprhdtluser
