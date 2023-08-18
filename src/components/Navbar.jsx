import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tab from './Tab';
import { navlinks } from '../constants';

const Navbar = () => {

  const [isActive, setIsActive] = useState("Home");
  const navigate = useNavigate();

  console.log('isActive', isActive);

  return (
    <div>
      <div className='bg-[#e8e5e4]/50 px-1 rounded-full flex gap-4 text-md items-center justify-between h-10'>
        {navlinks.map((link) => (

             <Tab 
              key={link.name}
              name={link.name}
              isActive={isActive}
              handleClick={() => {
                setIsActive(link.name);
                navigate(link.link);
              }}
            />  
        ))}
      </div>
    </div>
  )
}

export default Navbar