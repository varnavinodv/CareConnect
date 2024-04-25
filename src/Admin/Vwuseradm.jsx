import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Vwuseradm = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:4000/admin/viewuser');
            console.log(response.data);
            setData(response.data);
            setFilteredData(response.data);
        };
        fetchdata();
    }, []);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        const filtered = data.filter(
            (item) =>
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.district.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleSubmit = async (status, id) => {
        try {
            await axios.put(`http://localhost:4000/admin/acceptusers/${id}`, {
                status: status
            });
            // Refresh data after update
            const response = await axios.get('http://localhost:4000/admin/viewuser');
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    return (
        <div className="w-full">
            <div className="basicbg pt-7 ps-10 pe-10">
                <div className="text-3xl text-[#431515] font-semibold text-center pb-7">USERS</div>

                <div>
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="text-sm font-medium text-black sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-4 ps-10 text-sm text-black border border-orange-500 rounded-lg bg-[#FFEFBD] focus:ring-orange-500 focus:border-orange-500 dark:placeholder-gray-400 dark:text-black"
                                placeholder="Search Products, Category, users"
                                value={searchQuery}
                                onChange={handleSearch}
                                required
                            />
                        </div>
                    </form>
                </div>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-5">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    SL NO.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    NAME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    AGE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    EMAIL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PHONE NO.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ADDRESS
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
                            {filteredData.map((item, index) => (
                                <tr
                                    key={index}
                                    className="bg-[#f8d2a0] border-b font-semibold border-orange-600 hover:bg-[#f7b866d4]"
                                >
                                    <td className="px-6 py-4">{index + 1}</td>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.age}</td>
                                    <td className="px-6 py-4">{item.email}</td>
                                    <td className="px-6 py-4">{item.phno}</td>
                                    <td className="px-6 py-4">
                                        {item.houseName} <br />
                                        p.o {item.postoffice} <br />
                                        pin: {item.pin} <br />
                                        {item.district}
                                    </td>
                                    <td className="px-6 py-4">{item.status}</td>
                                    <td className="px-6 py-4">
                                        <button
                                            href="#"
                                            onClick={() => handleSubmit('disabled', item._id)}
                                            className="font-bold text-red-600 hover:underline"
                                        >
                                            DISABLE
                                        </button>{' '}
                                        <br />
                                        <button
                                            href="#"
                                            onClick={() => handleSubmit('enabled', item._id)}
                                            className="font-bold text-green-600 hover:underline"
                                        >
                                            ENABLE
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

export default Vwuseradm;
