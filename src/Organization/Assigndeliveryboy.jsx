import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Assigndeliveryboy = () => {
    const [deliveries, setDeliveries] = useState([]);
    const [isAssigning, setIsAssigning] = useState(false);
    const [assignmentData, setAssignmentData] = useState({ date: '' });
    const { did } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/organization/assigndboy');
                setDeliveries(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const toggleAssignment = () => {
        setIsAssigning(!isAssigning);
    };

    const handleAssignmentChange = (event) => {
        setAssignmentData({ ...assignmentData, [event.target.name]: event.target.value });
    };

    const handleSubmitAssignment = async (deliveryBoyId) => {
        const payload = {
            date: assignmentData.date,
            deliveryboyId: deliveryBoyId,
            status: 'assigned'
        };
        try {
            const response = await axios.put(`http://localhost:4000/organization/assigndonationdboy/${did}`, payload);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting assignment:', error);
        }
    };

    return (
        <div className='w-full'>
            <div className='basicbg pt-7 px-10'>
                <div className='text-3xl font-semibold text-center text-[#431515] pb-7'>ASSIGN DELIVERY BOYS</div>

                <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                    <table className='w-full text-sm text-left rtl:text-right text-black dark:text-black'>
                        <thead className='text-xs uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black'>
                            <tr>
                                <th className='px-6 py-3'>SL NO.</th>
                                <th className='px-6 py-3'>DELIVERY BOY</th>
                                <th className='px-6 py-3'>PHONE NO.</th>
                                <th className='px-6 py-3'>DELIVERY BOY ADDRESS</th>
                                <th className='px-6 py-3'>ASSIGNED DETAILS</th>
                                <th className='px-6 py-3'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {deliveries.map((delivery, index) => (
                                <tr key={index} className='bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]'>
                                    <td className='px-6 py-4'>{index + 1}</td>
                                    <td className='px-6 py-4'>{delivery.dboy?.name}</td>
                                    <td className='px-6 py-4'>{delivery.dboy?.phno}</td>
                                    <td className='px-6 py-4'>
                                        {delivery.dboy?.houseName} <br />
                                        P.O {delivery.dboy?.postoffice} <br />
                                        Pin: {delivery.dboy?.pin} <br />
                                        {delivery.dboy?.district}
                                    </td>
                                    <td className='px-6 py-4'>
                                        {delivery.assignedDetails.map((assigned, assignedIndex) => (
                                            <div key={assignedIndex}>
                                                {/* <p>Type: {assigned.type}</p> */}
                                                {assigned.type === 'donation' &&
                                                    <div>
                                                        {/* <p>Orphanage Details:</p> */}
                                                        {/* <p>Name: {assigned.orphanageDetails.name}</p> */}
                                                        {/* <p>Email: {assigned.orphanageDetails.email}</p> */}
                                                        {/* <p>Phone: {assigned.orphanageDetails.phno}</p> */}
                                                        <p>Date: {assigned.details.date}</p>
                                                        <p>Location: {assigned.orphanageDetails.place}, {assigned.orphanageDetails.district}</p>
                                                        {/* <p>Product: {assigned.details.product}</p> */}
                                                        {/* <p>Count: {assigned.details.count}</p> */}
                                                    </div>
                                                }
                                                {assigned.type === 'order' &&
                                                    <div>
                                                        {/* <p>User Details:</p> */}
                                                        {/* <p>Name: {assigned.userDetails.name}</p> */}
                                                        {/* <p>Email: {assigned.userDetails.email}</p> */}
                                                        {/* <p>Phone: {assigned.userDetails.phno}</p> */}
                                                        <p>Location:  {assigned.userDetails.postoffice}, {assigned.userDetails.district}</p>
                                                        {/* <p>Order ID: {assigned.details._id}</p> */}
                                                        {/* <p>Order Status: {assigned.details.orderstatus}</p> */}
                                                        {/* <p>Products:</p>
                                                        <ul>
                                                            {assigned.details.products.map((product, productIndex) => (
                                                                <li key={productIndex}>Product: {product.productId}, Quantity: {product.count}</li>
                                                            ))}
                                                        </ul> */}
                                                    </div>
                                                }
                                            </div>
                                        ))}
                                    </td>
                                    <td className='px-6 py-4'>
                                        <button className='bg-orange-500 text-black p-2 rounded-lg' onClick={toggleAssignment}>ASSIGN</button>
                                        {isAssigning &&
                                            <div className='right-[30px] text-center sm:right-[18px] p-4 w-fit bg-white text-black text-base font-semibold rounded-lg sm:top-[60px]'>
                                                <div className='flex flex-wrap justify-center gap-2'>
                                                    <label htmlFor='date' className='text-amber-950'>Date</label>
                                                    <input type='date' onChange={handleAssignmentChange} name='date' className='border-orange-500 text-black text-sm rounded-md focus:ring-orange-600 focus:border-orange-600 block w-[14rem] px-4 py-1 dark:border-orange-600 dark:text-black dark:focus:ring-orange-600 dark:focus:border-orange-600'></input>
                                                </div>
                                                <Link to='/organization/viewdonationorg'><button onClick={() => handleSubmitAssignment(delivery.dboy?._id)} className='bg-orange-500 p-1 rounded-lg'>SUBMIT</button></Link>
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
    );
}

export default Assigndeliveryboy;
