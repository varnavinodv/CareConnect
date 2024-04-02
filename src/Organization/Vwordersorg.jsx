import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import bag from './bags.jpg';
import axios from 'axios';
import Assigndeliveryboy from './Assigndeliveryboy';

const Vwordersorg = () => {
  let lid = localStorage.getItem('id');
  const [data, setData] = useState([]);
  const [deliveryData, setdeliverydata] = useState([]);
  const {id}=useParams()
    console.log(id);
    const [det,setDet]= useState(false)
    let date=()=>{
        setDet(!det)
    }
  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/organization/vieworder/${lid}`);
      console.log(response);
      setData(response.data);
      let response1=await axios.get('http://localhost:4000/organization/assigndboy')
           console.log(response1.data);
           setdeliverydata(response1.data)
  
    };
    fetchdata();
  }, []);

  const [assign,setassign]= useState(false)
  let assigndb=()=>{
     setassign(!assign)
  }
const [order,setorder]=useState('')
  // Create a separate state for selected orders
  const [selectedOrders, setSelectedOrders] = useState([]);

  const handleOrderCheckboxChange = (orderId,mainOrderId) => {
    // Check if the orderId is already selected
    setorder(mainOrderId)
    const index = selectedOrders.indexOf(orderId);
    if (index === -1) {
      // If not selected, add it to the selectedOrders array
      setSelectedOrders([...selectedOrders, orderId]);
    } else {
      // If already selected, remove it from the array
      const updatedSelection = selectedOrders.filter((id) => id !== orderId);
      setSelectedOrders(updatedSelection);
    }
  };
  console.log(selectedOrders);

  let handleChange=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }


  let handleSubmit = async (did) => {
    try {
        // Create a payload object to send with the request
        const payload = {
            selectedOrders: selectedOrders,
            deliveryboy: did,
            date:data.date,
            orgId:order
        };

        // Make the PUT request
        let response2 = await axios.put('http://localhost:4000/organization/assignorderdboy', payload);
        console.log(response2.data);
        console.log('jhgf');
    } catch (error) {
        console.error(error);
    }
};
// axios.put('hjgjhgh',{selectedOrders,de})
  return (
    
    <>
    <div className='w-[100%] '>
      <div className='basicbg w-[100%]  pt-7 ps-10 pe-10 pb-10'>
        {assign == false &&
        <div>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORDERS</div>
        <div class='relative overflow-x-auto shadow-md sm:rounded-lg'>
        <button className='bg-orange-500 text-black  py-2 px-2 rounded-lg float-right' onClick={assigndb}>Assign delivery boy</button>
          <table class='w-full text-sm text-left rtl:text-right text-black dark:text-black'>
            <thead class='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
              <tr>
                <th scope='col' class='px-6 py-3'>
                  SL NO
                </th>
                <th scope='col' class='px-6 py-3'>
                  OWNER
                </th>
                <th scope='col' class='px-6 py-3'>
                  ADDRESS
                </th>
                <th scope='col' class='px-6 py-3'>
                  PRODUCT
                </th>
                <th scope='col' class='px-6 py-3'>
                  CATEGORY
                </th>
                <th scope='col' class='px-6 py-3'>
                  IMAGE
                </th>
                <th scope='col' class='px-6 py-3'>
                  COUNT
                </th>
                <th scope='col' class='px-6 py-3'>
                  DATE
                </th>
                <th scope='col' class='px-6 py-3'>
                  STATUS
                </th>
                <th scope='col' class='px-6 py-3'>
                  ACTION
                </th>
                <th scope='col' class='px-6 py-3'>
                  DELIVERY BOY
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} class='bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]'>
                  <td class='px-6 py-4'>{index + 1}</td>
                  <td class='px-6 py-4'>{item.user?.name}</td>
                  <td class='px-6 py-4'>
                    {item.user?.houseName} <br />
                    P.O {item.user?.postoffice} <br />
                    pin:{item.user?.pin} <br />
                    {item.district}
                  </td>
                  <td class='px-6 py-4'>{item.product?.name}</td>
                  <td class='px-6 py-4'>{item.product?.category}</td>
                  <td class='px-6 py-4'>
                    <img className='h-14 w-14' src={`http://localhost:4000/uploads/${item.product?.img}`} alt='' />
                  </td>
                  {item.order?.products?.map((item1) => (
                    item1.productId == item.product?._id && 
                    <>
                    <td class='px-6 py-4'>{item1.count}</td>
                  <td class='px-6 py-4'>{item1.date}</td>
                  <td class='px-6 py-4'>{item1.Ostatus}</td>
                  <td>
                    <input
                      type='checkbox'
                      checked={selectedOrders.includes(item1.productId)}
                      onChange={() => handleOrderCheckboxChange(item1.productId,item.order._id)}
                    />
                  </td>
                  <td class='px-6 py-4'>{item.delboy?.name}</td>
                  </>

                  ))}

                  <td class='px-6 py-4'>
                    {/* <Link to='/organization/assigndeliveryboyorg/orders'> */}
                      {' '}
                      {/* <button className='bg-orange-500 text-black py-2 px-2 rounded-lg' onClick={assigndb}>Assign delivery boy</button> */}
                    {/* </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
}
        {/* //delivery assign */}
        {assign &&
        <>
        <div className='text-3xl text-[#431515]  font-semibold text-center pb-7' > ASSIGN DELIVERYBOYS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    PHONE NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {deliveryData.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 ">
                {index+1}
                </td>
                <td class="px-6 py-4">
                   {item.name}
                </td>
                <td class="px-6 py-4">
                    {item.phno}
                </td>
                <td class="px-6 py-4">
                    {item.houseName} <br />
                  P.O {item.postoffice} <br />
                   Pin:{item.pin} <br />
                    {item.district}
                
                </td>
                
                <td class="px-6 py-4">
                    <button className='bg-orange-500  text-black p-2 rounded-lg' onClick={date}>ASSIGN</button>
                    {det &&
                        
                        <div className=' right-[30px] text-center sm:right-[18px] p-4 w-fit bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                            <div className='flex flex-wrap justify-center gap-2 '>
                               <label  htmlFor="date" className='text-amber-950'>Date</label>
                               <input onChange={handleChange}  type="date" name="date" className='border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1  dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600' ></input>
                            
                            </div>
                           

                                 <button className='bg-orange-500 p-1 rounded-lg 'onClick={()=>handleSubmit(item._id)}>SUBMIT</button>
                                
                                {/* <Link to='/organization/viewdonationorg'> <button className='bg-orange-500 p-1 rounded-lg '>SUBMIT</button></Link> */}

                           
                          </div> 
                     }
                </td>
            </tr>
            ))}  
        </tbody>
    </table>
