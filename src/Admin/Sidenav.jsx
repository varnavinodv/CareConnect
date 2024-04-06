import React from 'react'
import {Link} from 'react-router-dom'
import contri from './contri.png'
import donatn from './donatn.png'
import event from './event.png'
import order from './order.png'
import orph from './orph.png'
import product from './product.png'
import dboy from '../Organization/Delivery.png'
import review from './review.png'
import spon from './spon.png'
import user1 from './user1.png'
import org from './org.png'
import logout from './logout.png'
import report from './report.png'


const Sidenav = () => {
  return (
    
        <div className='sm:w-[250px] w-[40px]  bg-[#FFEFBD] flex flex-col sm:justify-between pb-5 '>
            <div>
            <Link to='/admin/viewuser' ><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]  ' src={user1} alt="" />
                <p className='text-lg font-normal'>User</p>
            </div ></Link>
            <Link to='/admin/viewproduct'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]'src={product} alt="" />
                <p className='text-lg font-normal'>Products</p>
            </div></Link>
            <Link to='/admin/vieworganization'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={org} alt="" />
                <p className='text-lg font-normal'>Organizations</p>
            </div></Link>
           <Link to='/admin/viewdonation'> <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={donatn} alt="" />
                <p className='text-lg font-normal'>Donations</p>
            </div></Link>
            <Link to='/admin/viewcontribution'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={contri} alt="" />
                <p className='text-lg font-normal'>Contributions</p>
            </div></Link>
            <Link to='/admin/vieworphanage'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4] '>
                <img className='w-[30px] h-[25px]' src={orph} alt="" />
                <p className='text-lg font-normal'>Orphanages</p>
            </div></Link>
            <Link to='/admin/viewdeliveryboy'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'> 
                <img className='w-[30px] h-[25px]' src={dboy} alt="" />
                <p className='text-lg font-normal'>Delivery boys</p>
            </div></Link>
            <Link to ='/admin/viewsponsorshiphistory/'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={spon} alt="" />
                <p className='text-lg font-normal' >Sponsorships</p>
            </div ></Link>
           
            <Link to ='/admin/vieworder/'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={order} alt="" />
                <p className='text-lg font-normal'>Orders</p>
            </div></Link>
           <Link to ='/admin/viewreview/'> <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={review} alt="" />
                <p className='text-lg font-normal'>Reviews</p>
            </div></Link>
            <Link to='/admin/viewevent'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]'src={event} alt="" />
                <p className='text-lg font-normal'>Events</p>
            </div></Link>
            <Link to='/admin/viewreport'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]'src={report} alt="" />
                <p className='text-lg font-normal'>Reports</p>
            </div></Link>
            </div>
           <div className='ps-8 pt-20'>
           <Link to ='/'><button className='bg-orange-500 flex flex-wrap py-1 px-3 rounded-lg'>
                    <div className='text-white'>LOGOUT </div>
                    <div><img src={logout} alt="" /></div>
                </button></Link>
                
            </div>



        </div>
      
   
  )
}

export default Sidenav
