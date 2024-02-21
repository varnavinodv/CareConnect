import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import icon1 from './ic1.jpg'
import icon2 from './ic2.jpg'
import icon3 from './ic3.jpg'
import icon4 from './ic4.jpg'
import line from './Line.jpg'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pc1 from './pc1.png'
import pc2 from './pc2.png'
import pc3 from './pc3.png'
import i1 from './1.png'
import i2 from './2.png'
import i3 from './3.png'
import i4 from './4.png'

const Landing = () => {
  return (
    <div>
      <div className='cover text-center' >
          <div className=' pt-20 text-6xl murecho leading-[1.3] '>
              UNITING HEARTS, <br />
              CHANGING LIVES <br />
              TOGETHER
            </div>
            <div className='pt-4 font-semibold'>
              WELCOME TO CARE CONNECT
            </div>
            <Link to ='/login'><div className='py-6'>
              <button className='bg-orange-500 px-7 py-3 text-lg'>LOGIN</button>
            </div></Link> 
            <div className='py-5 text-lg font-bold'>
             Follow us on
            </div>  
            <div className='flex flex-wrap justify-center gap-4  pb-6'>
                <div><img src={i1} alt="" /></div>
                <div><img src={i2} alt="" /></div>
                <div><img src={i3} alt="" /></div>
                <div><img src={i4} alt="" /></div>
            </div>                  
          
                
       </div>

           <div className=' flex flex-wrap bg-orange-100 justify-evenly  gap-1 pt-5 '>
             <div>
                <img src={icon1} alt="" />
                <p className='py-4 text-center'><b>CARE & SUPPORT</b></p>
             </div>
             <div>
                 <img src={line} alt="" />
             </div>
             <div>
               <img src={icon2} alt="" />
               <p className='py-4 text-center'><b>CONNECTION</b></p>
             </div>
             <div>
                 <img src={line} alt="" />
             </div>
             <div>
                 <img src={icon3} alt="" />
                 <p className='py-4 text-center'><b>DONATION</b></p>
             </div>
             <div>
                 <img src={line} alt="" />
             </div>
             <div>
                 <img src={icon4} alt="" />
                 <p className='py-4 text-center'><b>KINDNESS</b></p>
             </div>
            </div> 

        
        <div className='mb-11' >
            <div className='mx-10 my-10  text-center alegreya-sans-regular '>
                <h1 className='text-2xl' id='abt' ><b>ABOUT US</b></h1>
                <p className='text-2xl  my-5'>
                    Welcome to Care Connect, where compassion meets innovation.We make it easy for you to <br />contribute surplus items and for organizations to efficiently fulfill the specific needs of <br />
                 orphanages. Our vision extends beyond just facilitating donations; we aim to revolutionize the <br />
                  way communities come together to care for one another.</p>
            </div>
            <div className='text-center  flex flex-wrap justify-center gap-5'>
                <div className='flex flex-col gap-5'>
                    <div> <img src={pic1} alt="" /></div>
                    <div> <img src={pic2} alt="" /></div>
                </div>
                <div>
                    <div><img src={pic3} alt="" /></div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div><img src={pic4} alt="" /></div>
                    <div><img src={pic5} alt="" /></div>
                </div>

            </div>
        </div>
        <div className='bg-orange-100 h-auto pb-8 flex flex-wrap justify-evenly gap-10 pt-12'>
            <div >
                 <img className='ps-5' src={pc1} alt="" />
                 <p className='py-4 text-center font-bold textc text-amber-950 text-xl'>786 DONATIONS</p>
            
            </div>
            <div > 
                <img className='ps-11' src={pc2} alt="" />
                <p className='py-4 text-center font-bold text-amber-950 text-xl'>154 ORGANIZATIONS</p>
            </div>
            <div >
                 <img className='ps-11'src={pc3} alt="" />
                  <p className='py-4 text-center font-bold text-amber-950 text-xl'>194 ORPHANAGES</p>     
            </div>
           
        </div>
      </div>
  )
}

export default Landing
