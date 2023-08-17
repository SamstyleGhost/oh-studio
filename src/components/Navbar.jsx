import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tab from './Tab';

const Navbar = () => {
  return (
    <div>
      <div className='bg-[#e8e5e4]/50 px-1 rounded-full flex gap-4 text-md items-center justify-between h-10'>
      <Tab 
        name={"Home"}
        isActive
      />
      <Tab 
        name={"Profile"}
      />
      <Tab 
        name={"Contact"}
      />
      </div>
    </div>
  )
}

export default Navbar