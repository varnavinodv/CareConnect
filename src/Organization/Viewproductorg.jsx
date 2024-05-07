import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import book from './book.png';
import dress from './dresses.png';
import toys from './toyss.jpg';
import bag from './bags.jpg';
import shoe from './shoes.png';
import other from './other.png';

const Viewproductorg = () => {
    let id = localStorage.getItem('id');
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/organization/viewproductorg');
            console.log(response.data);
            setData(response.data);
            setFilteredData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filterCategory = (category) => {
        const filtered = data.filter((item) => item.product?.category.toLowerCase() === category.toLowerCase());
        setFilteredData(filtered);
    };

    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = data.filter((item) => 
            item.product?.category.toLowerCase().includes(query) || item.product?.name.toLowerCase().includes(query) ||
        item.user?.name.toLowerCase().includes(query) || item.user?.district.toLowerCase().includes(query)
        );
        setFilteredData(filtered);
    };

    return (
        <div className="w-[100%]">
            <div className="basicbg pt-7">
                <div className="text-3xl text-[#431515] font-semibold text-center pb-7">PRODUCTS</div>

                {/* --searchbar--- */}
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
                                placeholder="Search Products"
                                value={searchQuery}
                                onChange={handleSearch}
                                required
                            />
                            
                        </div>
                    </form>
                </div>
                {/* --searchend-- */}
                <div className="flex flex-wrap justify-evenly pt-7 pb-12">
                    <div className='h-[135px] w-[120px] bg-white' onClick={() => filterCategory('books')}>
                        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={book} alt="" />
                        <p className='text-center font-semibold pt-1'>Books</p>
                    </div>
                    <div className='h-[135px] w-[120px] bg-white' onClick={() => filterCategory('dress')}>
                        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={dress} alt="" />
                        <p className='text-center font-semibold pt-1'>Dresses</p>
                    </div>
                    <div className='h-[135px] w-[120px] bg-white' onClick={() => filterCategory('toys')}>
                        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={toys} alt="" />
                        <p className='text-center font-semibold pt-1'>Toys</p>
                    </div>
                    <div className='h-[135px] w-[120px] bg-white' onClick={() => filterCategory('bags')}>
                        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={bag} alt="" />
                        <p className='text-center font-semibold pt-1'>Bags</p>
                    </div>
                    <div className='h-[135px] w-[120px] bg-white' onClick={() => filterCategory('shoes')}>
                        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={shoe} alt="" />
                        <p className='text-center font-semibold pt-1'>Shoes</p>
                    </div>
                    <div className='h-[135px] w-[120px] bg-white' onClick={() => filterCategory('others')}>
                        <img  className='h-[100px] w-[100px] pt-4 ps-4' src={other} alt="" />
                        <p className='text-center font-semibold pt-1'>Others</p>
                    </div>
                </div>
                <div className="bg-yellow-300/40 m-auto h-fit flex flex-wrap justify-between gap-24 p-10 pb-1">
                    {filteredData.map((item, index) => (
                        <div key={index}>
                            <Link to={`/organization/viewproductdtlorg/${item.product?._id}`}>
                                <img
                                    className="h-[200px] w-[200px] pt-4 ps-4"
                                    src={`http://localhost:4000/uploads/${item.product?.img}`}
                                    alt=""
                                />
                            </Link>
                            <p className="text-center font-semibold pt -1">{item.product?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Viewproductorg;
