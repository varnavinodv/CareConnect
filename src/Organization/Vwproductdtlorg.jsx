import React from 'react'
import purpledress from './purpledress.png'


const Vwproductdtlorg = () => {
  return (
    <div className=' w-[100%] '>
      <div className='basicbg'>
        {/* <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>PRODUCTS</div> */}
        <div className='flex flex-wrap'>
          <div className='bg-yellow-300/40 w-[50%] flex h-[40rem]'>
            {/* <div className='w-[40px] h-[40px]'> <img src={backarrow} alt="" /></div> */}
            {/* <div className='pt-12  m-auto'> */}
              <img className=' h-[25rem] w-[20rem] m-auto rounded-2xl ' src={purpledress} alt="" />
            {/* </div> */}

          </div>
          <div className='mx-auto my-16'>
            <div className='text-center  w-[100%] m-auto'>
              <h1 className='font-bold text-3xl py-4'>FROCK FOR 6-YR OLD</h1>
              <p className='font-semibold text-xl text-start py-2'>Category      :  Dresses</p>
              <p className='font-semibold text-xl text-start py-2'>Count            :   3</p>
            </div>
            <div className='text-center  w-[100%] m-auto'>
              <h1 className='font-bold text-3xl py-4 text-start'>OWNER’S DETAILS</h1>
              <p className='font-semibold text-xl text-start py-2'>Name           :  Abcde</p>
              <p className='font-semibold text-xl text-start py-2'>Address       :  xyzas,<br />
                Calicut-9,<br />
                pin-672309</p>
            </div>
            {/* ----count button----- */}

            <form class="max-w-xs mx-auto pt-3">
              <label for="quantity-input" class="block mb-2 text-sm font-medium text-black ">Choose quantity:</label>
              <div class="relative flex items-center max-w-[8rem]">
                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="bg-orange-200  dark:hover:bg-orange-400  hover:bg-or border border-orange-500 rounded-s-lg p-3 h-11 focus:ring-orange-500  focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                  </svg>
                </button>
                <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-orange-200 border-x-0 border-orange-500 h-11 text-center text-black text-sm focus:ring-orange-500 focus:border-orange-500 block w-full py-2.5 dark:bg-orange-200 dark:border-orange-500 dark:placeholder-slate-600 dark:text-black dark:focus:ring-orange-500 dark:focus:border-orange-500"  required />
                <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-orange-200 dark:bg-orange-200 dark:hover:bg-orange-400 dark:border-orange-500 hover:bg-orange-400 border border-orange-500  rounded-e-lg p-3 h-11 focus:ring-orange-500 dark:focus:ring-orange-500  focus:ring-2 focus:outline-none">
                  <svg class="w-3 h-3 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                  </svg>
                </button>
              </div>

            </form>

            <div className='py-6 '><button className='bg-orange-500 py-3 px-5 rounded-lg'>ADD TO CART</button></div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Vwproductdtlorg
