import React from 'react';
import { bodyImages } from '../constants';
import { Display, Tab } from "../components";
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className='w-full flex justify-center items-center'>
        <div className="w-1/2 max-w-[600px] text-center mt-[200px] mb-[100px]">
          <div className="text-6xl font-medium top-[150px]"> 
          A brand and product designer working with clients globally
          </div>
        </div>
      </div>
      <div className="mt-8 mx-10 lg:mx-40 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-x-4 gap-y-4">
        {bodyImages.map((asset) => (
          <Display 
            asset={asset}
          />
        ))}
      </div>  
      <div className='flex justify-center fixed w-full h-10 z-10'>
          <div className='fixed bottom-8'>
            <Tab 
              name={"Shop"}
              isShop
              handleClick={() => { navigate('/shop'); }}
            />
          </div>
      </div>
    </div>
  )
}

export default Home