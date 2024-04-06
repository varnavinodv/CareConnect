import React, {useEffect, useState} from 'react'
import call from './callbrwn.png'
import email from './emailbrwn.png'
import locatn from './locatnbrwn.png'
import arrow from './arrow.png'
import running from './running.png'
import review from '../Admin/review.png'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Vworgdtluser = () => {

  const [data,setData]=useState('')
  let {id} =useParams()
  console.log(id);
  useEffect(()=>{
    let fetchdata=async ()=>{
      let response=await axios.get(`http://localhost:4000/user/vieworgdetail/${id}`)
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
    <div className='w-[100%]'>
        <div className='basicbg2   sm:ps-40 flex flex-wrap justify-between'>
        {data.map((item)=>( 
          <div >
            <div className='font-bold text-4xl text-amber-950 py-8'>{item.org?.name}</div>
            <div>
                <div className='flex flex-wrap  gap-3 pb-3'>
                  <img  className='w-[30px] h-[30px]' src={call} alt="" />
                  <p>{item.org?.phno}</p>
                </div>
                <div className='flex flex-wrap  gap-3 pb-3'>
                  <img className='w-[30px] h-[30px]' src={email} alt="" />
                  <p>{item.org?.email}</p>
                </div>
                <div className='flex flex-wrap  gap-3 pe-8 pb-3'>
                  <img  className='w-[30px] h-[30px]'  src={locatn} alt="" />
                  <p>{item.org?.place}<br />P.O {item.org?.postoffice} <br />
                             pin:{item.org?.pin}<br />
                             {item.org?.district}</p>
                </div>
            </div>
            <div>
              <button className='bg-orange-500 py-2 px-3 rounded-lg' onClick={dropdown}><div className='flex flex-wrap items-center'>
                <p className='text-white text-lg pr-3'>View reports</p>
                <img className='w-[25px] h-[25px]'  src={arrow} alt="" />
                </div>
                </button>
                {drop &&
                <div className='w-[60%] flex justify-end'>


                      <div className='list-none w-fit sm:left-[19rem] p-2 bg-white text-black text-lg  font-semibold rounded-lg  '>
                      {item.reports?.map((item1)=>(
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>{item1.year}</li>
                      ))}
                        
                        </div> 
                   </div>
                   }
            </div>
            <div>
            {item.reviews?.map((item2)=>(
              <div className='bg-white  p-3 rounded-lg align-text-bottom mt-24'>
                      <div className='flex flex-wrap'>
                        <img className='h-[25px] w-[25px]'src={review} alt="" />
                        <h3 className='text-slate-500 ps-1'>Review</h3>
                         
                        </div>
                        <h1 className='font-semibold text-base text-gray-700'>{item.orph?.name}</h1>
                      <p className='text-black text-sm'>{item2.review}</p>


              </div>
            ))}
              
              
              
            </div>
          </div>
        ))}
          <div className=' '>
            <img className='h-[]   items-end '   src={running} alt="" />
          </div>



        </div>
      
    </div>
  )
}

export default Vworgdtluser
