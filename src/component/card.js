import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { FaRegClock, FaStar } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";

export function CardThree() {
  return (
    <div className="w-[300px] rounded-md border m-5">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      />
      <div className="p-4">
        <button
          type="button"
          className="mt-2 block w-fit rounded bg-customGreen   px-2 py-1.5 text-lg font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
        <h1 className="inline-flex items-center text-xl font-bold cursor-pointer hover:text-customGreen">
          About Macbook 
        </h1>
        {/* <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p> */}
        <div className="mt-4 flex flex-wrap">
          <span className="flex items-center font-semibold mr-5">
          <IoDocumentText className='text-customGreen   mr-3'/>15 Lessons
          </span>
          <span className="flex items-center font-semibold mr-5">
          <FaRegClock className='text-customGreen  mr-3'/> 20 hr 30 min
          </span>
          <span className="flex items-center font-semibold mr-5">
          <FaStar className='text-customGreen  mr-3'/>4 star
          </span>
          <span className="flex items-center font-semibold mr-5">
          <GiNetworkBars className='text-customGreen  mr-3'/>Intermediate
          </span>
        </div>
        
      </div>
    </div>
  )
}
