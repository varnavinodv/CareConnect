import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import call from '../User/callbrwn.png';
import email from '../User/emailbrwn.png';
import locatn from '../User/locatnbrwn.png';
import arrow from '../User/arrow.png';
import add from '../User/addbtn.png';
import reviewSymbol from '../Admin/review.png';
import running from '../User/running.png';
import axios from 'axios';

const Vworgdtlorph = () => {
  const [data, setData] = useState(null);
  const [drop, setDrop] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/orphanage/vieworgdetail/${id}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const toggleDropdown = () => {
    setDrop(!drop);
  };

  const renderUniqueReports = () => {
    const uniqueYears = new Set();
    if (data && data.responsedata) {
      data.responsedata.forEach(item1 => {
        if (item1.reports) {
          item1.reports.forEach(report => {
            uniqueYears.add(report.year);
          });
        }
      });
    }

    return (
      <div className='list-none w-fit sm:left-[19rem] p-2 bg-white text-black text-lg font-semibold rounded-lg'>
        {[...uniqueYears].map((year, index) => (
          <li key={index} className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>
            {year}
          </li>
        ))}
      </div>
    );
  };

  const renderUniqueReviews = () => {
    const uniqueReviews = [];
    if (data && data.responsedata) {
      data.responsedata.forEach(item1 => {
        if (item1.reviews) {
          item1.reviews.forEach(item2 => {
            const existingReview = uniqueReviews.find(review => review._id === item2._id);
            if (!existingReview) {
              uniqueReviews.push(item2);
            }
          });
        }
      });
    }

    return uniqueReviews.map(review => (
      <div key={review._id} className='bg-white p-3 rounded-lg align-text-bottom mt-4'>
        <div className='flex flex-wrap'>
          <img className='h-[25px] w-[25px]' src={reviewSymbol} alt='' />
          <h3 className='text-slate-500 ps-1'>Review</h3>
        </div>
        <h1 className='font-semibold text-base text-gray-700'>{data.response?.name}</h1>
        <p className='text-black text-sm'>{review.review}</p>
      </div>
    ));
  };

  return (
    <div className='w-[100%]'>
      <div className='basicbg2 sm:ps-40 flex flex-wrap justify-between'>
        {data && (
          <div>
            <div className='font-bold text-4xl text-amber-950 py-8'>{data.response?.name}</div>
            <div>
              <div className='flex flex-wrap gap-3 pb-3'>
                <img className='w-[30px] h-[30px]' src={call} alt='' />
                <p>{data.response?.phno}</p>
              </div>
              <div className='flex flex-wrap gap-3 pb-3'>
                <img className='w-[30px] h-[30px]' src={email} alt='' />
                <p>{data.response?.email}</p>
              </div>
              <div className='flex flex-wrap gap-3 pe-8 pb-3'>
                <img className='w-[30px] h-[30px]' src={locatn} alt='' />
                <p>
                  {data.response?.place}
                  <br />
                  P.O {data.response?.postoffice} <br />
                  pin:{data.response?.pin}
                  <br />
                  {data.response?.district}
                </p>
              </div>
            </div>
            <div className='flex flex-wrap justify-between gap-2 w-100%'>
              <button className='bg-orange-500 py-2 px-3 rounded-lg' onClick={toggleDropdown}>
                <div className='flex flex-wrap items-center'>
                  <p className='text-white text-lg'>View reports</p>
                  <img className='w-[30px] h-[30px]' src={arrow} alt='' />
                </div>
              </button>
              <div>
                <Link to={`/orphanage/addrevieworph/${data.response?._id}`}>
                  <button className='bg-orange-500 py-2 px-3 rounded-lg'>
                    <div className='flex flex-wrap items-center'>
                      <img className='w-[40px] h-[30px]' src={add} alt='' />
                      <p className='text-white text-lg'>Add review</p>
                    </div>
                  </button>
                </Link>
              </div>
              {drop && (
                <div className='w-[60%] flex justify-end'>
                  {renderUniqueReports()}
                </div>
              )}
            </div>
            <div>{renderUniqueReviews()}</div>
          </div>
        )}
        <div className=''>
          <img className='h-[]   items-end ' src={running} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Vworgdtlorph;

























// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import call from '../User/callbrwn.png'
// import email from '../User/emailbrwn.png'
// import locatn from '../User/locatnbrwn.png'
// import arrow from '../User/arrow.png'
// import add from '../User/addbtn.png'
// import review from '../Admin/review.png'
// import running from '../User/running.png'
// import axios from 'axios'

// const Vworgdtlorph = () => {

//   const [data,setData]=useState([''])
//   let {id} =useParams()
//   console.log(id);
//   useEffect(()=>{
//     let fetchdata=async ()=>{
//       let response=await axios.get(`http://localhost:4000/orphanage/vieworgdetail/${id}`)
//       console.log(response);
//       setData(response.data)
//     }
//     fetchdata()

    
//   },[])
//   const [drop, setDrop] = useState(false)
//   let dropdown = () => {
//     setDrop(!drop)


//   }
//   return (
//     <div className='w-[100%]'>
//       <div className='basicbg2   sm:ps-40 flex flex-wrap justify-between'>
//       {/* {data.map((item)=>(  */}
//         <div >
       
//           <div className='font-bold text-4xl text-amber-950 py-8'>{data.response?.name}</div>
//           <div>
//             <div className='flex flex-wrap  gap-3 pb-3'>
//               <img className='w-[30px] h-[30px]' src={call} alt="" />
//               <p>{data.response?.phno}</p>
//             </div>
//             <div className='flex flex-wrap  gap-3 pb-3'>
//               <img className='w-[30px] h-[30px]' src={email} alt="" />
//               <p>{data.response?.email}</p>
//             </div>
//             <div className='flex flex-wrap  gap-3 pe-8 pb-3'>
//               <img className='w-[30px] h-[30px]' src={locatn} alt="" />
//               <p>{data.response?.place}<br />P.O {data.response?.postoffice} <br />
//                 pin:{data.response?.pin}<br />
//                 {data.response?.district}</p>
//             </div>
//           </div>
//           <div className='flex flex-wrap justify-between gap-2 w-100%'>
//             <button className='bg-orange-500 py-2 px-3 rounded-lg' onClick={dropdown}>
//               <div className='flex flex-wrap items-center'>
//               <p className='text-white text-lg'>View reports</p>
//               <img className='w-[30px] h-[30px]' src={arrow} alt="" />
//             </div>
//             </button>
//             <div>
//             <Link to={`/orphanage/addrevieworph/${data.response?._id}`}><button className='bg-orange-500 py-2 px-3 rounded-lg'><div className='flex flex-wrap items-center'>
//               <img className='w-[40px] h-[30px]' src={add} alt="" />
//               <p className='text-white text-lg'>Add review</p>
//             </div>
//             </button></Link></div>
//             {drop &&
//               <div className='w-[60%] flex justify-end'>


//                 <div className='list-none w-fit sm:left-[19rem] p-2 bg-white text-black text-lg  font-semibold rounded-lg  '>
//                 {data.responsedata?.map((item1)=>(
//                   item1.reports?.map((item2)=>(
//                   <li className='hover:bg-slate-400 p-[2px] px-[10px] rounded-md'>{item2.year}</li>
//                   ))
//                 ))}

//                 </div>
//               </div>
//             }
           
//           </div>
//           <div>
//           {data.responsedata?.map((item1)=>(
//             item1.reviews?.map((item2)=>(
//             <div className='bg-white  p-3 rounded-lg align-text-bottom mt-24'>
//               <div className='flex flex-wrap'>
//                 <img className='h-[25px] w-[25px]' src={review} alt="" />
//                 <h3 className='text-slate-500 ps-1'>Review</h3>

//               </div>
//               <h1 className='font-semibold text-base text-gray-700'>{item1.orph?.name}</h1>
//               <p className='text-black text-sm'>{item2.review}</p>


//             </div>
//             ))
//             ))}
          
          
//           </div>
//         </div>
//         {/* ))} */}
//         <div className=' '>
//           <img className='h-[]   items-end ' src={running} alt="" />
//         </div>




//       </div>

//     </div>
//   )
// }


// export default Vworgdtlorph
