import React from 'react'
import contri from '../Admin/contri.png'
import donatn from '../Admin/donatn.png'
import event from '../Admin/event.png'
import order from '../Admin/order.png'
import orph from '../Admin/orph.png'
import product from '../Admin/product.png'
import report from '../Admin/report.png'
import review from '../Admin/review.png'
import spon from '../Admin/spon.png'
import user1 from '../Admin/user1.png'
import org from '../Admin/org.png'
import logout from '../Admin/logout.png'

const Usersidenav = () => {
  return (
    <div>
        <div className='w-[13%] h-[40rem] bg-[#FFEFBD]'>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]  ' src={user1} alt="" />
                <p className='text-lg font-normal'>User</p>
            </div >
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]'src={product} alt="" />
                <p className='text-lg font-normal'>Products</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={org} alt="" />
                <p className='text-lg font-normal'>Organizations</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={donatn} alt="" />
                <p className='text-lg font-normal'>Donations</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={contri} alt="" />
                <p className='text-lg font-normal'>Contributions</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4] '>
                <img className='w-[30px] h-[25px]' src={orph} alt="" />
                <p className='text-lg font-normal'>Orphanages</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'> 
                <img className='w-[30px] h-[25px]' src={event} alt="" />
                <p className='text-lg font-normal'>Events</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={spon} alt="" />
                <p className='text-lg font-normal' >Sponsorships</p>
            </div >
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={report} alt="" />
                <p className='text-lg font-normal'>Reports</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={order} alt="" />
                <p className='text-lg font-normal'>Orders</p>
            </div>
            <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={review} alt="" />
                <p className='text-lg font-normal'>Reviews</p>
            </div>
            <div className='ps-8 pt-20'>
                <button className='bg-orange-500 flex flex-wrap py-1 px-3 rounded-lg'>
                    <div className='text-white'>LOGOUT </div>
                    <div><img src={logout} alt="" /></div>
                </button>
                
            </div>



        </div>
      
      
    </div>
  )
}

export default Usersidenav
