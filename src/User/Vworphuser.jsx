import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Vworphuser = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let fetchdata = async () => {
            let response = await axios.get('http://localhost:4000/user/vieworph');
            setData(response.data);
            setFilteredData(response.data);
        }
        fetchdata();
    }, []);

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = data.filter(item => {
            return (
                item.place.toLowerCase().includes(query) ||
                item.district.toLowerCase().includes(query) ||
                item.name.toLowerCase().includes(query)
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div className='w-[100%]'>
            <div className='basicbg  pt-7 ps-10 pe-10'>
                <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORPHANAGES</div>

                <form className="max-w-md mx-auto">
                    <label htmlFor="default-search" className="text-sm font-medium text-black sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-black border border-orange-500 rounded-lg bg-[#FFEFBD] focus:ring-orange-500 focus:border-orange-500 dark:placeholder-gray-400"
                            placeholder="Search Orphanage Place or District"
                            value={searchQuery}
                            onChange={handleSearch}
                            required
                        />
                        {/* <button type="submit" className="text-black absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2">Search</button> */}
                    </div>
                </form>

                <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-11">
                    <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                        <thead className="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    SL NO.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ORPHANAGE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    EMAIL
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} className="bg-[#f8d2a0] border-b border-orange-600 hover:bg-[#f7b866d4] font-semibold">
                                    <td className="px-6 py-4">
                                        {index + 1}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 hover:font-bold">
                                        <Link to={`/user/vieworphdtluser/${item._id}`}><button className='hover:underline'>View</button></Link>
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

export default Vworphuser;
