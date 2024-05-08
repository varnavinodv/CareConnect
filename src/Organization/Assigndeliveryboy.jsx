import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Assigndeliveryboy = () => {
    const [mergedData, setMergedData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [date, setDate] = useState('');

    let lid = localStorage.getItem('id');
    let { did } = useParams();

    useEffect(() => {
        let fetchData = async () => {
            let response1 = await axios.get(`http://localhost:4000/organization/assigndboy/${lid}`);
            let response2 = await axios.get('http://localhost:4000/organization/assignorderdboy');
            
            // Merge data for common delivery boys
            let mergedData = response1.data.map(item1 => {
                let match = response2.data.find(item2 => item2.dboy._id === item1.dboy._id);
                if (match) {
                    return {
                        ...item1,
                        orders: match.orders,
                        users: match.users,
                        donations: item1.donations
                    };
                } else {
                    return item1;
                }
            });

            setMergedData(mergedData);
        };
        fetchData();
    }, [lid]);

    const handleChange = (event) => {
        setDate(event.target.value);
    }
console.log(mergedData,'===================s');
    const handleSubmit = async (delid) => {
        const payload = {
            date: date,
            deliveryboyId: delid,
            status: 'assigned'
        };
        console.log(payload);
        let response1 = await axios.put(`http://localhost:4000/organization/assigndonationdboy/${did}`, payload);
        console.log(response1.data);
        setActiveIndex(-1); // Reset active index after submission
    }

    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <div className='w-[100%]'>
            <div className='basicbg  pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'> ASSIGN DELIVERYBOYS</div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">SL NO.</th>
                                <th scope="col" className="px-6 py-3">NAME</th>
                                <th scope="col" className="px-6 py-3">PHONE NO.</th>
                                <th scope="col" className="px-6 py-3">DELIVERY BOY ADDRESS</th>
                                <th scope="col" className="px-6 py-3">ASSIGNED DONATION DETAILS</th>
                                <th scope="col" className="px-6 py-3">ASSIGNED ORDER DETAILS</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mergedData.map((item, index) => (
                                <tr className="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]" key={index}>
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{item.dboy?.name}</td>
                                    <td className="px-6 py-4">{item.dboy?.phno}</td>
                                    <td className="px-6 py-4">
                                        {item.dboy?.houseName} <br />
                                        P.O {item.dboy?.postoffice} <br />
                                        Pin:{item.dboy?.pin} <br />
                                        {item.dboy?.district}
                                    </td>
                                    <td className="px-6 py-4">
    {item.donations?.map((donation, index) => {
        const orphanage = item.orphanages && item.orphanages[index];
        return (
            <div key={donation._id}>
                {donation.date && (
                    <>
                        {new Date(donation.date).toLocaleDateString('en-GB')}
                        <br />
                        {orphanage.place}, {orphanage.district}
                        <br />
                    </>
                )}
            </div>
        );
    })}
</td>

                                    
                                    
                                    {/* <td className="px-6 py-4">
                                        
                                        {item.donations?.map((item1) => {
                                            return (
                                                <>
                                                
                                                <div key={item1._id}>
                                                     {item1?.date && new Date(item1?.date).toLocaleDateString('en-GB')} <br />
                                        {item1.orphanage?.name}
                                              
                                                </div>
                                                
                                                </>
                                                
                                            );
                                        })}
                                        {item.orphanages?.map((item2) => {
                                             return(
                                                <>
                                                 <div key={item2._id}>
                                                    {item2?.name}

                                                 </div>
                                                
                                                </>
                                             )
                                             
                                             })}
                                    </td> */}
                                    
                                    
                                    <td className="px-6 py-4">
                                        {item.orders?.map((order, index) => {
                                            const user = item.users[index]; // Assuming orders and users are mapped by index
                                            return (
                                                <div key={index}>
                                                    <p>{order?.products[0]?.date &&
                                                      new Date(order?.products[0]?.date).toLocaleDateString('en-GB')
                                                    }</p>
                                                    <p> {user?.postoffice}, {user?.district}</p>
                                                    <br />
                                                </div>
                                            );
                                        })}
                                    </td>
                                    <td className="px-6 py-4">
                                        {activeIndex === index ? (
                                            <>
                                                <div className=' right-[30px] text-center sm:right-[18px] p-4 w-fit bg-white text-black text-base  font-semibold rounded-lg sm:top-[60px] '>
                                                    <div className='flex flex-wrap justify-center gap-2 '>
                                                        <label htmlFor="date" className='text-amber-950'>Date</label>
                                                        <input type="date" onChange={handleChange} name="date" min={currentDate} className='border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1  dark:border-orange-600  dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600' ></input>
                                                    </div>
                                                    <Link to='/organization/viewdonationorg'>
                                                        <button onClick={() => handleSubmit(item.dboy?._id)} className='bg-orange-500 p-1 rounded-lg '>SUBMIT</button>
                                                    </Link>
                                                </div>
                                            </>
                                        ) : (
                                            <button className='bg-orange-500  text-black p-2 rounded-lg' onClick={() => setActiveIndex(index)}>ASSIGN</button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Assigndeliveryboy;
