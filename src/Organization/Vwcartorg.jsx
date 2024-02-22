import React from 'react'
import book from './book.png'
import dress from './dresses.png'
import toys from './toyss.jpg'

const Vwcartorg = () => {
  return (
    <div>
        <div className='basicbg w-[100%]  pt-7 ps-10 pe-10 pb-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>CART</div>
            <div className='flex flex-wrap justify-evenly pt-7 pb-12'>
                  <div className='h-fit w-[220px] bg-white'>
                     <img  className='h-[200px] w-[200px] pt-4 ps-4' src={book} alt="" />
                     <p className='text-center font-semibold pt-1'>Storybook</p>
                     <p className='text-center font-semibold  text-gray-800 text-sm'>Rihala</p>
                     <p className='text-center font-semibold  text-gray-800 text-sm'>Count:2</p>
                  </div>
                  <div className='h-fit w-[220px] bg-white'>
                     <img  className='h-[200px] w-[200px] pt-4 ps-4' src={dress} alt="" />
                     <p className='text-center font-semibold pt-1'>Frock</p>
                     <p className='text-center font-semibold  text-gray-800 text-sm'>Rihala</p>
                     <p className='text-center font-semibold  text-gray-800 text-sm'>Count:2</p>
                  </div>
                  <div className='h-fit w-[220px] bg-white'>
                     <img  className='h-[200px] w-[200px] pt-4 ps-4' src={toys} alt="" />
                     <p className='text-center font-semibold pt-1'>Toy</p>
                     <p className='text-center font-semibold  text-gray-800 text-sm'>Rihala</p>
                     <p className='text-center font-semibold  text-gray-800 text-sm'>Count:2</p>
                  </div>
     
            </div>
            <div className='text-center'><button className='bg-orange-500 py-3 px-5 rounded-lg font-bold '>ORDER NOW</button></div>
        </div>    
      
    </div>
  )
}

export default Vwcartorg
