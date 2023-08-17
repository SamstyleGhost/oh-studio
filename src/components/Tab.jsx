import React from 'react'

const Tab = ({ name, isActive }) => {

  const bgStyle = isActive ? {
    backgroundColor: 'white',
  } : {
    backgroundColor: '#e8e5e4',
  }

  return (
    <div className='rounded-full bg-white w-fit px-3 py-1' style={bgStyle}>
      {name}
    </div>
  )
}

export default Tab