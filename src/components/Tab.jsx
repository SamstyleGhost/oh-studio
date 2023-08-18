import React from 'react'

const Tab = ({ name, isActive, isShop, handleClick }) => {
  return (
    <div>
      <button 
        className={`rounded-full w-fit px-3 py-1 ${isShop && 'bg-black text-white px-5 py-2 shadow-xl shadow-black hover:scale-110 transition-scale duration-300'} ${isActive === name && 'bg-white'} ${!isActive && !isShop && 'bg-transparent'}`} 
        onClick={handleClick}>
        {name}
      </button>
    </div>
  )
}

export default Tab