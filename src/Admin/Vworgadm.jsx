import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Vworgadm = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [drop, setDrop] = useState(false);
    const [status, setStatus] = useState('');
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetchData();
    }, [refresh]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/admin/vieworganization');
            console.log(response.data);
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleSubmit = async (status, id) => {
        setRefresh(!refresh);
        try {
            const response = await axios.put(`http://localhost:4000/admin/acceptusers/${id}`, {
                ...data,
                status: status
            });
            console.log(response);
            setData('');
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    const dropdown = () => {
        setDrop(!drop);
    };

    const dropdownClose = async (status) => {
        setStatus(status);
        try {
            const response = await axios.get(`http://localhost:4000/admin/filterstatusorg/${status}`);
            console.log(response.data);
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error('Error filtering data:', error);
        }
        setDrop(false);
    };

    const handleSearch = (e) => {
        const searchValue = e.target.value.toLowerCase();
        const filtered = data.filter((item) =>
            item.name.toLowerCase().includes(searchValue) ||
            item.district.toLowerCase().includes(searchValue) ||
            item.place.toLowerCase().includes(searchValue)
        );
        setFilteredData(filtered);
    };

    return (
        <div className='w-[100%]'>
            <div className='basicbg pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORGANIZATIONS</div>
                {/* searchbar */}
                <form className='max-w-lg mx-auto pb-10'>
                    <div className='flex items-center'>
                        <div>
                            <button onClick={dropdown} id='dropdown-button' data-dropdown-toggle='dropdown' className='h-[42px] inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-orange-500 border border-gray-300 rounded-s-lg hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500 dark:text-white dark:border-orange-500' type='button'>
                                {status === 'Accepted' ? <span>Accepted</span> : status === 'Rejected' ? <span>Rejected</span> : <span>All categories</span>} <svg className='w-2.5 h-2.5 ms-2.5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 10 6'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 1 4 4 4-4' />
                                </svg>
                            </button>
                            {drop && (
                                <div id='dropdown' className='z-10 absolute bg-orange-500 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-orange-500'>
                                    <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdown-button'>
                                        <li>
                                            <button type='button' onClick={() => dropdownClose('Accepted')} className='inline-flex w-full px-4 py-2 hover:bg-orange-200 dark:hover:text-black'>Accepted</button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={() => dropdownClose('Rejected')} className='inline-flex w-full px-4 py-2 hover:bg-orange-200 dark:hover:text-black'>Rejected</button>
                                        </li>
                                        <li>
                                            <button type='button' onClick={() => dropdownClose('all')} className='inline-flex w-full px-4 py-2 hover:bg-orange-200 dark:hover:text-black'>All</button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='relative w-full'>
                            <input type='search' id='search-dropdown' className='block p-2.5 w-full z-20 text-sm text-black bg-white rounded-e-lg border-s-2 border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-white dark:border-s-orange-500 dark:border-orange-500 dark:placeholder-gray-400 dark:text-black dark:focus:border-orange-500' placeholder='Search Organizations,place,district' onChange={handleSearch} required />
                            <button type='submit' className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-200 rounded-e-lg border border-orange-500 hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500'>
                                <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'>
                                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z' />
                                </svg>
                                <span className='sr-only'>Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                {/* tableee */}
                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black'>
                        <thead className='text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>
                                    SL NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    NAME
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    LICENSE NO
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    LICENSE
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    EMAIL
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    PHONE NO.
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ADDRESS
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    STATUS
                                </th>
                                <th scope='col' className='px-6 py-3'>
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className='bg-[#f8d2a0] border-b  font-semibold border-orange-600 hover:bg-[#f7b866d4]'>
                                    <td className='px-6 py-4 font-semibold'>{index + 1}</td>
                                    <td className='px-6 py-4'>{item.name}</td>
                                    <td className='px-6 py-4'>{item.licenseNo}</td>
                                    <td className='px-6 py-4'>{item.license}</td>
                                    <td className='px-6 py-4'>{item.email}</td>
                                    <td className='px-6 py-4'>{item.phno}</td>
                                    <td className='px-6 py-4'>
                                        {item.place} <br />
                                        P.O {item.postoffice} <br />
                                        Pin:{item.pin} <br />
                                        {item.district}
                                    </td>
                                    <td className='px-6 py-4'>{item.status}</td>
                                    <td className='px-6 py-4 flex flex-wrap flex-col'>
                                        <button onClick={() => handleSubmit('Accepted', item._id)} href='#' className='font-bold text-green-600  hover:underline'>
                                            Accept
                                        </button>
                                        <button onClick={() => handleSubmit('Rejected', item._id)} href='#' className='font-bold text-red-600  hover:underline'>
                                            Reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Vworgadm;








// ---------------------------------------------
// import React,{useEffect, useState} from 'react'
// import axios from 'axios'


// const Vworgadm = () => {
//     const [data,setdata]=useState([''])
//     const [drop,setDrop]= useState(false)
//     const [status,setStatus]=useState('')
//     const[refresh,setrefresh]=useState(false)


//     useEffect(()=>{
//         let fetchdata=async()=>{
//            let response=await axios.get('http://localhost:4000/admin/vieworganization')
//            console.log(response.data);
//            setdata(response.data)
  
//         }
//         fetchdata()
//      },[refresh])

//      let handleSubmit=async (status,id)=>{
//         setrefresh(!refresh)
//         // setData(data)
//         // console.log(data);
//         // navigate('/organization/viewdeliveryboyorg')
//         let response=await axios.put(`http://localhost:4000/admin/acceptusers/${id}`,{...data,status:status})
//       console.log(response);
//       setdata('')
        
//       }

//   let dropdown=()=>{
//     setDrop(!drop)
//   }
//   let dropdownClose=async(status)=>{
//     let response=await axios.get(`http://localhost:4000/admin/filterstatus/${status}`)
//     console.log(response.data);
//     setdata(response.data)
   
//     // let newdata=data.filter(item=>item.status== status)
//     // setdata(newdata)
//     // console.log(newdata);
//     setDrop(false)

//   }

// //   let dropdownClose4=()=>{
// //     setrefresh(!refresh)
// //   }
// //   let dropdownClose1=()=>{
// //     setStatus('Rejected')
// //     let newdata=data.filter(item=>item.status=='Rejected')
// //     setdata(newdata)
// //     console.log(newdata);
// //     setDrop(false)

// //   }
// //   let dropdownClose2=()=>{
// //     setStatus('')
// //     let newdata=data.filter(item=>item)
// //     setdata(newdata)
// //     setDrop(false)

// //   }

  
//   return (
//     <div className='w-[100%]'>
//         <div  className='basicbg   pt-7 ps-10 pe-10'>
//             <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORGANIZATIONS</div>
//         {/* searchbar */}
        
// <form class="max-w-lg mx-auto pb-10">
//     <div class="flex items-center">
//        <div>

//         <button  onClick={dropdown} id="dropdown-button" data-dropdown-toggle="dropdown" className="h-[42px] inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-orange-500 border border-gray-300 rounded-s-lg hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500 dark:text-white dark:border-orange-500" type="button">{status=='Accepted' ? <span>Accepted</span> : status=='Rejected' ? <span>Rejected</span> : <span>All categories</span>} <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
//     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
//   </svg></button>
//   {drop &&
//         <div id="dropdown" class="z-10 absolute   bg-orange-500 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-orange-500">
//             <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
//             <li>
//                 <button type="button" onClick={()=>{dropdownClose('Accepted')}} class="inline-flex w-full px-4 py-2  hover:bg-orange-200 dark:hover:text-black">Accepted</button>
//             </li>
//             <li>
//                 <button type="button" onClick={()=>{dropdownClose('Rejected')}} class="inline-flex w-full px-4 py-2  hover:bg-orange-200 dark:hover:text-black">Rejected</button>
//             </li>
//             <li>
//                 <button type="button" onClick={()=>{dropdownClose('all')}} class="inline-flex w-full px-4 py-2  hover:bg-orange-200 dark:hover:text-black">All</button>
//             </li>
//             </ul>
//         </div>
// }
// </div>
//         <div class="relative w-full">
//             <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-black bg-white rounded-e-lg  border-s-2 border border-orange-500 focus:ring-orange-500 focus:border-orange-500 dark:bg-white dark:border-s-orange-500  dark:border-orange-500 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500" placeholder="Search Organizations" required />
//             <button  type="submit"  class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-orange-200 rounded-e-lg border border-orange-500 hover:bg-[#f7b866d4] focus:ring-4 focus:outline-none focus:ring-orange-500 dark:bg-orange-500 dark:hover:bg-[#f7b866d4] dark:focus:ring-orange-500">
//                 <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                 </svg>
//                 <span class="sr-only">Search</span>
//             </button>
//         </div>
//     </div>
// </form>


// {/* tableee */}

// <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
//         <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
//             <tr>
//                 <th scope="col" class="px-6 py-3">
//                     SL NO.
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     NAME
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     LICENSE NO
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     LICENSE
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     EMAIL
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     PHONE NO.
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     ADDRESS
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                    STATUS
//                 </th>
//                 <th scope="col" class="px-6 py-3">
//                     ACTION
//                 </th>
                
//             </tr>
//         </thead>
//         <tbody>
//         {data.map((item,index)=>(
//             <tr class="bg-[#f8d2a0] border-b  font-semibold border-orange-600 hover:bg-[#f7b866d4]">
//                 <td class="px-6 py-4 font-semibold">
//                     {index+1}
//                 </td>
//                 <td class="px-6 py-4">
//                     {item.name}
//                 </td>
//                 <td class="px-6 py-4">
//                    {item.licenseNo}
//                 </td>
//                 <td class="px-6 py-4">
//                    {item.license}
//                 </td>
//                 <td class="px-6 py-4">
//                   {item.email}
//                 </td>
//                 <td class="px-6 py-4">
//                     {item.phno}
//                 </td>
//                 <td class="px-6 py-4">
//                 {item.place} <br />
//               P.O {item.postoffice} <br />
//               Pin:{item.pin} <br />
//               {item.district}
//                 </td>
//                 <td class="px-6 py-4">
//                    {item.status}
//                 </td>
//                 <td class="px-6 py-4 flex flex-wrap flex-col">
                    
//                 <button onClick={()=>{handleSubmit('Accepted',item._id)}} href="#" className="font-bold text-green-600  hover:underline">Accept</button>
//                 <button onClick={()=>{handleSubmit('Rejected',item._id)}} href="#" className="font-bold text-red-600  hover:underline">Reject</button>
                    
//                 </td>
                
//             </tr>
//           ))}  
//         </tbody>
//     </table>
// </div>


//     </div>  
//     </div>
//   )
// }

// export default Vworgadm
