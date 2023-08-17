import React from 'react'

const Tab = ({ name, isActive, isShop }) => {

  return (
    <div className={`rounded-full w-fit px-3 py-1 ${isShop && 'bg-black text-white px-5 py-2 shadow-lg shadow-black'} ${isActive && 'bg-white'} ${!isActive && !isShop && 'bg-transparent'}`}>
      {name}
    </div>
  )
}

export default Tab