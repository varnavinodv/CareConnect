import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import bag from './bags.jpg'
import axios from 'axios'

const Vwordersorg = () => {

  let id = localStorage.getItem('id')
  const [data, setData] = useState([''])

  useEffect(() => {
    let fetchdata = async () => {
      let response = await axios.get(`http://localhost:4000/organization/vieworder/${id}`)
      console.log(response);
      setData(response.data)
    }
    fetchdata()


  }, [])



  return (
    <div className='w-[100%] '>
      <div className='basicbg w-[100%]  pt-7 ps-10 pe-10 pb-10'>
        <div className='text-3xl text-[#431515] font-semibold text-center pb-7'>ORDERS</div>


        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-black dark:text-black">
            <thead class="text-xs text-black uppercase bg-[#FDA83B] border-b-2 border-orange-600 dark:text-black">
              <tr>
                <th scope="col" class="px-6 py-3">
                  SL NO
                </th>
                <th scope="col" class="px-6 py-3">
                  OWNER
                </th>
                <th scope="col" class="px-6 py-3">
                  ADDRESS
                </th>
                <th scope="col" class="px-6 py-3">
                  PRODUCT
                </th>
                <th scope="col" class="px-6 py-3">
                  CATEGORY
                </th>
                <th scope="col" class="px-6 py-3">
                  IMAGE
                </th>
                <th scope="col" class="px-6 py-3">
                  COUNT
                </th>
                <th scope="col" class="px-6 py-3">
                  DATE
                </th>
                <th scope="col" class="px-6 py-3">
                  STATUS
                </th>

                <th scope="col" class="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr class="bg-[#f8d2a0] border-b border-orange-600 text-black font-semibold hover:bg-[#f7b866d4]">
                  <td class="px-6 py-4">
                    {index + 1}
                  </td>
                  <td class="px-6 py-4">
                    {item.user?.name}
                  </td>
                  <td class="px-6 py-4">
                    {item.user?.houseName} <br />
                    P.O {item.user?.postoffice} <br />
                    pin:{item.user?.pin} <br />
                    {item.district}
                  </td>
                  <td class="px-6 py-4">
                    {item.product?.name}
                  </td>
                  <td class="px-6 py-4">
                    {item.product?.category}
                  </td>
                  <td class="px-6 py-4">
                    <img className='h-14 w-14' src={`http://localhost:4000/uploads/${item.product?.img}`} alt="" />
                  </td>
                  {item.order?.products?.map((item1) => (
                    item1.productId == item.product?._id && (
                      <td class="px-6 py-4">

                        {item1.count}
                      </td>

                    )

                  ))}
                  <td class="px-6 py-4">
                    ---------------
                  </td>

                  <td class="px-6 py-4">
                    pending
                  </td>
                  <td class="px-6 py-4">
                    <Link to='/organization/assigndeliveryboyorg/orders'> <button className='bg-orange-500 text-black py-2 px-2 rounded-lg'>Assign delivery boy</button></Link>
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

export default Vwordersorg
