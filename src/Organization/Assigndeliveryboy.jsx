import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Assigndeliveryboy = () => {
// console.log();
const [data, setData] = useState([]);
const [data1,setData1]=useState([]);
const [data2,setData2]=useState([]);
    let {did}=useParams()
    useEffect(()=>{
        let fetchdata=async()=>{
           let response=await axios.get('http://localhost:4000/organization/assigndboy')
           let response2=await axios.get('http://localhost:4000/organization/assignorderdboy')
           console.log(response.data);
           setData1(response.data)
           console.log(response2);
           setData2(response2.data)
  
        }
        fetchdata()
     },[])
    const {id}=useParams()
    console.log(id);
    const [det,setDet]= useState(false)
    let date=()=>{
        setDet(!det)
    }

    let handleChange=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
    

      let handleSubmit = async (delid) => {
        const payload = {
            date:data.date,
            deliveryboyId:delid,
            status:'assigned'
            
        };
        console.log(payload);
        let response1=await axios.put(`http://localhost:4000/organization/assigndonationdboy/${did}`, payload)
        console.log(response1.data);
      }
  return (
    <div className='w-[100%]'>
                      <div className='basicbg  pt-7 ps-10 pe-10'>
            <div className='text-3xl text-[#431515] font-semibold text-center pb-7'> ASSIGN DELIVERYBOYS</div>
             

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
                  DEILVERY BOY ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                   ASSIGNED DEILVERY DETAILS
                </th>
                <th scope="col" class="px-6 py-3">
                   ASSIGNED ORDER DETAILS
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {data1.map((item,index)=>(
            <tr class="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]">
                <td class="px-6 py-4 ">
                {index+1}
                </td>
                <td class="px-6 py-4">
                   {item.dboy?.name}
                </td>
                <td class="px-6 py-4">
                    {item.dboy?.phno}
                </td>
                <td class="px-6 py-4">
                    {item.dboy?.houseName} <br />
                  P.O {item.dboy?.postoffice} <br />
                   Pin:{item.dboy?.pin} <br />
                    {item.dboy?.district}
                
                </td>
                <td class="px-6 py-4">
                {item.donations?.map((item1) =>{

                    const res = item.orphanages.find((item3)=> item3._id === item1.orphanageId && item1.status === 'assigned' )
console.log(res,'reed');
                    return(
                       
                        <>

                            {item1?.date} <br />
                            {res?.name} <br />
                        </>
                        
                            // </td>
                        
                    )
                    // (
                    //     item1.orphanageId == item.product?._id && 
                    //     <>
                    // <td class="px-6 py-4">
                    //   Assigned delivery on (12/09/2024) <br />
                    //   at (Address)
                    
                    // </td>
                    // </>
                    //   )
                } )}
                </td>
                <td className="px-6 py-4">
  {data2.map((item, index) => {
    const order = item.orders[0]; // Assuming each item has only one order
    const deliveryBoy = data1.find(userData => userData.dboy?._id === order.products[0]?.deliveryBoyId)?.dboy;
    const user = item.users[0];
    
    return (
      <div key={index}>
        <p>Date: {order.products[0]?.date}</p>
        <p>User Name: {user?.name}</p>
        <p>User Address: {user?.houseName}, P.O {user?.postoffice}, Pin: {user?.pin}, {user?.district}</p>
        {/* <p>Delivery Boy Name: {deliveryBoy?.name}</p> */}
        {/* <p>Delivery Boy Address: {deliveryBoy?.houseName}, P.O {deliveryBoy?.postoffice}, Pin: {deliveryBoy?.pin}, {deliveryBoy?.district}</p> */}
        {/* Add any other details you want to display */}
        <br />
      </div>
    );
  })}
</td>

                
                <td class="px-6 py-4">
                    <button className='bg-orange-500  text-black p-2 rounded-lg' onClick={date}>ASSIGN</button>
                    {det &&
                        
                        <div className=' right-[30px] text-center sm:right-[18px] p-4 w-fit bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                            <div className='flex flex-wrap justify-center gap-2 '>
                               <label htmlFor="date" className='text-amber-950'>Date</label>
                               <input type="date"  onChange={handleChange} name="date"  className='border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1  dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600' ></input>
                            
                            </div>
                           
                                <Link to='/organization/viewdonationorg'><button onClick={()=>handleSubmit(item.dboy?._id)} className='bg-orange-500 p-1 rounded-lg '>SUBMIT</button></Link>
                             

                            
                            
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
  )
}

export default Assigndeliveryboy
