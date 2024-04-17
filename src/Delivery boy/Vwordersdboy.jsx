import React, { useEffect, useState } from 'react';
import sbook from '../Admin/sbook.jpg';
import axios from 'axios';

const Vwordersdboy = () => {
    const [expandedItems, setExpandedItems] = useState({});
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const id = localStorage.getItem('id');
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/deliveryboy/vieworders/${id}`);
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [refresh]);

    const toggleExpanded = (itemId) => {
        setExpandedItems((prevExpandedItems) => ({
            ...prevExpandedItems,
            [itemId]: !prevExpandedItems[itemId]
        }));
    };

    const handleSubmit = async (status, productId) => {
        try {
            const response = await axios.put(`http://localhost:4000/deliveryboy/updatestatusorder/${productId}`, { Ostatus: status });
            if (response) {
                setRefresh(!refresh);
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div>
            <div className='basicbg w-[100%] pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORDERS</div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    SL NO.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    USER
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PRODUCT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    COUNT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    IMAGE
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
                                <tr key={index} className="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] text-black font-semibold">
                                    <td className="px-6 py-4">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.user?.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.product?.name}
                                    </td>
                                    {/* {item.order?.map((orderItem) => (
                                        orderItem.products?.map((productItem) => (
                                            productItem.productId === item.product?._id && (
                                                <>
                                                    <td className="px-6 py-4">
                                                        {productItem.count}            
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <img className='w-14 h-14' src={`http://localhost:4000/uploads/${item.product?.img}`} alt="" />
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.user?.houseName} <br />
                                                        P.O {item.user?.postoffice} <br />
                                                        pin:{item.user?.pin} <br />
                                                        {item.user?.district}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {item.user?.phno}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {productItem.date}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {productItem.Ostatus}
                                                    </td>
                                                </>
                                            )
                                        ))
                                    ))} */}
                                    {item.order?.products?.map((item1) => (
                    item1.productId == item.product?._id && 
                    <td class='px-6 py-4'>{item1.count}</td>
                ))}
                                    <td> <img className='h-14 w-14' src={`http://localhost:4000/uploads/${item.product?.img}`} alt='' /></td>
                                    <td class='px-6 py-4'>
                    {item.user?.houseName} <br />
                    P.O {item.user?.postoffice} <br />
                    pin:{item.user?.pin} <br />
                    {item.district}
                  </td>
                  <td>{item.user?.phno}</td>
                  {item.order?.products?.map((item1) => (
                    item1.productId == item.product?._id && 
                    <>
                  <td class='px-6 py-4'>{item1.date}</td>
                  <td class='px-6 py-4'>{item1.Ostatus}</td>
                    </>
                ))}
                                    <td className="px-6 py-4 flex flex-wrap flex-col">
                                        <button className='text-white bg-orange-500 py-3 px-1 rounded-lg' onClick={() => toggleExpanded(index)}>Update status</button>
                                        {expandedItems[index] && (
                                            <div className='p-1 bg-white text-black text-base font-semibold rounded-lg'>
                                                <p className='hover:bg-slate-400 p-1 rounded-lg' onClick={() => handleSubmit('Out for pickup', item.product?._id)}>Out for pick up</p>
                                                <p className='hover:bg-slate-400 p-1 rounded-lg' onClick={() => handleSubmit('Picked', item.product?._id)}>Picked</p>
                                                <p className='hover:bg-slate-400 p-1 rounded-lg' onClick={() => handleSubmit('Quality check failed', item.product?._id)}>Quality check failed</p>
                                                <p className='hover:bg-slate-400 p-1 rounded-lg' onClick={() => handleSubmit('Delivered', item.product?._id)}>Delivered</p>
                                            </div>
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
};

export default Vwordersdboy;
