import React from 'react'

const Tab = ({ name, isActive }) => {

  const bgStyle = isActive ? {
    backgroundColor: 'white',
  } : {
    backgroundColor: 'transparent',
  }

  return (
    <div className='rounded-full bg-white w-fit px-3 py-1' style={bgStyle}>
      {name}
    </div>
  )
}

export default Tab