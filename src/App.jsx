import React,{useState} from 'react'
import { Outlet,Link } from 'react-router-dom';
import Footer from './Footer';

const App = () => {
  const [drop,setDrop]= useState(false)
  let dropdown=()=>{
    setDrop(!drop)



  }
  let dropclose=()=>{
    setDrop(false)
  }
  return (
    <div>
      <div className='w-[100%] m-auto flex-wrap  bg-orange-500  flex  justify-between '>
              <div className='text-white custom_font_family ps-5 text-[40px]' >
                Care Connect
              </div>
              <div className='text-white flex flex-wrap justify-evenly gap-12 pe-5 items-center '>
                 <Link to ='/'><div><button>Home</button></div></Link>
                 <a href='#abt'>About</a>
                
                 <a href='#contact'>Contact</a>
                 <div>
                  <button  onClick={dropdown}>Register</button>
                 
                  {drop &&
                      <div className='list-none absolute right-[30px] sm:right-[18px] p-4 bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                        <Link to='/reguser'><li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>User</li></Link>
                        <Link to='/regorph'><li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>Orphanage</li></Link>
                        <Link to='/regorg'><li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>Organization</li></Link>
                       
                        </div> 
                   }
            
                   </div>

              </div>
              

      </div>
     <div onClick={dropclose}>
      <Outlet/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
