import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vwdonatndboy = () => {
    const [det, setDet] = useState({});
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    const id = localStorage.getItem('id');

    const toggleDropdown = (index) => {
        setDet((prevDet) => ({
            ...prevDet,
            [index]: !prevDet[index]
        }));
    };

    const handleSubmit = async (status, did) => {
        setRefresh(!refresh);
        let response = await axios.put(`http://localhost:4000/deliveryboy/updatestatusdonation/${did}`, {
            ...data,
            status: status
        });
        console.log(response);
        setData('');
    };

    useEffect(() => {
        const fetchData = async () => {
            let response = await axios.get(`http://localhost:4000/deliveryboy/viewdonation/${id}`);
            console.log(response);
            setData(response.data);
        };
        fetchData();
    }, [refresh]);

    return (
        <div>
            <div className='basicbg w-[100%]  pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATIONS</div>

                {/* tableee */}
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    SL NO.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRODUCT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    COUNT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ORPHANAGE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ADDRESS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PHONE NO.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DATE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    STATUS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                item.donation?.map((item1, subIndex) => (
                                    <tr key={`${index}-${subIndex}`} className="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] text-black font-semibold">
                                        <td className="px-6 py-4">
                                            {index + 1}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item1.product}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item1.count}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.orph?.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.orph?.place} <br />
                                            p.o {item.orph?.postoffice} <br />
                                            pin:{item.orph?.pin} <br />
                                            {item.orph?.postoffice}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.orph?.phno}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item1.date}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item1.status}
                                        </td>
                                        <td className="px-6 py-4 flex flex-wrap flex-col">
                                            <button className='text-white bg-orange-500 py-3 px-1 rounded-lg' onClick={() => toggleDropdown(`${index}-${subIndex}`)}>Update status</button>
                                            {det[`${index}-${subIndex}`] &&
                                                <div className='p-1 bg-white text-black text-base font-semibold rounded-lg'>
                                                    <button className='hover:bg-slate-400 p-1 rounded-lg' onClick={() => handleSubmit('Out for delivery', item1._id)}>Out for delivery</button><br />
                                                    <button className='hover:bg-slate-400 p-1 rounded-lg' onClick={() => handleSubmit('Delivered', item1._id)}>Delivered</button>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Vwdonatndboy;


// import React,{useEffect, useState} from 'react'
// import axios from 'axios'

// const Vwdonatndboy = () => {
//     const [det,setDet]= useState(false)
//     const [data,setData]= useState([])
// let status=()=>{
//     setDet(!det)
//     // let cid =localStorage.getItem('id')
// }
// const [refresh, setRefresh] = useState(false);

// let handleSubmit=async (status,did)=>{
//     setRefresh(!refresh)
//     // setData(data)
//     // console.log(data);
//     // navigate('/organization/viewdeliveryboyorg')
//     let response=await axios.put(`http://localhost:4000/deliveryboy/updatestatusdonation/${did}`,{...data,status:status})
//     console.log(response);
//     setData('')
    
//   }


// const id = localStorage.getItem('id');


// useEffect(()=>{
//     let fetchdata=async ()=>{
//       let response=await axios.get(`http://localhost:4000/deliveryboy/viewdonation/${id}`)
//       console.log(response);
//       setData(response.data)
//     }
//     fetchdata()

    
//   },[refresh])
// return (
// <div>
// <div className='basicbg w-[100%]  pt-7 ps-10 pe-10'>
//    <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>DONATIONS</div>



// {/* tableee */}

// <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
// <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
// <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
//    <tr>
//        <th scope="col" class="px-6 py-3">
//           SL NO.
//        </th>
       
//        <th scope="col" class="px-6 py-3">
//            PRODUCT
//        </th>
//        <th scope="col" class="px-6 py-3">
//            COUNT
//        </th>
//        <th scope="col" class="px-6 py-3">
//           ORPHANAGE
//        </th>
//        <th scope="col" class="px-6 py-3">
//            ADDRESS
//        </th>
//        <th scope="col" class="px-6 py-3">
//            PHONE NO.
//        </th>
//        <th scope="col" class="px-6 py-3">
//            DATE
//        </th>
//        <th scope="col" class="px-6 py-3">
//            STATUS
//        </th>
//        <th scope="col" class="px-6 py-3">
//            ACTION
//        </th>
       
//    </tr>
// </thead>
// <tbody>
// {data.map((item, index) => (
//     item.donation?.map((item1)=>(
//    <tr class="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] text-black font-semibold">
//        <td  class="px-6 py-4 ">
//            {index+1}
//        </td>
       
//        <td class="px-6 py-4">
//           {item1.product}
//        </td>
//        <td class="px-6 py-4">
//            {item1.count}
//        </td>
//        <td class="px-6 py-4">
//            {item.orph?.name}
//        </td>
//        <td class="px-6 py-4">
//        {item.orph?.place} <br />
//        p.o {item.orph?.postoffice} <br />
//        pin:{item.orph?.pin} <br />
//        {item.orph?.postoffice}

//        </td>
//        <td class="px-6 py-4">
//        {item.orph?.phno}
//        </td>
//        <td class="px-6 py-4">
//        {item1.date}
//        </td>
//        <td class="px-6 py-4">
//        {item1.status}
//        </td>
//        <td class="px-6 py-4 flex flex-wrap flex-col">

//            <button className='text-white bg-orange-500 py-3 px-1 rounded-lg'onClick={status}>Update status</button>
//            {det &&
                   
//                    <div className='  p-1 bg-white text-black text-base  font-semibold rounded-lg  '>
//                        {/* <button onClick={()=>updateStatus('outForDelivery')} className='hover:bg-slate-400 p-1 rounded-lg'>Out for delivery</button>
//                        <p onClick={()=>updateStatus('Delivered')}className='hover:bg-slate-400 p-1 rounded-lg'>Delivered</p> */}
//                         <button className='hover:bg-slate-400 p-1 rounded-lg'  onClick={() => handleSubmit('Out for delivery', item1._id)} >Out for delivery</button><br />
//                        <button className='hover:bg-slate-400 p-1 rounded-lg' onClick={() => handleSubmit('Delivered', item1._id)}>Delivered</button>
//                      </div> 
//                 }
//        </td>
       
//    </tr>
//    ))
// ))} 
// </tbody>
// </table>
// </div>


// </div>  
// </div>
// )
// }

// export default Vwdonatndboy
