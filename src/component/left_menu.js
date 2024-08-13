import React from 'react';
import {FaUser, FaCog} from 'react-icons/fa';
import { TbLayoutDashboardFilled, TbLogout } from "react-icons/tb";

function Dashboard_menu() {
  return(
    <>
    <div className='h-72 w-fit '>
      
      <ul className=' text-black font-semibold text-xl'>
        <li className='flex items-center py-3 pl-10 pr-5 cursor-pointer hover:bg-slate-200 rounded-md'><TbLayoutDashboardFilled  className="m-2"/>Dashbord</li>
        <li className='flex items-center py-3 pl-10 pr-5 cursor-pointer hover:bg-slate-200 rounded-md'><FaUser className="m-2"/>My Profile</li>
        <li className='flex items-center py-3 pl-10 pr-5 cursor-pointer hover:bg-slate-200 rounded-md'><FaCog className="m-2"/>Setting</li>
        <li className='flex items-center py-3 pl-10 pr-5 cursor-pointer hover:bg-slate-200 rounded-md'><TbLogout className="m-2" />Logout</li>
      </ul>
    </div>
    </>
  ); 
}

export default Dashboard_menu;