</div>
</>
        
}
      </div>
    </div>





{/* {assign &&

<div className='w-[100%]'>
                      <div className='basicbg2   pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515]  font-semibold text-center pb-7' > ASSIGN DELIVERYBOYS</div>
             

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
        <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
            <tr>
                <th scope="col" class="px-6 py-3">
                    SL NO.
                </th>
                <th scope="col" class="px-6 py-3">
                    NAME
                </th>
                <th scope="col" class="px-6 py-3">
                    PHONE NO.
                </th>
                <th scope="col" class="px-6 py-3">
                   ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {deliveryData.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 ">
                {index+1}
                </td>
                <td class="px-6 py-4">
                   {item.name}
                </td>
                <td class="px-6 py-4">
                    {item.phno}
                </td>
                <td class="px-6 py-4">
                    {item.houseName} <br />
                  P.O {item.postoffice} <br />
                   Pin:{item.pin} <br />
                    {item.district}
                
                </td>
                
                <td class="px-6 py-4">
                    <button className='bg-orange-500  text-black p-2 rounded-lg' onClick={date}>ASSIGN</button>
                    {det &&
                        
                        <div className=' right-[30px] text-center sm:right-[18px] p-4 w-fit bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                            <div className='flex flex-wrap justify-center gap-2 '>
                               <label htmlFor="date" className='text-amber-950'>Date</label>
                               <input type="date"className='border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1  dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600' ></input>
                            
                            </div>
                            {
                                id=='orders' ?

                                <Link to='/organization/vieworderorg'> <button className='bg-orange-500 p-1 rounded-lg '>SUBMIT</button></Link>
                                :
                                id=='donation' &&
                                <Link to='/organization/viewdonationorg'> <button className='bg-orange-500 p-1 rounded-lg '>SUBMIT</button></Link>

                            }
                            
                          </div> 
                     }
                </td>
            </tr>
            ))}  
        </tbody>
    </table>
</div>
        
        </div>
      
    </div>
} */}

    </>

  );
};

export default Vwordersorg;
