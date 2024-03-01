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
import delivery from './Delivery.png'
import requests from './Requests.png'
import cart from './Cart.png'
import spons from '../Admin/spon.png'
import { Link } from 'react-router-dom'


const Sidenavorg = () => {
  return (
   
        <div className='sm:w-[250px] w-[40px]  bg-[#FFEFBD] flex flex-col sm:justify-between pb-5 '>
         <div> 
        <Link to='/organization/editprofileorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]  ' src={user1} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Profile</p>
            </div ></Link>
            
           <Link to='/organization/viewproductorg'> <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]'src={product} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Products</p>
            </div></Link>
            <Link to='/organization/vieworphorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={orph} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Orphanages</p>
            </div></Link>
            <Link to='/organization/viewdonationorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={donatn} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Donations</p>
            </div></Link>
            <Link to ='/organization/viewdeliveryboyorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={delivery} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Delivery boy</p>
            </div></Link>
            <Link to='/organization/donationrequestorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4] '>
                <img className='w-[30px] h-[25px]' src={requests} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Requests</p>
            </div></Link>
            <Link to='/organization/vieweventorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'> 
                <img className='w-[30px] h-[25px]' src={event} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Events</p>
            </div></Link>
           <Link to ='/organization/viewcartorg'> <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={cart} alt="" />
                <p className='text-lg hidden sm:block font-normal' >Cart</p>
            </div ></Link>
            <Link to='/organization/viewreportsorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={report} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Reports</p>
            </div></Link>
           <Link to='/organization/vieworderorg'> <div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={order} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Orders</p>
            </div></Link>
            <Link to='/organization/viewrevieworg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={review} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Reviews</p>
            </div></Link>
            <Link to='/organization/vwsponsorg'><div className='flex flex-wrap justify-start ps-5 py-2 items-center gap-4 hover:bg-[#ffa837c4]'>
                <img className='w-[30px] h-[25px]' src={spon} alt="" />
                <p className='text-lg hidden sm:block font-normal'>Sponsorships</p>
            </div></Link>
            </div>  
            <div className='ps-8 '>
               <Link to='/'> <button className='bg-orange-500 flex flex-wrap py-1 px-3 rounded-lg'>
                    <div className='text-white'>LOGOUT </div>
                    <div><img src={logout} alt="" /></div>
                </button></Link>
                
            </div>



        </div>
      
    
  )
}

export default Sidenavorg
