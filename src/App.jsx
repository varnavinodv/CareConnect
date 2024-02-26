import React,{useState} from 'react'
import { Outlet,Link } from 'react-router-dom';
import Footer from './Footer';

const App = () => {
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)


  }
  return (
    <div>
      <div className='w-[100%] m-auto flex-wrap  bg-orange-500  flex  justify-between '>
              <div className='text-white custom_font_family ps-5 text-[40px]' >
                Care Connect
              </div>
              <div className='text-white flex flex-wrap justify-evenly gap-12 pe-5 items-center '>
                 <Link to ='/'><div>Home</div></Link>
                 <Link to='/abt'><div>About</div></Link>
                 <div>Contact</div>
                 <div><span  onClick={dropdown}>
                  Register
                  </span>
                  {drop &&
                      <div className='list-none absolute right-[30px] sm:right-[18px] p-4 bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>User</li>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>Orphanage</li>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>Organization</li>
                        <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>Delivery boy</li>
                        </div> 
                   }
            
                   </div>

              </div>
              

      </div>
     
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
